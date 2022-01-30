"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentNode = exports.VerbatimNode = exports.DirectivePairNode = exports.LiteralNode = exports.DirectiveNode = exports.EchoNode = exports.EchoType = void 0;
const prettier_1 = require("prettier");
const utils_1 = require("../../utils");
const { builders: { group, softline, indent, line, hardline }, } = prettier_1.doc;
var EchoType;
(function (EchoType) {
    EchoType[EchoType["Escaped"] = 0] = "Escaped";
    EchoType[EchoType["Raw"] = 1] = "Raw";
})(EchoType = exports.EchoType || (exports.EchoType = {}));
(function (EchoType) {
    function toStringParts(type) {
        switch (type) {
            case EchoType.Escaped:
                return ["{{", "}}"];
            case EchoType.Raw:
                return ["{!!", "!!}"];
        }
    }
    EchoType.toStringParts = toStringParts;
})(EchoType = exports.EchoType || (exports.EchoType = {}));
class EchoNode {
    constructor(content, code, type) {
        this.content = content;
        this.code = code;
        this.type = type;
    }
    toDoc() {
        return group([this.toString()]);
    }
    toString() {
        const [open, close] = EchoType.toStringParts(this.type);
        return `${open} ${(0, utils_1.formatAsPhp)(this.code)} ${close}`;
    }
}
exports.EchoNode = EchoNode;
class DirectiveNode {
    constructor(content, directive, code, line) {
        this.content = content;
        this.directive = directive;
        this.code = code;
        this.line = line;
    }
    toDoc() {
        return group([this.toString()]);
    }
    toString() {
        return `@${this.directive}${this.code ? `(${(0, utils_1.formatAsPhp)(this.code)})` : ""}`;
    }
}
exports.DirectiveNode = DirectiveNode;
class LiteralNode {
    constructor(content) {
        this.content = content;
    }
    toDoc() {
        return group(this.toString());
    }
    toString() {
        return this.content;
    }
}
exports.LiteralNode = LiteralNode;
class DirectivePairNode {
    constructor(open, close, children) {
        this.open = open;
        this.close = close;
        this.children = children;
    }
    toDoc() {
        return group([
            this.open.toDoc(),
            hardline,
            this.children.map((child) => child.toDoc()),
            hardline,
            this.close.toDoc(),
        ]);
    }
    toString() {
        return `${this.open.toString()}${this.children
            .map((child) => child.toString())
            .join()}${this.close.toString()}`;
    }
}
exports.DirectivePairNode = DirectivePairNode;
class VerbatimNode {
    constructor(content) {
        this.content = content;
    }
    toDoc() {
        // We're doing a bit of trick here where we replace the verbatim tags after formatting as HTML
        // so we get correct indentation.
        const fakeHtml = (0, utils_1.formatAsHtml)(`
            <verbatim-block>
                ${this.toString()}
            </verbatim-block>
        `);
        return fakeHtml.replace('<verbatim-block>', '@verbatim').replace('</verbatim-block>', '@endverbatim');
    }
    toString() {
        return this.content;
    }
}
exports.VerbatimNode = VerbatimNode;
class CommentNode {
    constructor(code, content) {
        this.code = code;
        this.content = content;
    }
    toDoc() {
        return group([this.toString()]);
    }
    toString() {
        return `{{-- ${this.content} --}}`;
    }
}
exports.CommentNode = CommentNode;
