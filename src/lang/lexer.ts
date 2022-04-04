import { createToken, Lexer } from "chevrotain";
import { CustomPatternMatcherReturn } from "@chevrotain/types";

export enum Token {
    Literal = "Literal",
    Echo = "Echo",
    RawEcho = "RawEcho",
    Directive = "Directive",
    Comment = "Comment",
    EscapedEcho = "EscapedEcho",
    EscapedRawEcho = "EscapedRawEcho",
    EndDirective = "EndDirective",
    StartDirective = "StartDirective",
    StartIfDirective = "StartIfDirective",
    ElseIfDirective = "ElseIfDirective",
    ElseDirective = "ElseDirective",
    EndIfDirective = "EndIfDirective",
    StartForElseDirective = "StartForElseDirective",
    EmptyDirective = "EmptyDirective",
    EndForElseDirective = "EndForElseDirective",
    StartVerbatimDirective = "StartVerbatimDirective",
    EndVerbatimDirective = "EndVerbatimDirective",
    StartPhpDirective = "StartPhpDirective",
    EndPhpDirective = "EndPhpDirective",
}

enum Mode {
    PHP = "php_mode",
    BLADE = "blade_mode",
}

export const terminalDirectives = [
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

function matchDirective(text: string, startOffset: number) {
    let endOffset = startOffset;

    // Check if directive
    let charCode = text.charAt(endOffset);
    if (!charCode.startsWith("@")) {
        return null;
    }

    // Check if escaped directive
    if (
        text.charAt(endOffset - 1) === "@" ||
        text.charAt(endOffset + 1) === "@"
    ) {
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

            if (
                charCode === "'" &&
                text.charAt(possibleEndOffset - 1) !== "\\"
            ) {
                inSingleComment = !inSingleComment;
                continue;
            }

            if (inSingleComment) {
                continue;
            }

            if (
                charCode === '"' &&
                text.charAt(possibleEndOffset - 1) !== "\\"
            ) {
                inDoubleComment = !inDoubleComment;
                continue;
            }

            if (inDoubleComment) {
                continue;
            }

            if (charCode === "(") {
                parentheses++;
            } else if (charCode === ")") {
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

/**
 * Match text that starts w/ a particular token and ends w/ a particular token.
 * Though mostly used for matching echo and comment braces, it is able to match
 * any starting/ending token pair.
 *
 * @param  text           the entire text document
 * @param  startOffset    offset w/i the document to start looking
 * @param  startToken     the starting token to look for
 * @param  endToken       the ending token to look for
 * @param  falsePositives (optional) an array of strings that *must mot* follow
 *                        the start token
 * @return null|object    null if nothing matched; an object w/ metadata if a
 *                        match is found
 */
function matchBraces(
    text: string,
    startOffset: number,
    startToken: string,
    endToken: string,
    falsePositives: Array<string> = []
) {
    let endOffset = startOffset;

    // Confirm we match the start token
    let charCode = text.charAt(endOffset);
    for (let i = 0; i < startToken.length; i++) {
        if (charCode !== startToken[i]) {
            return null;
        }
        charCode = text.charAt(++endOffset);
    }

    // eliminate any false positives
    for (let falsePositive of falsePositives) {
        if (
            text.substring(endOffset, endOffset + falsePositive.length) ===
            falsePositive
        ) {
            return null;
        }
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

export const Echo = createToken({
    name: Token.Echo,
    pattern: {
        exec(
            text: string,
            startOffset: number
        ): CustomPatternMatcherReturn | null {
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

export const RawEcho = createToken({
    name: Token.RawEcho,
    pattern: {
        exec(
            text: string,
            startOffset: number
        ): CustomPatternMatcherReturn | null {
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

export const Comment = createToken({
    name: Token.Comment,
    pattern: {
        exec(
            text: string,
            startOffset: number
        ): CustomPatternMatcherReturn | null {
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

export const EscapedEcho = createToken({
    name: Token.EscapedEcho,
    pattern: {
        exec(
            text: string,
            startOffset: number
        ): CustomPatternMatcherReturn | null {
            // be careful not to accidentally match `{{--` when looking at `@{{`
            const result = matchBraces(text, startOffset, "@{{", "}}", ["--"]);

            if (result === null) {
                return null;
            }

            return [result.matches];
        },
    },
    start_chars_hint: ["@"],
    line_breaks: true,
});

export const EscapedRawEcho = createToken({
    name: Token.EscapedRawEcho,
    pattern: {
        exec(
            text: string,
            startOffset: number
        ): CustomPatternMatcherReturn | null {
            const result = matchBraces(text, startOffset, "@{!!", "!!}");

            if (result === null) {
                return null;
            }

            return [result.matches];
        },
    },
    start_chars_hint: ["@"],
    line_breaks: true,
});

export const DirectiveWithArgs = createToken({
    name: Token.Directive,
    pattern: {
        exec(
            text: string,
            startOffset: number
        ): CustomPatternMatcherReturn | null {
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

export const EndDirectiveWithArgs = createToken({
    name: Token.EndDirective,
    pattern: {
        exec(
            text: string,
            startOffset: number
        ): CustomPatternMatcherReturn | null {
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

export const StartDirectiveWithArgs = createToken({
    name: Token.StartDirective,
    pattern: {
        exec(
            text: string,
            startOffset: number
        ): CustomPatternMatcherReturn | null {
            const result = matchDirective(text, startOffset);

            if (result === null) {
                return null;
            }

            // Check if directive is a start directive
            if (!terminalDirectives.includes(result.directiveName)) {
                return null;
            }

            return [result.matches];
        },
    },
    start_chars_hint: ["@"],
    line_breaks: false,
});

export const StartIfDirectiveWithArgs = createToken({
    name: Token.StartIfDirective,
    pattern: {
        exec(
            text: string,
            startOffset: number
        ): CustomPatternMatcherReturn | null {
            const result = matchDirective(text, startOffset);

            if (result === null) {
                return null;
            }

            if (
                [
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
                    result.matches.includes("("))
            ) {
                return [result.matches];
            }

            // no match
            return null;
        },
    },
    start_chars_hint: ["@"],
    line_breaks: false,
});

export const ElseIfDirectiveWithArgs = createToken({
    name: Token.ElseIfDirective,
    pattern: {
        exec(
            text: string,
            startOffset: number
        ): CustomPatternMatcherReturn | null {
            const result = matchDirective(text, startOffset);

            if (result === null) {
                return null;
            }

            if (
                ["elseif", "elseauth", "elseguest"].includes(
                    result.directiveName
                )
            ) {
                return [result.matches];
            }

            return null;
        },
    },
    start_chars_hint: ["@"],
    line_breaks: false,
});

export const ElseDirectiveWithArgs = createToken({
    name: Token.ElseDirective,
    pattern: {
        exec(
            text: string,
            startOffset: number
        ): CustomPatternMatcherReturn | null {
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

export const EndIfDirectiveWithArgs = createToken({
    name: Token.EndIfDirective,
    pattern: {
        exec(
            text: string,
            startOffset: number
        ): CustomPatternMatcherReturn | null {
            const result = matchDirective(text, startOffset);

            if (result === null) {
                return null;
            }

            if (
                [
                    "endif",
                    "endunless",
                    "endauth",
                    "endguest",
                    "endenv",
                    "endproduction",
                    "endisset",
                    "endempty",
                ].includes(result.directiveName)
            ) {
                return [result.matches];
            }

            // no match
            return null;
        },
    },
    start_chars_hint: ["@"],
    line_breaks: false,
});

export const StartForElseDirectiveWithArgs = createToken({
    name: Token.StartForElseDirective,
    pattern: {
        exec(
            text: string,
            startOffset: number
        ): CustomPatternMatcherReturn | null {
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

export const EmptyDirectiveWithoutArgs = createToken({
    name: Token.EmptyDirective,
    pattern: {
        exec(
            text: string,
            startOffset: number
        ): CustomPatternMatcherReturn | null {
            const result = matchDirective(text, startOffset);

            if (result === null) {
                return null;
            }

            // Check if `@empty` directive w/o args
            if (
                result.directiveName === "empty" &&
                !result.matches.includes("(")
            ) {
                return [result.matches];
            }

            return null;
        },
    },
    start_chars_hint: ["@"],
    line_breaks: false,
});

export const EndForElseDirectiveWithArgs = createToken({
    name: Token.EndForElseDirective,
    pattern: {
        exec(
            text: string,
            startOffset: number
        ): CustomPatternMatcherReturn | null {
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

export const StartVerbatimDirectiveWithArgs = createToken({
    name: Token.StartVerbatimDirective,
    pattern: {
        exec(
            text: string,
            startOffset: number
        ): CustomPatternMatcherReturn | null {
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

export const EndVerbatimDirectiveWithArgs = createToken({
    name: Token.EndVerbatimDirective,
    pattern: {
        exec(
            text: string,
            startOffset: number
        ): CustomPatternMatcherReturn | null {
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

export const StartPhpDirective = createToken({
    name: Token.StartPhpDirective,
    pattern: {
        exec(
            text: string,
            startOffset: number
        ): CustomPatternMatcherReturn | null {
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

export const EndPhpDirective = createToken({
    name: Token.EndPhpDirective,
    pattern: {
        exec(
            text: string,
            startOffset: number
        ): CustomPatternMatcherReturn | null {
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

export const Literal = createToken({
    name: Token.Literal,
    pattern: /(.|\n)/,
});

export const allTokens = {
    modes: {
        blade_mode: [
            Comment,
            RawEcho,
            Echo,
            StartVerbatimDirectiveWithArgs,
            EndVerbatimDirectiveWithArgs,
            StartPhpDirective,
            EndPhpDirective,
            StartIfDirectiveWithArgs,
            ElseIfDirectiveWithArgs,
            ElseDirectiveWithArgs,
            EndIfDirectiveWithArgs,
            StartForElseDirectiveWithArgs,
            EmptyDirectiveWithoutArgs,
            EndForElseDirectiveWithArgs,
            EndDirectiveWithArgs,
            StartDirectiveWithArgs,
            DirectiveWithArgs,
            EscapedEcho,
            EscapedRawEcho,
            Literal,
        ],
    },
    defaultMode: Mode.BLADE,
};

export const BladeLexer = new Lexer(allTokens);
