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

export { EchoNode, DirectiveNode, LiteralNode }