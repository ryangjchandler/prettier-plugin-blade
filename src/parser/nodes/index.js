class EchoNode {
    constructor(content, code) {
        this.content = content
        this.code = code
    }
}

class DirectiveNode {
    constructor(content, directive, code, line) {
        this.content = content
        this.directive = directive
        this.code = code
        this.line = line
    }
}

class LiteralNode {
    constructor(content) {
        this.content = content
    }
}

class DirectivePairNode {
    constructor(open, close, children, line) {
        this.open = open
        this.close = close
        this.children = children
    }
}

export { EchoNode, DirectiveNode, LiteralNode, DirectivePairNode }