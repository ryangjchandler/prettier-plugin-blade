import { TokenType, Token } from "./token";

const ctype_space = (subject: string) =>
    subject.replace(/\s/g, "").length === 0;

const alnum_pattern = /^[a-z0-9]+$/i;
const ctype_alnum = (subject: string): boolean => !!alnum_pattern.test(subject);

export class Lexer {
    private source: string[];
    private line: number = 1;
    private stackPointer: number = -1;
    private tokens: Token[] = [];
    private buffer: string = "";
    constructor(source: string) {
        this.source = source
            .replace("<?php", "@php")
            .replace("?>", "@endphp")
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
            } else if (this.previous !== "@" && this.collect(2) === "{{") {
                this.tokens.push(this.echo());
            }

            if (this.previous !== "@" && this.collect(3) === "{!!") {
                this.tokens.push(this.rawEcho());
            } else if (
                this.previous !== "@" &&
                this.current === "@" &&
                ctype_alnum(this.lookahead())
            ) {
                this.tokens.push(this.directive());
            } else {
                this.buffer += this.current;
                this.read();
            }
        }

        this.literal();

        return this.tokens;
    }

    echo(): Token {
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

        return new Token(TokenType.Echo, raw, this.line);
    }

    rawEcho(): Token {
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

        return new Token(TokenType.RawEcho, raw, this.line);
    }

    comment(): Token {
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

        return new Token(TokenType.Comment, raw, this.line);
    }

    directive(): Token {
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
            return new Token(TokenType.Directive, match.trim(), this.line);
        }

        const DIRECTIVE_ORIGINAL_LINE = this.line;

        while (ctype_space(this.current)) {
            whitespace += this.current;
            this.read();
        }

        if (this.current !== "(") {
            this.buffer += whitespace + this.current;

            return new Token(
                TokenType.Directive,
                match.trim(),
                DIRECTIVE_ORIGINAL_LINE
            );
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
            if (this.current === ')') {
                parens -= 1;
            }

            this.read();
        }

        return new Token(TokenType.Directive, match.trim(), this.line);
    }

    literal() {
        if (this.buffer.length > 0) {
            this.tokens.push(
                new Token(TokenType.Literal, this.buffer, this.line)
            );
            this.buffer = "";
        }
    }

    read(amount: number = 1) {
        this.stackPointer += amount;

        if (this.previous === "\n") {
            this.line += amount;
        }
    }

    lookahead(amount: number = 1) {
        return this.collect(amount + 1, 1);
    }

    lookbehind(amount: number = 1) {
        return this.collect(-amount, amount);
    }

    get current() {
        return this.collect();
    }

    get previous() {
        return this.lookbehind();
    }

    collect(amount: number = 1, skip: number = 0) {
        return this.source
            .slice(this.stackPointer + skip, this.stackPointer + amount)
            .join("");
    }
}
