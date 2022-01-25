export const TokenType = {
    T_DIRECTIVE: 'directive',
    T_ECHO: 'echo',
    T_LITERAL: 'literal',
    T_EOF: 'eof',
}

/**
 * @property {string} type
 * @property {string} raw
 * @property {number} line
 */
export class Token {
    constructor(type, raw, line) {
        this.type = type
        this.raw = raw
        this.line = line
    }
}