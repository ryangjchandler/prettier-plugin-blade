export const TokenType = {
  T_DIRECTIVE: "directive",
  T_ECHO: "echo",
  T_RAW_ECHO: "raw_echo",
  T_LITERAL: "literal",
  T_EOF: "eof",
  T_COMMENT: "comment",
};

export class Token {
  constructor(public type: string, public raw: string, public line: number) {}

  static eof() {
    return new Token(TokenType.T_EOF, "", 0);
  }
}
