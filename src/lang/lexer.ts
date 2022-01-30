import {createToken, createTokenInstance, Lexer} from "chevrotain";

export enum Token {
    Literal = "Literal",
    Echo = "Echo",
    RawEcho = "RawEcho",
    Directive = "Directive",
}

enum Mode {
    PHP = "php_mode",
    BLADE = "blade_mode"
}

const Literal = createToken({
    name: Token.Literal,
    pattern: /[^}!]+/,
})


const Echo = createToken({
    name: Token.Echo,
    pattern: /(@)?{{\s*(.+?)\s*[^!]}}(\r?\n)?/,
    start_chars_hint: ["{"]
})

const RawEcho = createToken({
    name: Token.RawEcho,
    pattern: /(@)?{!!\s*(.+?)\s*!!}(\r?\n)?/,
    start_chars_hint: ["{"]
})


const allTokens = {
    modes: {
        blade_mode: [
            RawEcho,
            Echo,
        ],
    },
    defaultMode: Mode.BLADE
}


export const BladeLexer = new Lexer(allTokens)