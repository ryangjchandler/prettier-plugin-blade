export enum TokenType {
    Directive = "Directive",
    Echo = "Echo",
    RawEcho = "RawEcho",
    Literal = "Literal",
    Eof = "Eof",
    Comment = "Comment",
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
