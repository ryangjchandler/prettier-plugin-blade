import { TokenType, Token } from './token'
import * as Nodes from './nodes'
import {DirectiveNode, DirectivePairNode, EchoNode, LiteralNode, Node, EchoType, CommentNode} from "./nodes";

const STATIC_BLOCK_DIRECTIVES: string[] = [
    'if', 'for', 'foreach', 'forelse', 'unless',
    'while', 'isset', 'empty', 'auth', 'guest',
    'production', 'env', 'hasSection', 'sectionMissing',
    'switch', 'once', 'verbatim', 'error', 'push',
    'prepend',
];

const isBlockDirective = (directive: DirectiveNode): boolean => {
    if (STATIC_BLOCK_DIRECTIVES.includes(directive.directive)) {
        return true
    }

    if (directive.directive === 'php' && ! directive.code) {
        return true
    }

    // Support for custom directives?
    return false
}

const directiveCanBeClosedBy = (open: DirectiveNode, close: DirectiveNode): boolean => {
    return close.directive === ('end' + open.directive)
}

const isBlockArmDirectiveFor = (open: DirectiveNode, directive: DirectiveNode): boolean => {
    return ['else', 'else' + open.directive].includes(directive.directive)
}

const isBlockClosingDirective = (directive: DirectiveNode): boolean => directive.directive.startsWith('end')
const guessClosingBlockDirective = (directive: DirectiveNode): string => 'end' + directive.directive

export class Parser {
    private nodes: Node[];
    private current: Token;
    private next: Token;
    private i: number;
    private id: number;

    constructor(private tokens: Token[]) {
        this.tokens.push(Token.eof())

        this.nodes = []
        this.current = Token.eof()
        this.next = Token.eof()
        this.i = -1
        this.id = -1
    }

    parse() {
        this.read()
        this.read()

        while (this.current.type !== TokenType.T_EOF) {
            this.nodes.push(this.node())
        }

        return this.nodes
    }

    node(): Node {
        this.id += 1

        if (this.current.type === TokenType.T_ECHO) {
            return this.echo()
        } else if (this.current.type === TokenType.T_RAW_ECHO) {
            return this.rawEcho()
        } else if (this.current.type === TokenType.T_DIRECTIVE) {
            return this.directive()
        } else if (this.current.type === TokenType.T_COMMENT) {
          return this.comment()
        } else {
            const node =  new LiteralNode(this.current.raw, this.id)
            this.read()

            return node
        }
    }

    echo(): EchoNode {
        const node = new EchoNode(this.current.raw, this.current.raw.substring(2, this.current.raw.length - 2).trim(), EchoType.Escaped, this.id)
        this.read()

        return node
    }

    comment(): CommentNode {
        const node = new CommentNode(
            this.current.raw,
            this.current.raw.substring(4, this.current.raw.length - 4).trim(),
            this.id
        )
        this.read()

        return node
    }

    rawEcho(): EchoNode {
        const node = new EchoNode(this.current.raw, this.current.raw.substring(3, this.current.raw.length - 3).trim(), EchoType.Raw, this.id)
        this.read()

        return node
    }

    directive(): DirectiveNode|DirectivePairNode {
        let directiveName = this.current.raw.substring(this.current.raw.indexOf('@') + 1)

        if (directiveName.includes('(')) {
            directiveName = directiveName.substring(0, directiveName.indexOf('('))
        }

        let inner = this.current.raw.replace('@' + directiveName, '')
        if (inner.startsWith('(')) {
            inner = inner.substring(1)
        }

        if (inner.endsWith(')')) {
            inner = inner.substring(0, inner.length - 1)
        }

        const directive = new DirectiveNode(this.current.raw, directiveName, inner, this.current.line, this.id)

        this.read()

        if (! isBlockDirective(directive)) {
            return directive
        }

        let children = []
        let arms = []
        let close = null

        while (this.current.type !== TokenType.T_EOF) {
            const child = this.node()
            
            if (! (child instanceof DirectiveNode)) {
                children.push(child)
                continue
            }

            if (directiveCanBeClosedBy(directive, child)) {
                close = child
                break
            } else if (isBlockArmDirectiveFor(directive, child)) {
                children.push(child)
                arms.push(child)
            } else if (isBlockClosingDirective(child)) {
                throw `Unexpected directive ${child.directive} on line ${child.line}, expected ${guessClosingBlockDirective(directive)}`;
            }
        }

        if (close === null) {
            throw `Could not find "@end..." directive for "@${directive.directive}" defined on line ${directive.line}.`
        }

        return new DirectivePairNode(directive, close, arms, children, this.id)
    }

    read() {
        this.i += 1
        this.current = this.next
        this.next = this.i >= this.tokens.length ? Token.eof() : this.tokens[this.i]
    }
}