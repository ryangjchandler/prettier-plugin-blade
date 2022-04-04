"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BladeLexer = exports.allTokens = exports.Literal = exports.EndPhpDirective = exports.StartPhpDirective = exports.EndVerbatimDirectiveWithArgs = exports.StartVerbatimDirectiveWithArgs = exports.EndForElseDirectiveWithArgs = exports.EmptyDirectiveWithoutArgs = exports.StartForElseDirectiveWithArgs = exports.EndIfDirectiveWithArgs = exports.ElseDirectiveWithArgs = exports.ElseIfDirectiveWithArgs = exports.StartIfDirectiveWithArgs = exports.StartDirectiveWithArgs = exports.EndDirectiveWithArgs = exports.DirectiveWithArgs = exports.EscapedRawEcho = exports.EscapedEcho = exports.Comment = exports.RawEcho = exports.Echo = exports.terminalDirectives = exports.Token = void 0;
const chevrotain_1 = require("chevrotain");
var Token;
(function (Token) {
    Token["Literal"] = "Literal";
    Token["Echo"] = "Echo";
    Token["RawEcho"] = "RawEcho";
    Token["Directive"] = "Directive";
    Token["Comment"] = "Comment";
    Token["EscapedEcho"] = "EscapedEcho";
    Token["EscapedRawEcho"] = "EscapedRawEcho";
    Token["EndDirective"] = "EndDirective";
    Token["StartDirective"] = "StartDirective";
    Token["StartIfDirective"] = "StartIfDirective";
    Token["ElseIfDirective"] = "ElseIfDirective";
    Token["ElseDirective"] = "ElseDirective";
    Token["EndIfDirective"] = "EndIfDirective";
    Token["StartForElseDirective"] = "StartForElseDirective";
    Token["EmptyDirective"] = "EmptyDirective";
    Token["EndForElseDirective"] = "EndForElseDirective";
    Token["StartVerbatimDirective"] = "StartVerbatimDirective";
    Token["EndVerbatimDirective"] = "EndVerbatimDirective";
    Token["StartPhpDirective"] = "StartPhpDirective";
    Token["EndPhpDirective"] = "EndPhpDirective";
})(Token = exports.Token || (exports.Token = {}));
var Mode;
(function (Mode) {
    Mode["PHP"] = "php_mode";
    Mode["BLADE"] = "blade_mode";
})(Mode || (Mode = {}));
exports.terminalDirectives = [
    "can",
    "component",
    "error",
    "for",
    "foreach",
    "once",
    "prepend",
    "push",
    "pushOnce",
    "while",
];
function matchDirective(text, startOffset) {
    let endOffset = startOffset;
    // Check if directive
    let charCode = text.charAt(endOffset);
    if (!charCode.startsWith("@")) {
        return null;
    }
    // Check if escaped directive
    if (text.charAt(endOffset - 1) === "@" ||
        text.charAt(endOffset + 1) === "@") {
        return null;
    }
    charCode = text.charAt(++endOffset);
    let directiveName = "";
    // Consume name of directive
    while (/\w/.exec(charCode)) {
        directiveName += charCode;
        charCode = text.charAt(++endOffset);
    }
    // Consume spaces
    let possibleEndOffset = endOffset;
    charCode = text.charAt(possibleEndOffset);
    while (charCode == " ") {
        charCode = text.charAt(++possibleEndOffset);
    }
    charCode = text.charAt(possibleEndOffset);
    // If a directive appears to end w/ any of these chars, then it may not be a
    // directive and is probably a Vue/Alpine event binding.
    if (["=", ".", ":"].includes(charCode)) {
        // FIXME it's *possible* that the input could be something like
        // `@auth = @else != @endauth`, and `@event = "method"` is valid HTML,
        // so perhaps we should look even further a head to confirm that the
        // *next* char is not a `"` or `'`. ??
        return null;
    }
    // Check if next char is an open parenthesis
    if (charCode == "(") {
        let parentheses = 1;
        let inSingleComment = false;
        let inDoubleComment = false;
        do {
            possibleEndOffset++;
            charCode = text.charAt(possibleEndOffset);
            if (charCode === "'" &&
                text.charAt(possibleEndOffset - 1) !== "\\") {
                inSingleComment = !inSingleComment;
                continue;
            }
            if (inSingleComment) {
                continue;
            }
            if (charCode === '"' &&
                text.charAt(possibleEndOffset - 1) !== "\\") {
                inDoubleComment = !inDoubleComment;
                continue;
            }
            if (inDoubleComment) {
                continue;
            }
            if (charCode === "(") {
                parentheses++;
            }
            else if (charCode === ")") {
                parentheses--;
            }
        } while (parentheses > 0);
        endOffset = ++possibleEndOffset;
    }
    const content = text.substring(startOffset, endOffset);
    // If content is only directive then ignore
    if (content === "@") {
        return null;
    }
    return {
        directiveName: directiveName,
        matches: text.substring(startOffset, endOffset),
        startOffset,
        endOffset,
    };
}
function matchBraces(text, startOffset, startToken, endToken) {
    let endOffset = startOffset;
    // Confirm we match the start token
    let charCode = text.charAt(endOffset);
    for (let i = 0; i < startToken.length; i++) {
        if (charCode !== startToken[i]) {
            return null;
        }
        charCode = text.charAt(++endOffset);
    }
    lookingForEndToken: while (endOffset < text.length) {
        // consume everything until the endToken starts
        while (charCode !== endToken[0] && endOffset < text.length) {
            charCode = text.charAt(++endOffset);
        }
        for (let i = 0; i < endToken.length; i++) {
            // if we don't match the endToken all the way, start over
            if (charCode !== endToken[i]) {
                continue lookingForEndToken;
            }
            charCode = text.charAt(++endOffset);
        }
        // if we've gotten this far, then we've seen the whole endToken
        break;
    }
    const content = text.substring(startOffset, endOffset);
    // If content is only start token, then ignore
    if (content === startToken || !content.endsWith(endToken)) {
        return null;
    }
    return {
        matches: text.substring(startOffset, endOffset),
        startOffset,
        endOffset,
    };
}
exports.Echo = (0, chevrotain_1.createToken)({
    name: Token.Echo,
    pattern: {
        exec(text, startOffset) {
            const result = matchBraces(text, startOffset, "{{", "}}");
            if (result === null) {
                return null;
            }
            return [result.matches];
        },
    },
    start_chars_hint: ["{"],
    line_breaks: true,
});
exports.RawEcho = (0, chevrotain_1.createToken)({
    name: Token.RawEcho,
    pattern: {
        exec(text, startOffset) {
            const result = matchBraces(text, startOffset, "{!!", "!!}");
            if (result === null) {
                return null;
            }
            return [result.matches];
        },
    },
    start_chars_hint: ["{"],
    line_breaks: true,
});
exports.Comment = (0, chevrotain_1.createToken)({
    name: Token.Comment,
    pattern: {
        exec(text, startOffset) {
            const result = matchBraces(text, startOffset, "{{--", "--}}");
            if (result === null) {
                return null;
            }
            return [result.matches];
        },
    },
    start_chars_hint: ["{"],
    line_breaks: true,
});
exports.EscapedEcho = (0, chevrotain_1.createToken)({
    name: Token.EscapedEcho,
    pattern: /@{{(?!--)\s*(.+?)\s*[^!]}}(\r?\n)?/,
    start_chars_hint: ["@"],
});
exports.EscapedRawEcho = (0, chevrotain_1.createToken)({
    name: Token.EscapedRawEcho,
    pattern: /@{!!\s*(.+?)\s*!!}(\r?\n)?/,
    start_chars_hint: ["@"],
});
exports.DirectiveWithArgs = (0, chevrotain_1.createToken)({
    name: Token.Directive,
    pattern: {
        exec(text, startOffset) {
            const result = matchDirective(text, startOffset);
            if (result === null) {
                return null;
            }
            return [result.matches];
        },
    },
    start_chars_hint: ["@"],
    line_breaks: false,
});
exports.EndDirectiveWithArgs = (0, chevrotain_1.createToken)({
    name: Token.EndDirective,
    pattern: {
        exec(text, startOffset) {
            const result = matchDirective(text, startOffset);
            if (result === null) {
                return null;
            }
            // Check if directive is an end directive
            if (!result.directiveName.startsWith("end")) {
                return null;
            }
            return [result.matches];
        },
    },
    start_chars_hint: ["@"],
    line_breaks: false,
});
exports.StartDirectiveWithArgs = (0, chevrotain_1.createToken)({
    name: Token.StartDirective,
    pattern: {
        exec(text, startOffset) {
            const result = matchDirective(text, startOffset);
            if (result === null) {
                return null;
            }
            // Check if directive is a start directive
            if (!exports.terminalDirectives.includes(result.directiveName)) {
                return null;
            }
            return [result.matches];
        },
    },
    start_chars_hint: ["@"],
    line_breaks: false,
});
exports.StartIfDirectiveWithArgs = (0, chevrotain_1.createToken)({
    name: Token.StartIfDirective,
    pattern: {
        exec(text, startOffset) {
            const result = matchDirective(text, startOffset);
            if (result === null) {
                return null;
            }
            if ([
                "if",
                "unless",
                "auth",
                "guest",
                "env",
                "production",
                "hasSection",
                "sectionMissing",
                "isset",
            ].includes(result.directiveName) ||
                (result.directiveName === "empty" &&
                    result.matches.includes("("))) {
                return [result.matches];
            }
            // no match
            return null;
        },
    },
    start_chars_hint: ["@"],
    line_breaks: false,
});
exports.ElseIfDirectiveWithArgs = (0, chevrotain_1.createToken)({
    name: Token.ElseIfDirective,
    pattern: {
        exec(text, startOffset) {
            const result = matchDirective(text, startOffset);
            if (result === null) {
                return null;
            }
            if (["elseif", "elseauth", "elseguest"].includes(result.directiveName)) {
                return [result.matches];
            }
            return null;
        },
    },
    start_chars_hint: ["@"],
    line_breaks: false,
});
exports.ElseDirectiveWithArgs = (0, chevrotain_1.createToken)({
    name: Token.ElseDirective,
    pattern: {
        exec(text, startOffset) {
            const result = matchDirective(text, startOffset);
            if (result === null) {
                return null;
            }
            // Check if `@else` directive
            if (result.directiveName !== "else") {
                return null;
            }
            return [result.matches];
        },
    },
    start_chars_hint: ["@"],
    line_breaks: false,
});
exports.EndIfDirectiveWithArgs = (0, chevrotain_1.createToken)({
    name: Token.EndIfDirective,
    pattern: {
        exec(text, startOffset) {
            const result = matchDirective(text, startOffset);
            if (result === null) {
                return null;
            }
            if ([
                "endif",
                "endunless",
                "endauth",
                "endguest",
                "endenv",
                "endproduction",
                "endisset",
                "endempty",
            ].includes(result.directiveName)) {
                return [result.matches];
            }
            // no match
            return null;
        },
    },
    start_chars_hint: ["@"],
    line_breaks: false,
});
exports.StartForElseDirectiveWithArgs = (0, chevrotain_1.createToken)({
    name: Token.StartForElseDirective,
    pattern: {
        exec(text, startOffset) {
            const result = matchDirective(text, startOffset);
            if (result === null) {
                return null;
            }
            // Check if `@forelse` directive
            if (result.directiveName !== "forelse") {
                return null;
            }
            return [result.matches];
        },
    },
    start_chars_hint: ["@"],
    line_breaks: false,
});
exports.EmptyDirectiveWithoutArgs = (0, chevrotain_1.createToken)({
    name: Token.EmptyDirective,
    pattern: {
        exec(text, startOffset) {
            const result = matchDirective(text, startOffset);
            if (result === null) {
                return null;
            }
            // Check if `@empty` directive w/o args
            if (result.directiveName === "empty" &&
                !result.matches.includes("(")) {
                return [result.matches];
            }
            return null;
        },
    },
    start_chars_hint: ["@"],
    line_breaks: false,
});
exports.EndForElseDirectiveWithArgs = (0, chevrotain_1.createToken)({
    name: Token.EndForElseDirective,
    pattern: {
        exec(text, startOffset) {
            const result = matchDirective(text, startOffset);
            if (result === null) {
                return null;
            }
            // Check if `@endforelse` directive
            if (result.directiveName !== "endforelse") {
                return null;
            }
            return [result.matches];
        },
    },
    start_chars_hint: ["@"],
    line_breaks: false,
});
exports.StartVerbatimDirectiveWithArgs = (0, chevrotain_1.createToken)({
    name: Token.StartVerbatimDirective,
    pattern: {
        exec(text, startOffset) {
            const result = matchDirective(text, startOffset);
            if (result === null) {
                return null;
            }
            // Check if `@verbatim` directive
            if (result.directiveName !== "verbatim") {
                return null;
            }
            return [result.matches];
        },
    },
    start_chars_hint: ["@"],
    line_breaks: false,
});
exports.EndVerbatimDirectiveWithArgs = (0, chevrotain_1.createToken)({
    name: Token.EndVerbatimDirective,
    pattern: {
        exec(text, startOffset) {
            const result = matchDirective(text, startOffset);
            if (result === null) {
                return null;
            }
            // Check if `@endverbatim` directive
            if (result.directiveName !== "endverbatim") {
                return null;
            }
            return [result.matches];
        },
    },
    start_chars_hint: ["@"],
    line_breaks: false,
});
exports.StartPhpDirective = (0, chevrotain_1.createToken)({
    name: Token.StartPhpDirective,
    pattern: {
        exec(text, startOffset) {
            const result = matchDirective(text, startOffset);
            if (result === null) {
                return null;
            }
            // Check if `@php` directive
            if (result.directiveName !== "php") {
                return null;
            }
            return [result.matches];
        },
    },
    start_chars_hint: ["@"],
    line_breaks: false,
});
exports.EndPhpDirective = (0, chevrotain_1.createToken)({
    name: Token.EndPhpDirective,
    pattern: {
        exec(text, startOffset) {
            const result = matchDirective(text, startOffset);
            if (result === null) {
                return null;
            }
            // Check if `@endphp` directive
            if (result.directiveName !== "endphp") {
                return null;
            }
            return [result.matches];
        },
    },
    start_chars_hint: ["@"],
    line_breaks: false,
});
exports.Literal = (0, chevrotain_1.createToken)({
    name: Token.Literal,
    pattern: /(.|\n)/,
});
exports.allTokens = {
    modes: {
        blade_mode: [
            exports.Comment,
            exports.RawEcho,
            exports.Echo,
            exports.StartVerbatimDirectiveWithArgs,
            exports.EndVerbatimDirectiveWithArgs,
            exports.StartPhpDirective,
            exports.EndPhpDirective,
            exports.StartIfDirectiveWithArgs,
            exports.ElseIfDirectiveWithArgs,
            exports.ElseDirectiveWithArgs,
            exports.EndIfDirectiveWithArgs,
            exports.StartForElseDirectiveWithArgs,
            exports.EmptyDirectiveWithoutArgs,
            exports.EndForElseDirectiveWithArgs,
            exports.EndDirectiveWithArgs,
            exports.StartDirectiveWithArgs,
            exports.DirectiveWithArgs,
            exports.EscapedEcho,
            exports.EscapedRawEcho,
            exports.Literal,
        ],
    },
    defaultMode: Mode.BLADE,
};
exports.BladeLexer = new chevrotain_1.Lexer(exports.allTokens);
