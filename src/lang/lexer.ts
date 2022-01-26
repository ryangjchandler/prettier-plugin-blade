import { TokenType, Token } from './token'

const ctype_space = (subject: string) => subject.replace(/\s/g, '').length === 0

export class Lexer {
    private source: string[];
    private line: number = 1;
    private stackPointer: number = -1;
    private tokens: Token[] = [];
    private buffer: string = '';
    private previous: string = '';
    constructor(source: string) {
        this.source = source.replace('<?php', '@php').replace('?>', '@endphp').replace(/\r\n|\r|\n/, '\n').split('')
    }

    all() {
        this.read()

        while (true) {
            if (this.stackPointer >= this.source.length) {
                break
            }

            if (this.collect(4) === '{{--') {
                this.tokens.push(this.comment())
            } else if (this.previous !== '@' && this.collect(2) === '{{') {
                this.tokens.push(this.echo())
            } if (this.previous !== '@' && this.collect(3) === '{!!') {
                this.tokens.push(this.rawEcho())
            } else if (this.current === '@' && ! ['@', '{'].includes(this.lookahead())) {
                this.tokens.push(this.directive())
            } else {
                this.buffer += this.current
                this.read()
            }
        }

        this.literal()

        return this.tokens
    }

    echo(): Token {
        this.literal()

        let raw = '{{'

        this.read(2)

        while (true) {
            if (this.stackPointer >= this.source.length) {
                break
            }

            if (this.collect(2) === '}}') {
                raw += '}}'
                this.read(2)

                break
            }

            raw += this.current
            this.read()
        }

        return new Token(TokenType.T_ECHO, raw, this.line)
    }

    rawEcho(): Token {
        this.literal()

        let raw = '{!!'

        this.read(3)

        while (true) {
            if (this.stackPointer >= this.source.length) {
                break
            }

            if (this.collect(3) === '!!}') {
                raw += '!!}'
                this.read(3)

                break
            }

            raw += this.current
            this.read()
        }

        return new Token(TokenType.T_RAW_ECHO, raw, this.line)
    }

    comment(): Token {
        this.literal()

        let raw = '{{--'

        this.read(4)

        while (true) {
            if (this.stackPointer >= this.source.length) {
                break
            }

            if (this.collect(4) === '--}}') {
                raw += '--}}'

                this.read(4)
                break
            }

            raw += this.current
            this.read()
        }

        return new Token(TokenType.T_COMMENT, raw, this.line)
    }

    directive(): Token {
        this.literal()

        let match = this.current
        let hasFoundDirectiveName = false
        let parens = 0

        this.read()

        while (true) {
            if (this.stackPointer >= this.source.length) {
                break;
            }

            match += this.current;

            if ((this.current === '(' || ctype_space(this.current)) && ! hasFoundDirectiveName) {
                hasFoundDirectiveName = true;
            }

            if (ctype_space(this.current) && (! ctype_space(this.lookahead()) || this.lookahead() !== '(')) {
                if (hasFoundDirectiveName) {
                    break;
                }

                return new Token(TokenType.T_LITERAL, match, this.line);
            }

            if (hasFoundDirectiveName && this.current === '(') {
                parens++;
            }

            if (parens === 0 && [')', '\n'].includes(this.current)) {
                break;
            }

            if (this.current === ')') {
                parens--;

                // We should probably be checking for a new-line character here too since we'll want to preserve it.
                if (parens === 0 && hasFoundDirectiveName) {
                    this.read();

                    break;
                }
            }

            this.read();
        }

        return new Token(TokenType.T_DIRECTIVE, match.trim(), this.line)
    }

    literal() {
        if (this.buffer.length > 0) {
            this.tokens.push(new Token(TokenType.T_LITERAL, this.buffer, this.line))
            this.buffer = ''
        }
    }

    read(amount: number = 1) {
        this.stackPointer += amount
        this.previous = this.current
        
        if (this.previous === '\n') {
            this.line += amount
        }
    }

    lookahead(amount: number = 1) {
        return this.collect(amount, 1)
    }

    get current() {
        return this.collect()
    }

    collect(amount: number = 1, skip: number = 0) {
        return this.source.slice(this.stackPointer + skip, this.stackPointer + amount).join('')
    }
}