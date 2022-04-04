"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectiveElseIfBlockNode = exports.DirectiveEmptyBlockNode = exports.DirectiveElseBlockNode = exports.DirectiveForElseBlockNode = exports.DirectiveIfBlockNode = exports.CommentNode = exports.PhpNode = exports.VerbatimNode = exports.DirectivePairNode = exports.LiteralNode = exports.DirectiveNode = exports.EchoNode = exports.DocumentNode = exports.EchoType = exports.forceNewLine = exports.forceHtmlSplit = void 0;
const utils_1 = require("../../utils");
// These are block-level elements that can be used to give prettier's HTML
// formatter hints about how to format our placeholders.
// `forceHtmlSplit` is completely deleted, so it just disappears
exports.forceHtmlSplit = " <div x-delete-x></div> ";
// `forceNewLine` is the same as forceHtmlSplit unless it's flowed onto a line
// w/ other elements; in that case, it will be replaced w/ a line break
exports.forceNewLine = " <div x-new-line-x></div> ";
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
class DocumentNode {
    constructor(children) {
        this.children = children;
    }
    toHtml() {
        return {
            asHtml: this.children.map((child) => child.toHtml()),
        };
    }
}
exports.DocumentNode = DocumentNode;
class EchoNode {
    constructor(content, code, type) {
        this.content = content;
        this.code = code;
        this.type = type;
        this._formattedCode = "";
    }
    get formattedCode() {
        if (this._formattedCode === "" && this.code !== "") {
            this._formattedCode = (0, utils_1.formatAsPhp)(this.code);
        }
        return this._formattedCode;
    }
    toHtml() {
        let asHtml;
        let asReplacer;
        const id = (0, utils_1.nextId)();
        if (this.formattedCode.match(/\n/)) {
            const [open, close] = EchoType.toStringParts(this.type);
            asHtml = [
                `<e-${id}>`,
                exports.forceNewLine,
                `<php-${id} />`,
                exports.forceNewLine,
                `</e-${id}>`,
            ];
            asReplacer = [
                {
                    search: new RegExp(`<e-${id}\\s*>`),
                    replace: open.toString(),
                    spreadIndent: true,
                },
                {
                    search: `<php-${id} />`,
                    replace: this.formattedCode,
                },
                {
                    search: new RegExp(`</e-${id}\\s*>`),
                    replace: close.toString(),
                    resetIndent: true,
                },
            ];
        }
        else {
            asHtml = (0, utils_1.placeholderString)("e", this.toString());
            asReplacer = this.toString();
        }
        return {
            asHtml,
            asReplacer,
        };
    }
    toString() {
        const [open, close] = EchoType.toStringParts(this.type);
        return `${open} ${this.formattedCode} ${close}`;
    }
}
exports.EchoNode = EchoNode;
class DirectiveNode {
    constructor(content, directive, code) {
        this.content = content;
        this.directive = directive;
        this.code = code;
    }
    toString() {
        var code = "";
        var spacer = [
            "for",
            "foreach",
            "forelse",
            "while",
            "if",
            "elseif",
            "unless",
        ].includes(this.directive)
            ? " "
            : "";
        if (this.directive === "for") {
            code = (0, utils_1.formatAsPhp)(`for (${this.code}) {\n}`).slice(4, -4);
        }
        else if (this.directive === "foreach" ||
            this.directive === "forelse") {
            code = (0, utils_1.formatAsPhp)(`foreach (${this.code}) {\n}`).slice(8, -4);
        }
        else if (this.code) {
            code = (0, utils_1.formatAsPhp)(`a(${this.code})`).substring(1);
        }
        return `@${this.directive}${spacer}${code}`;
    }
    toHtml() {
        let id = (0, utils_1.nextId)();
        let asHtml = `<directive-${this.directive}-${id} />`;
        let asReplacer = this.toString();
        // checked/selected/disabled are "attribute" directives, so we have use
        // a placeholder string instead of a placeholder element
        // FIXME this is bare-minimum support
        if (["checked", "selected", "disabled"].includes(this.directive.toLowerCase())) {
            asHtml = (0, utils_1.placeholderString)(`directive_${this.directive}`, asReplacer);
        }
        return { asHtml, asReplacer };
    }
}
exports.DirectiveNode = DirectiveNode;
class LiteralNode {
    constructor(content) {
        this.content = content;
    }
    toString() {
        return this.content;
    }
    toHtml() {
        return {
            asHtml: this.content,
        };
    }
}
exports.LiteralNode = LiteralNode;
class DirectivePairNode {
    constructor(open, close, children) {
        this.open = open;
        this.close = close;
        this.children = children;
    }
    toString() {
        return `${this.open.toString()}${this.children
            .map((child) => child.toString())
            .join()}${this.close.toString()}`;
    }
    toHtml() {
        const uuid = (0, utils_1.nextId)();
        const open = this.open.toString();
        const reindentOpeningDirective = open.includes(`\n`);
        return {
            asHtml: [
                `<pair-${uuid}>`,
                exports.forceHtmlSplit,
                ...this.children.map((child) => child.toHtml()),
                ` </pair-${uuid}>`,
            ],
            asReplacer: [
                {
                    search: `<pair-${uuid}>`,
                    replace: open,
                    spreadIndent: reindentOpeningDirective,
                    resetIndent: reindentOpeningDirective,
                },
                {
                    search: `</pair-${uuid}>`,
                    replace: this.close.toString(),
                },
            ],
        };
    }
}
exports.DirectivePairNode = DirectivePairNode;
class VerbatimNode {
    constructor(open, close, content) {
        this.open = open;
        this.close = close;
        this.content = content;
    }
    toString() {
        throw new Error("Not possible.");
    }
    toHtml() {
        const uuid = (0, utils_1.nextId)();
        return {
            asHtml: [
                `<vervatim-${uuid}>`,
                exports.forceHtmlSplit,
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
            ],
        };
    }
}
exports.VerbatimNode = VerbatimNode;
class PhpNode {
    constructor(open, close, code) {
        this.open = open;
        this.close = close;
        this.code = code;
    }
    toHtml() {
        let id = (0, utils_1.nextId)();
        return {
            asHtml: [
                `<div php-open-${id} />`,
                exports.forceHtmlSplit,
                `<div php-${id} />`,
                exports.forceHtmlSplit,
                `<div php-close-${id} />`,
            ],
            asReplacer: [
                {
                    search: new RegExp(`<div php-open-${id} />`),
                    replace: "@php",
                    spreadIndent: true,
                },
                {
                    search: `<div php-${id} />`,
                    replace: (0, utils_1.formatAsPhp)(this.code),
                },
                {
                    search: new RegExp(`<div php-close-${id} />`),
                    replace: "@endphp",
                    resetIndent: true,
                },
            ],
        };
    }
    toString() {
        return `@php\n\n${(0, utils_1.formatAsPhp)(this.code)}\n\n@endphp`;
    }
}
exports.PhpNode = PhpNode;
class CommentNode {
    constructor(code, content) {
        this.code = code;
        this.content = content;
    }
    toString() {
        return this.code;
    }
    toHtml() {
        return {
            asHtml: (0, utils_1.placeholderString)("c", this.toString()),
            asReplacer: this.toString(),
        };
    }
}
exports.CommentNode = CommentNode;
class DirectiveIfBlockNode {
    constructor(open, close, children, elseBlock, elseIfBlocks) {
        this.open = open;
        this.close = close;
        this.children = children;
        this.elseBlock = elseBlock;
        this.elseIfBlocks = elseIfBlocks;
    }
    toHtml() {
        var _a, _b;
        const uuid = (0, utils_1.nextId)();
        return {
            asHtml: [
                `<if-open-${uuid}>`,
                exports.forceHtmlSplit,
                ...this.children.map((child) => child.toHtml()),
                ` </if-open-${uuid}> `,
                this.elseIfBlocks.map((block) => block.toHtml()),
                (_b = (_a = this.elseBlock) === null || _a === void 0 ? void 0 : _a.toHtml()) !== null && _b !== void 0 ? _b : [],
                ` <if-close-${uuid} />`,
            ],
            asReplacer: [
                {
                    search: `<if-open-${uuid}>`,
                    replace: this.open.toString(),
                },
                {
                    search: new RegExp(`\n?\\s*<\\/if-open-${uuid}>`),
                    replace: "",
                },
                {
                    search: new RegExp(`<if-close-${uuid} \\/>`),
                    replace: this.close.toString(),
                },
            ],
        };
    }
}
exports.DirectiveIfBlockNode = DirectiveIfBlockNode;
class DirectiveForElseBlockNode {
    constructor(open, close, children, emptyBlock) {
        this.open = open;
        this.close = close;
        this.children = children;
        this.emptyBlock = emptyBlock;
    }
    toHtml() {
        var _a, _b;
        const id = (0, utils_1.nextId)();
        return {
            asHtml: [
                `<forelse-open-${id}>`,
                exports.forceHtmlSplit,
                ...this.children.map((child) => child.toHtml()),
                ` </forelse-open-${id}> `,
                (_b = (_a = this.emptyBlock) === null || _a === void 0 ? void 0 : _a.toHtml()) !== null && _b !== void 0 ? _b : [],
                ` <forelse-close-${id} />`,
            ],
            asReplacer: [
                {
                    search: `<forelse-open-${id}>`,
                    replace: this.open.toString(),
                },
                {
                    search: new RegExp(`\n?\\s*<\\/forelse-open-${id}>`),
                    replace: "",
                },
                {
                    search: new RegExp(`<forelse-close-${id} \\/>`),
                    replace: this.close.toString(),
                },
            ],
        };
    }
}
exports.DirectiveForElseBlockNode = DirectiveForElseBlockNode;
class DirectiveElseBlockNode {
    constructor(elseDirective, children) {
        this.elseDirective = elseDirective;
        this.children = children;
    }
    toHtml() {
        const id = (0, utils_1.nextId)();
        return {
            asHtml: [
                ` <else-${id}>`,
                exports.forceHtmlSplit,
                ...this.children.map((child) => child.toHtml()),
                ` </else-${id}>`,
            ],
            asReplacer: [
                {
                    search: `<else-${id}>`,
                    replace: this.elseDirective.toString(),
                },
                {
                    search: new RegExp(`\n?\\s*<\\/else-${id}>`),
                    replace: "",
                },
            ],
        };
    }
}
exports.DirectiveElseBlockNode = DirectiveElseBlockNode;
class DirectiveEmptyBlockNode {
    constructor(emptyDirective, children) {
        this.emptyDirective = emptyDirective;
        this.children = children;
    }
    toHtml() {
        const id = (0, utils_1.nextId)();
        return {
            asHtml: [
                ` <empty-${id}>`,
                exports.forceHtmlSplit,
                ...this.children.map((child) => child.toHtml()),
                ` </empty-${id}>`,
            ],
            asReplacer: [
                {
                    search: `<empty-${id}>`,
                    replace: this.emptyDirective.toString(),
                },
                {
                    search: new RegExp(`\n?\\s*<\\/empty-${id}>`),
                    replace: "",
                },
            ],
        };
    }
}
exports.DirectiveEmptyBlockNode = DirectiveEmptyBlockNode;
class DirectiveElseIfBlockNode {
    constructor(elseIfDirective, children) {
        this.elseIfDirective = elseIfDirective;
        this.children = children;
    }
    toHtml() {
        const id = (0, utils_1.nextId)();
        return {
            asHtml: [
                ` <else-if-${id}>`,
                exports.forceHtmlSplit,
                ...this.children.map((child) => child.toHtml()),
                ` </else-if-${id}>`,
            ],
            asReplacer: [
                {
                    search: `<else-if-${id}>`,
                    replace: this.elseIfDirective.toString(),
                },
                {
                    search: new RegExp(`\n?\\s*<\\/else-if-${id}>`),
                    replace: "",
                },
            ],
        };
    }
}
exports.DirectiveElseIfBlockNode = DirectiveElseIfBlockNode;
