export enum TokenType {
    Directive,
    Echo,
    RawEcho,
    Literal,
    Eof,
    Comment,
}

export class Token {
    constructor(
        public type: TokenType,
        public raw: string,
        public line: number
    ) {}

    static eof() {
        return new Token(TokenType.Eof, "", 0);
    }
}
