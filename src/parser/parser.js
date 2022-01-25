import { TokenType, Token } from './token'
import * as Nodes from './nodes'

const STATIC_BLOCK_DIRECTIVES = [
    'if', 'for', 'foreach', 'forelse', 'unless',
    'while', 'isset', 'empty', 'auth', 'guest',
    'production', 'env', 'hasSection', 'sectionMissing',
    'switch', 'once', 'verbatim', 'error', 'push',
    'prepend',
];

const isBlockDirective = (directive) => {
    if (STATIC_BLOCK_DIRECTIVES.includes(directive.directive)) {
        return true
    }

    if (directive.directive === 'php' && ! directive.code) {
        return true
    }

    // Support for custom directives?
    return false
}

const directiveCanBeClosedBy = (open, close) => {
    return close.directive === ('end' + open.directive)
}

const isBlockClosingDirective = (directive) => directive.directive.startsWith('end')
const guessClosingBlockDirective = (directive) => 'end' . directive.directive

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

        const directive = new Nodes.DirectiveNode(this.current.raw, directiveName, inner, this.current.line)

        this.read()

        if (! isBlockDirective(directive)) {
            return directive
        }

        let children = []
        let close = null

        while (this.current.type !== TokenType.T_EOF) {
            const child = this.node()
            
            if (child instanceof Nodes.DirectiveNode && directiveCanBeClosedBy(directive, child)) {
                close = child
                break
            }

            if (child instanceof Nodes.DirectiveNode && isBlockClosingDirective(child)) {
                throw `Unexpected directive ${child.directive} on line ${child.line}, expected ${guessClosingBlockDirective(directive)}`;
            }

            children.push(child)
        }

        if (close === null) {
            throw `Could not find "@end..." directive for "@${directive.directive}" defined on line ${directive.line}.`
        }

        return new Nodes.DirectivePairNode(directive, close, children)
    }

    read() {
        this.i += 1
        this.current = this.next
        this.next = this.i >= this.tokens.length ? Token.eof() : this.tokens[this.i]
    }
}