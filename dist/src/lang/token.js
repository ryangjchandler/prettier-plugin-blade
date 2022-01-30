"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = exports.TokenType = void 0;
var TokenType;
(function (TokenType) {
    TokenType[TokenType["Directive"] = 0] = "Directive";
    TokenType[TokenType["Echo"] = 1] = "Echo";
    TokenType[TokenType["RawEcho"] = 2] = "RawEcho";
    TokenType[TokenType["Literal"] = 3] = "Literal";
    TokenType[TokenType["Eof"] = 4] = "Eof";
    TokenType[TokenType["Comment"] = 5] = "Comment";
})(TokenType = exports.TokenType || (exports.TokenType = {}));
class Token {
    constructor(type, raw, line) {
        this.type = type;
        this.raw = raw;
        this.line = line;
    }
    static eof() {
        return new Token(TokenType.Eof, "", 0);
    }
}
exports.Token = Token;
