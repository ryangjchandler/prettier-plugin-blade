import {doc} from "prettier";
import {builders} from "prettier/doc";
import {formatAsHtml, formatAsPhp} from "../../utils";
import Doc = builders.Doc;
import group = doc.builders.group;
import hardline = doc.builders.hardline;
import indent = doc.builders.indent;

export interface Node {
    toDoc(): Doc;
    toString(): string;
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

    toDoc(): Doc[] {
        return [
            ...this.children.map((child) => child.toDoc())
        ];
    }
}

export class EchoNode implements Node {
    constructor(
        private content: string,
        private code: string,
        private type: EchoType
    ) {}

    toDoc(): Doc {
        return group([this.toString()]);
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

    toDoc(): Doc {
        return group([
            this.toString(),
        ]);
    }

    toString(): string {
        return `@${this.directive}${
            this.code ? `(${formatAsPhp(this.code)})` : ""
        }`;
    }
}

export class LiteralNode implements Node {
    constructor(private content: string) {}

    toDoc(): Doc {
        return this.toString();
    }

    toString(): string {
        return this.content;
    }
}

export class DirectivePairNode implements Node {
    constructor(
        public open: DirectiveNode,
        public close: DirectiveNode,
        public children: Node[]
    ) {}

    toDoc(): Doc {
        return [
            this.open.toString(),
            indent([
                hardline,
                ...this.children.map(function (child) {
                    if (child instanceof LiteralNode) {
                        return child.toString().trim()
                    }

                    return child.toDoc();
                }),
            ]),
            hardline,
            this.close.toString(),
        ];
    }

    toString(): string {
        return `${this.open.toString()}${this.children
            .map((child) => child.toString())
            .join()}${this.close.toString()}`;
    }
}

export class VerbatimNode implements Node {
    constructor(private content: string) {}

    toDoc(): Doc {
        // We're doing a bit of trick here where we replace the verbatim tags after formatting as HTML
        // so we get correct indentation.
        const fakeHtml = formatAsHtml(`
            <verbatim-block>
                ${this.toString()}
            </verbatim-block>
        `);

        return fakeHtml
            .replace("<verbatim-block>", "@verbatim")
            .replace("</verbatim-block>", "@endverbatim");
    }

    toString(): string {
        return this.content;
    }
}

export class CommentNode implements Node {
    constructor(private code: string, private content: string) {}

    toDoc(): Doc {
        return group([this.toString()]);
    }

    toString(): string {
        return `{{-- ${this.content} --}}`;
    }
}
