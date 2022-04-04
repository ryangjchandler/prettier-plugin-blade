import {
    formatAsPhp,
    nextId,
    placeholderString,
    placeholderElement,
} from "../../utils";

export type AsHtml = string | HtmlOutput | AsHtml[];

export interface HtmlOutput {
    asHtml: AsHtml;
    asReplacer?: AsReplacer;
}

export type AsReplacer = Replacer | string | Replacer[];

export interface Replacer {
    search: string | RegExp;
    replace: string;
}

const forceHtmlSplit = " <div x-delete-x></div> ";

export interface Node {
    toHtml(): HtmlOutput;
}

export enum EchoType {
    Escaped,
    Raw,
}

export namespace EchoType {
    export function toStringParts(type: EchoType): string[] {
        switch (type) {
            case EchoType.Escaped:
                return ["{{", "}}"];
            case EchoType.Raw:
                return ["{!!", "!!}"];
        }
    }
}

export class DocumentNode implements Node {
    constructor(public children: Node[]) {}

    toHtml(): HtmlOutput {
        return {
            asHtml: this.children.map((child) => child.toHtml()),
        };
    }
}

export class EchoNode implements Node {
    constructor(
        private content: string,
        private code: string,
        private type: EchoType
    ) {}

    private _formattedCode: string = "";

    get formattedCode(): string {
        if (this._formattedCode === "" && this.code !== "") {
            this._formattedCode = formatAsPhp(this.code);
        }
        return this._formattedCode;
    }

    toHtml(): HtmlOutput {
        if (this.formattedCode.match(/\n/)) {
            // If the PHP is formatted onto multiple lines, pack it back on to a
            // single line. First, put object access lines back together w/o any
            // space between, then put anything else together w/ a single space.
            // @ts-ignore
            this._formattedCode = this.formattedCode
                .replace(/\n\s+->/g, "->")
                .replace(/\n\s+/g, " ");
        }

        return {
            asHtml: placeholderString("e", this.toString()),
            asReplacer: this.toString(),
        };
    }

    toString(): string {
        const [open, close] = EchoType.toStringParts(this.type);

        return `${open} ${this.formattedCode} ${close}`;
    }
}

export class DirectiveNode implements Node {
    constructor(
        public content: string,
        public directive: string,
        public code: string
    ) {}

    toString(): string {
        var code = "";
        var spacer = [
            "for",
            "foreach",
            "forelse",
            "while",
            "if",
            "elseif",
            "unless",
        ].includes(this.directive)
            ? " "
            : "";

        if (this.directive === "for") {
            code = formatAsPhp(`for (${this.code}) {\n}`).slice(4, -4);
        } else if (
            this.directive === "foreach" ||
            this.directive === "forelse"
        ) {
            code = formatAsPhp(`foreach (${this.code}) {\n}`).slice(8, -4);
        } else if (this.code) {
            code = formatAsPhp(`a(${this.code})`).substring(1);
        }

        return `@${this.directive}${spacer}${code}`;
    }

    toHtml(): HtmlOutput {
        let id = nextId();
        let asHtml = `<directive-${this.directive}-${id} />`;
        let asReplacer = this.toString();

        // checked/selected/disabled are "attribute" directives, so we have use
        // a placeholder string instead of a placeholder element
        // FIXME this is bare-minimum support
        if (
            ["checked", "selected", "disabled"].includes(
                this.directive.toLowerCase()
            )
        ) {
            asHtml = placeholderString(
                `directive_${this.directive}`,
                asReplacer
            );
        }

        return { asHtml, asReplacer };
    }
}

export class LiteralNode implements Node {
    constructor(private content: string) {}

    toString(): string {
        return this.content;
    }

    toHtml(): HtmlOutput {
        return {
            asHtml: this.content,
        };
    }
}

export class DirectivePairNode implements Node {
    constructor(
        public open: DirectiveNode,
        public close: DirectiveNode,
        public children: Node[]
    ) {}

    toString(): string {
        return `${this.open.toString()}${this.children
            .map((child) => child.toString())
            .join()}${this.close.toString()}`;
    }

    toHtml(): HtmlOutput {
        const uuid = nextId();

        return {
            asHtml: [
                `<pair-${uuid}>`,
                forceHtmlSplit,
                ...this.children.map((child) => child.toHtml()),
                ` </pair-${uuid}>`,
            ],
            asReplacer: [
                {
                    search: `<pair-${uuid}>`,
                    replace: this.open.toString(),
                },
                {
                    search: `</pair-${uuid}>`,
                    replace: this.close.toString(),
                },
            ],
        };
    }
}

export class VerbatimNode implements Node {
    constructor(
        public open: DirectiveNode,
        public close: DirectiveNode,
        public content: string
    ) {}

    toString(): string {
        throw new Error("Not possible.");
    }

    toHtml(): HtmlOutput {
        const uuid = nextId();

        return {
            asHtml: [
                `<vervatim-${uuid}>`,
                forceHtmlSplit,
                this.content,
                ` </vervatim-${uuid}>`,
            ],
            asReplacer: [
                {
                    search: `<vervatim-${uuid}>`,
                    replace: this.open.toString(),
                },
                {
                    search: `</vervatim-${uuid}>`,
                    replace: this.close.toString(),
                },
            ],
        };
    }
}

export class PhpNode implements Node {
    constructor(
        public open: DirectiveNode,
        public close: DirectiveNode,
        public code: string
    ) {}

    toHtml(): HtmlOutput {
        return {
            asHtml: `<php-${nextId()} />`,
            asReplacer: this.toString(),
        };
    }

    toString(): string {
        return `@php\n\n${formatAsPhp(this.code)}\n\n@endphp`;
    }
}

export class CommentNode implements Node {
    constructor(private code: string, private content: string) {}

    toString(): string {
        return this.code;
    }

    toHtml(): HtmlOutput {
        return {
            asHtml: placeholderString("c", this.toString()),
            asReplacer: this.toString(),
        };
    }
}

export class DirectiveIfBlockNode implements Node {
    constructor(
        public open: DirectiveNode,
        public close: DirectiveNode,
        public children: Node[],
        public elseBlock: DirectiveElseBlockNode | null,
        public elseIfBlocks: DirectiveElseIfBlockNode[]
    ) {}

    toHtml(): HtmlOutput {
        const uuid = nextId();

        return {
            asHtml: [
                `<if-open-${uuid}>`,
                forceHtmlSplit,
                ...this.children.map((child) => child.toHtml()),
                ` </if-open-${uuid}> `,
                this.elseIfBlocks.map((block) => block.toHtml()),
                this.elseBlock?.toHtml() ?? [],
                ` <if-close-${uuid} />`,
            ],
            asReplacer: [
                {
                    search: `<if-open-${uuid}>`,
                    replace: this.open.toString(),
                },
                {
                    search: new RegExp(`\n?\\s*<\\/if-open-${uuid}>`),
                    replace: "",
                },
                {
                    search: new RegExp(`<if-close-${uuid} \\/>`),
                    replace: this.close.toString(),
                },
            ],
        };
    }
}

export class DirectiveForElseBlockNode implements Node {
    constructor(
        public open: DirectiveNode,
        public close: DirectiveNode,
        public children: Node[],
        public emptyBlock: DirectiveEmptyBlockNode | null
    ) {}

    toHtml(): HtmlOutput {
        const id = nextId();

        return {
            asHtml: [
                `<forelse-open-${id}>`,
                forceHtmlSplit,
                ...this.children.map((child) => child.toHtml()),
                ` </forelse-open-${id}> `,
                this.emptyBlock?.toHtml() ?? [],
                ` <forelse-close-${id} />`,
            ],
            asReplacer: [
                {
                    search: `<forelse-open-${id}>`,
                    replace: this.open.toString(),
                },
                {
                    search: new RegExp(`\n?\\s*<\\/forelse-open-${id}>`),
                    replace: "",
                },
                {
                    search: new RegExp(`<forelse-close-${id} \\/>`),
                    replace: this.close.toString(),
                },
            ],
        };
    }
}

export class DirectiveElseBlockNode implements Node {
    constructor(public elseDirective: DirectiveNode, public children: Node[]) {}

    toHtml(): HtmlOutput {
        const id = nextId();

        return {
            asHtml: [
                ` <else-${id}>`,
                forceHtmlSplit,
                ...this.children.map((child) => child.toHtml()),
                ` </else-${id}>`,
            ],
            asReplacer: [
                {
                    search: `<else-${id}>`,
                    replace: this.elseDirective.toString(),
                },
                {
                    search: new RegExp(`\n?\\s*<\\/else-${id}>`),
                    replace: "",
                },
            ],
        };
    }
}

export class DirectiveEmptyBlockNode implements Node {
    constructor(
        public emptyDirective: DirectiveNode,
        public children: Node[]
    ) {}

    toHtml(): HtmlOutput {
        const id = nextId();

        return {
            asHtml: [
                ` <empty-${id}>`,
                forceHtmlSplit,
                ...this.children.map((child) => child.toHtml()),
                ` </empty-${id}>`,
            ],
            asReplacer: [
                {
                    search: `<empty-${id}>`,
                    replace: this.emptyDirective.toString(),
                },
                {
                    search: new RegExp(`\n?\\s*<\\/empty-${id}>`),
                    replace: "",
                },
            ],
        };
    }
}

export class DirectiveElseIfBlockNode implements Node {
    constructor(
        public elseIfDirective: DirectiveNode,
        public children: Node[]
    ) {}

    toHtml(): HtmlOutput {
        const id = nextId();

        return {
            asHtml: [
                ` <else-if-${id}>`,
                forceHtmlSplit,
                ...this.children.map((child) => child.toHtml()),
                ` </else-if-${id}>`,
            ],
            asReplacer: [
                {
                    search: `<else-if-${id}>`,
                    replace: this.elseIfDirective.toString(),
                },
                {
                    search: new RegExp(`\n?\\s*<\\/else-if-${id}>`),
                    replace: "",
                },
            ],
        };
    }
}
