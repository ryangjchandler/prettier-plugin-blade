"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lexer = void 0;
const token_1 = require("./token");
const ctype_space = (subject) => subject.replace(/\s/g, "").length === 0;
const alnum_pattern = /^[a-z0-9]+$/i;
const ctype_alnum = (subject) => !!alnum_pattern.test(subject);
class Lexer {
    constructor(source) {
        this.line = 1;
        this.stackPointer = -1;
        this.tokens = [];
        this.buffer = "";
        this.source = source
            .replace(/<\?=\s+(\".+\")\s+\?\>/, "{!! $1 !!}")
            .replace(/(\<\?(?:php)?\s)(.+)\s+(\?\>)/gm, "@php\n$2\n@endphp")
            .replace(/\r\n|\r|\n/, "\n")
            .split("");
    }
    all() {
        this.read();
        while (true) {
            if (this.stackPointer >= this.source.length) {
                break;
            }
            if (this.collect(4) === "{{--") {
                this.tokens.push(this.comment());
            }
            else if (this.previous !== "@" && this.collect(2) === "{{") {
                this.tokens.push(this.echo());
            }
            else if (this.previous !== "@" && this.collect(3) === "{!!") {
                this.tokens.push(this.rawEcho());
            }
            else if (this.previous !== "@" &&
                this.current === "@" &&
                ctype_alnum(this.lookahead())) {
                this.tokens.push(this.directive());
            }
            else {
                this.buffer += this.current;
                this.read();
            }
        }
        this.literal();
        return this.tokens;
    }
    echo() {
        this.literal();
        let raw = "{{";
        this.read(2);
        while (true) {
            if (this.stackPointer >= this.source.length) {
                break;
            }
            if (this.collect(2) === "}}") {
                raw += "}}";
                this.read(2);
                break;
            }
            raw += this.current;
            this.read();
        }
        return new token_1.Token(token_1.TokenType.Echo, raw, this.line);
    }
    rawEcho() {
        this.literal();
        let raw = "{!!";
        this.read(3);
        while (true) {
            if (this.stackPointer >= this.source.length) {
                break;
            }
            if (this.collect(3) === "!!}") {
                raw += "!!}";
                this.read(3);
                break;
            }
            raw += this.current;
            this.read();
        }
        return new token_1.Token(token_1.TokenType.RawEcho, raw, this.line);
    }
    comment() {
        this.literal();
        let raw = "{{--";
        this.read(4);
        while (true) {
            if (this.stackPointer >= this.source.length) {
                break;
            }
            if (this.collect(4) === "--}}") {
                raw += "--}}";
                this.read(4);
                break;
            }
            raw += this.current;
            this.read();
        }
        return new token_1.Token(token_1.TokenType.Comment, raw, this.line);
    }
    directive() {
        this.literal();
        let match = this.current;
        let whitespace = "";
        let parens = 0;
        this.read();
        // While we have some alphanumeric  characters
        while (ctype_alnum(this.current)) {
            match += this.current;
            this.read();
        }
        if (this.stackPointer >= this.source.length) {
            return new token_1.Token(token_1.TokenType.Directive, match.trim(), this.line);
        }
        const DIRECTIVE_ORIGINAL_LINE = this.line;
        while (ctype_space(this.current)) {
            if (this.stackPointer >= this.source.length) {
                return new token_1.Token(token_1.TokenType.Directive, match.trim(), this.line);
            }
            whitespace += this.current;
            this.read();
        }
        if (this.current !== "(") {
            this.buffer += whitespace;
            return new token_1.Token(token_1.TokenType.Directive, match.trim(), DIRECTIVE_ORIGINAL_LINE);
        }
        match += whitespace + this.current;
        this.read();
        while (true) {
            if (this.stackPointer >= this.source.length) {
                break;
            }
            match += this.current;
            // @ts-ignore
            if (this.current === ")" && parens === 0) {
                this.read();
                break;
            }
            if (this.current === "(") {
                parens += 1;
            }
            // @ts-ignore
            if (this.current === ")") {
                parens -= 1;
            }
            this.read();
        }
        return new token_1.Token(token_1.TokenType.Directive, match.trim(), this.line);
    }
    literal() {
        if (this.buffer.length > 0) {
            this.tokens.push(new token_1.Token(token_1.TokenType.Literal, this.buffer, this.line));
            this.buffer = "";
        }
    }
    read(amount = 1) {
        this.stackPointer += amount;
        if (this.previous === "\n") {
            this.line += amount;
        }
    }
    lookahead(amount = 1) {
        return this.collect(amount + 1, 1);
    }
    lookbehind(amount = 1) {
        return this.collect(0, -amount);
    }
    get current() {
        return this.collect();
    }
    get previous() {
        return this.lookbehind();
    }
    collect(amount = 1, skip = 0) {
        return this.source
            .slice(this.stackPointer + skip, this.stackPointer + amount)
            .join("");
    }
}
exports.Lexer = Lexer;
