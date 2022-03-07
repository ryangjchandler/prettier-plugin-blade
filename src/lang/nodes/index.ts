import { formatAsPhp, nextId, placeholderElement } from "../../utils";

export type AsHtml = string | HtmlOutput | AsHtml[]

export interface HtmlOutput {
    asHtml: AsHtml
    asReplacer?: AsReplacer
}

export type AsReplacer = Replacer | string | Replacer[]

export interface Replacer {
    search: string | RegExp
    replace: string
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

    toHtml(): HtmlOutput {
        return {
            asHtml: placeholderElement("e", this.toString()),
            asReplacer: this.toString(),
        };
    }

    toString(): string {
        const [open, close] = EchoType.toStringParts(this.type);

        return `${open} ${formatAsPhp(this.code)} ${close}`;
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
        var loopSpacer = "";

        if (["for", "foreach", "forelse", "while"].includes(this.directive)) {
            loopSpacer = " ";
        }

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

        return `@${this.directive}${loopSpacer}${code}`;
    }

    toHtml(): HtmlOutput {
        return {
            asHtml: `<directive-${this.directive}-${nextId()} />`,
            asReplacer: this.toString(),
        };
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
        }
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
            ]
        }
    }
}

export class VerbatimNode implements Node {
    constructor(
        public open: DirectiveNode,
        public close: DirectiveNode,
        public content: string,
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
            ]
        }
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
        return `{{-- ${this.content.trim()} --}}`;
    }

    toHtml(): HtmlOutput {
        return {
            asHtml: placeholderElement("c", this.toString()),
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
        public elseIfBlocks: DirectiveElseIfBlockNode[],
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
                    search: new RegExp(`\n?.*<\\/if-open-${uuid}>`),
                    replace: "",
                },
                {
                    search: new RegExp(`<if-close-${uuid} \\/>`),
                    replace: this.close.toString(),
                },
            ]
        }
    }
}

export class DirectiveElseBlockNode implements Node {
    constructor(
        public elseDirective: DirectiveNode,
        public children: Node[]
    ) {}

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
                    search: new RegExp(`\n?.*<\\/else-${id}>`),
                    replace: "",
                },
            ]
        }
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
                    search: `\n</else-if-${id}>`,
                    replace: "",
                },
            ]
        }
    }
}
