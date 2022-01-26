export const TokenType = {
    T_DIRECTIVE: 'directive',
    T_ECHO: 'echo',
    T_RAW_ECHO: 'raw_echo',
    T_LITERAL: 'literal',
    T_EOF: 'eof',
}


export class Token {
    public type: string;
    raw: string;
    line: number;
    constructor(type: string, raw: string, line: number) {
        this.type = type
        this.raw = raw
        this.line = line
    }

    static eof() {
        return new Token(TokenType.T_EOF, '', 0)
    }
}