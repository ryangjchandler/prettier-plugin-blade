import { doc, format } from 'prettier'
// @ts-ignore
import php from '@prettier/plugin-php/standalone'
import {builders} from "prettier/doc";
import Doc = builders.Doc;

const { builders: { group, softline, indent } } = doc

export interface Node {
    toDoc(): Doc
    toString(): string
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
    constructor(private content: string, private code: string, private type: EchoType) {}

    toDoc(): Doc {
        return group([this.toString()])
    }

    toString(): string {
        let code = format(`<?php ${this.code}`, { parser: 'php', plugins: [php] }).replace('<?php ', '').trim()
        code = code.substring(0, code.length - 1)

        const [open, close] = EchoType.toStringParts(this.type)
        return `${open} ${code} ${close}`
    }
}

export class DirectiveNode implements Node {
    constructor(public content: string, public directive: string, public code: string, public line: number) {}

    toDoc(): Doc {
        return group([this.toString()])
    }

    toString(): string {
        return `@${this.directive}${this.code ? `(${this.code})` : ''}`
    }
}

export class LiteralNode implements Node {
    constructor(private content: string) {}

    toDoc(): Doc {
        return group(this.toString())
    }

    toString(): string {
        return this.content
    }
}

export class DirectivePairNode implements Node {

    constructor(
        private open: DirectiveNode,
        private close: DirectiveNode,
        private children: Node[]
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
}