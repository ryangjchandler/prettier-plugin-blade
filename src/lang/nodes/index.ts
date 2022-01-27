import { doc, format } from 'prettier'
import {builders} from "prettier/doc";
import { formatAsPhp } from '../../utils';
import Doc = builders.Doc;

const { builders: { group, softline, indent } } = doc

export interface Node {
    toDoc(): Doc
    toString(): string
    getId(): number
}

export enum EchoType {
    Escaped,
    Raw,
}

export namespace EchoType {
    export function toStringParts(type: EchoType): string[] {
        switch (type) {
            case EchoType.Escaped:
                return ['{{', '}}']
            case EchoType.Raw:
                return ['{!!', '!!}']
        }
    }
}

export class EchoNode implements Node {
    constructor(private content: string, private code: string, private type: EchoType, private id: number) {}

    toDoc(): Doc {
        return group([this.toString()])
    }

    toString(): string {
        const [open, close] = EchoType.toStringParts(this.type)

        return `${open} ${formatAsPhp(this.code)} ${close}`
    }

    getId(): number {
        return this.id
    }
}

export class DirectiveNode implements Node {
    constructor(public content: string, public directive: string, public code: string, public line: number, private id: number) {}

    toDoc(): Doc {
        return group([this.toString()])
    }

    toString(): string {
        return `@${this.directive}${this.code ? `(${formatAsPhp(this.code)})` : ''}`
    }

    getId(): number {
        return this.id
    }
}

export class LiteralNode implements Node {
    constructor(private content: string, private id: number) {}

    toDoc(): Doc {
        return group(this.toString())
    }

    toString(): string {
        return this.content
    }

    getId(): number {
        return this.id
    }
}

export class DirectivePairNode implements Node {

    constructor(
        public readonly open: DirectiveNode,
        public readonly close: DirectiveNode,
        public readonly arms: DirectiveNode[],
        public readonly children: Node[],
        private id: number
    ) { }

    toDoc(): Doc {
        return group([
            softline,
            this.open.toDoc(),
            this.children.map(child => indent(child.toDoc())),
            this.close.toDoc()
        ])
    }

    toString(): string {
        return `${this.open.toString()}${this.children.map(child => child.toString()).join()}${this.close.toString()}`
    }

    getId(): number {
        return this.id
    }
}

export class CommentNode implements Node {
    constructor(private code: string, private content: string, private id: number) {}

    toDoc(): Doc {
        return group([this.toString()])
    }

    toString(): string {
        return `{{-- ${this.content} --}}`
    }

    getId(): number {
        return this.id
    }
}