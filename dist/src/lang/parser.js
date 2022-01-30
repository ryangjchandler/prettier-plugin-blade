"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
const token_1 = require("./token");
const Nodes = __importStar(require("./nodes"));
const nodes_1 = require("./nodes");
const STATIC_BLOCK_DIRECTIVES = [
    "if",
    "for",
    "foreach",
    "forelse",
    "unless",
    "while",
    "isset",
    "empty",
    "auth",
    "guest",
    "production",
    "env",
    "hasSection",
    "sectionMissing",
    "switch",
    "once",
    "verbatim",
    "error",
    "push",
    "prepend",
];
const isBlockDirective = (directive) => {
    if (STATIC_BLOCK_DIRECTIVES.includes(directive.directive)) {
        return true;
    }
    if (directive.directive === "php" && !directive.code) {
        return true;
    }
    // Support for custom directives?
    return false;
};
const directiveCanBeClosedBy = (open, close) => {
    return close.directive === "end" + open.directive;
};
const isBlockClosingDirective = (directive) => directive.directive.startsWith("end");
const guessClosingBlockDirective = (directive) => "end" + directive.directive;
class Parser {
    constructor(tokens) {
        this.tokens = tokens;
        this.tokens.push(token_1.Token.eof());
        this.nodes = [];
        this.current = token_1.Token.eof();
        this.next = token_1.Token.eof();
        this.i = -1;
    }
    parse() {
        this.read();
        this.read();
        while (this.current.type !== token_1.TokenType.Eof) {
            this.nodes.push(this.node());
        }
        return this.nodes;
    }
    node() {
        if (this.current.type === token_1.TokenType.Echo) {
            return this.echo();
        }
        else if (this.current.type === token_1.TokenType.RawEcho) {
            return this.rawEcho();
        }
        else if (this.current.type === token_1.TokenType.Directive) {
            return this.directive();
        }
        else if (this.current.type === token_1.TokenType.Comment) {
            return this.comment();
        }
        else {
            const node = new Nodes.LiteralNode(this.current.raw);
            this.read();
            return node;
        }
    }
    echo() {
        const node = new Nodes.EchoNode(this.current.raw, this.current.raw.substring(2, this.current.raw.length - 2).trim(), nodes_1.EchoType.Escaped);
        this.read();
        return node;
    }
    comment() {
        const node = new Nodes.CommentNode(this.current.raw, this.current.raw.substring(4, this.current.raw.length - 4).trim());
        this.read();
        return node;
    }
    rawEcho() {
        const node = new Nodes.EchoNode(this.current.raw, this.current.raw.substring(3, this.current.raw.length - 3).trim(), nodes_1.EchoType.Raw);
        this.read();
        return node;
    }
    directive() {
        let directiveName = this.current.raw.substring(this.current.raw.indexOf("@") + 1);
        if (directiveName.includes("(")) {
            directiveName = directiveName.substring(0, directiveName.indexOf("("));
        }
        directiveName = directiveName.trim();
        let inner = this.current.raw.replace("@" + directiveName, "").trim();
        if (inner.startsWith("(")) {
            inner = inner.substring(1);
        }
        if (inner.endsWith(")")) {
            inner = inner.substring(0, inner.length - 1);
        }
        const directive = new Nodes.DirectiveNode(this.current.raw, directiveName, inner, this.current.line);
        this.read();
        if (!isBlockDirective(directive)) {
            return directive;
        }
        if (directive.directive === 'verbatim') {
            return this.verbatim();
        }
        let children = [];
        let close = null;
        while (this.current.type !== token_1.TokenType.Eof) {
            const child = this.node();
            if (child instanceof Nodes.DirectiveNode &&
                directiveCanBeClosedBy(directive, child)) {
                close = child;
                break;
            }
            if (child instanceof Nodes.DirectiveNode &&
                isBlockClosingDirective(child)) {
                throw new Error(`Unexpected directive ${child.directive} on line ${child.line}, expected ${guessClosingBlockDirective(directive)}`);
            }
            children.push(child);
        }
        if (close === null) {
            throw new Error(`Could not find "@end..." directive for "@${directive.directive}" defined on line ${directive.line}.`);
        }
        return new Nodes.DirectivePairNode(directive, close, children);
    }
    verbatim() {
        let code = '';
        if (this.current.type === token_1.TokenType.Directive && this.current.raw === '@endverbatim') {
            return new nodes_1.VerbatimNode(code);
        }
        else {
            code += this.current.raw;
        }
        while (true) {
            if (this.i >= this.tokens.length) {
                break;
            }
            this.read();
            if (this.current.type === token_1.TokenType.Directive && this.current.raw === '@endverbatim') {
                this.read();
                break;
            }
            code += this.current.raw;
        }
        return new nodes_1.VerbatimNode(code);
    }
    read() {
        this.i += 1;
        this.current = this.next;
        this.next =
            this.i >= this.tokens.length ? token_1.Token.eof() : this.tokens[this.i];
    }
}
exports.Parser = Parser;
