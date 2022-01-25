import { TokenType, Token } from './token'

const ctype_space = (subject) => subject.replace(/\s/g, '').length === 0

export class Lexer {
    constructor(source) {
        this.source = source.replace('<?php', '@php').replace('?>', '@endphp').replace(/\r\n|\r|\n/, '\n').split('')
        this.line = 1
        this.i = -1
        this.tokens = []
        this.buffer = ''
        this.previous = ''
        this.current = ''
        this.next = ''
    }

    all() {
        this.read()

        while (true) {
            if (this.i >= this.source.length) {
                break
            }

            if (this.current === '{' && this.next === '{') {
                this.tokens.push(this.echo())
            } else if (this.current === '@' && this.next !== '@') {
                this.tokens.push(this.directive())
            } else {
                this.buffer += this.current
                this.read()
            }
        }

        return this.tokens
    }

    echo() {
        this.literal()

        let raw = '{{'

        this.read()
        this.read()

        while (true) {
            if (this.i >= this.source.length) {
                break
            }

            if (this.current === '}' && this.next === '}') {
                raw += '}}'

                this.read()
                this.read()

                break
            }

            raw += this.current
            this.read()
        }

        return new Token(TokenType.T_ECHO, raw, this.line)
    }

    directive() {
        this.literal()

        let match = this.current
        let hasFoundDirectiveName = false
        let parens = 0

        this.read()

        while (true) {
            if (this.i >= this.source.length) {
                break;
            }

            match += this.current;

            if ((this.current === '(' || ctype_space(this.current)) && ! hasFoundDirectiveName) {
                hasFoundDirectiveName = true;
            }

            if (ctype_space(this.current) && (! ctype_space(this.next) || this.next !== '(')) {
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

    read() {
        this.i += 1
        this.previous = this.current
        this.current = this.source[this.i] || ''
        
        if (this.previous === '\n') {
            this.line += 1
        }

        if (this.i + 1 < this.source.length) {
            this.next = this.source[this.i + 1]
        }
    }
}