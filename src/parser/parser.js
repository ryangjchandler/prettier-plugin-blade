import { TokenType, Token } from './token'
import * as Nodes from './nodes'

export class Parser {
    constructor(tokens) {
        this.tokens = tokens
        this.tokens.push(Token.eof())

        this.nodes = []
        this.current = Token.eof()
        this.next = Token.eof()
        this.i = -1
    }

    parse() {
        this.read()
        this.read()

        while (this.current.type !== TokenType.T_EOF) {
            this.nodes.push(this.node())
        }

        return this.nodes
    }

    node() {
        if (this.current.type === TokenType.T_ECHO) {
            return this.echo()
        } else if (this.current.type === TokenType.T_DIRECTIVE) {
            return this.directive()
        } else {
            const node =  new Nodes.LiteralNode(this.current.raw)
            this.read()

            return node
        }
    }

    echo() {
        const node = new Nodes.EchoNode(this.current.raw, this.current.raw.substring(2, this.current.raw.length - 2).trim())
        this.read()

        return node
    }

    directive() {
        let directiveName = this.current.raw.substring(this.current.raw.indexOf('@') + 1)

        if (directiveName.includes('(')) {
            directiveName = directiveName.substring(directiveName.indexOf('(') + 1)
        }

        let inner = this.current.raw.replace('@' + directiveName, '')
        if (inner.startsWith('(')) {
            inner = inner.substring(1)
        }

        if (inner.endsWith(')')) {
            inner = inner.substring(0, inner.length - 1)
        }

        const directive = new Nodes.DirectiveNode(this.current.raw, directiveName, inner)

        this.read()

        return directive
    }

    read() {
        this.i += 1
        this.current = this.next
        this.next = this.i >= this.tokens.length ? Token.eof() : this.tokens[this.i]
    }
}