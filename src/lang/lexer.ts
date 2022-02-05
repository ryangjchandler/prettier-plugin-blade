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
}

enum Mode {
    PHP = "php_mode",
    BLADE = "blade_mode",
}

export const Echo = createToken({
    name: Token.Echo,
    pattern: /{{\s*(.+?)\s*[^!]}}(\r?\n)?/,
    start_chars_hint: ["{"],
});

export const RawEcho = createToken({
    name: Token.RawEcho,
    pattern: /{!!\s*(.+?)\s*!!}(\r?\n)?/,
    start_chars_hint: ["{"],
});

export const Comment = createToken({
    name: Token.Comment,
    pattern: /{{--(.*?)--}}/,
    start_chars_hint: ["{"],
});

export const EscapedEcho = createToken({
    name: Token.EscapedEcho,
    pattern: /@{{(?!--)\s*(.+?)\s*[^!]}}(\r?\n)?/,
    start_chars_hint: ["@"],
});

export const EscapedRawEcho = createToken({
    name: Token.EscapedRawEcho,
    pattern: /@{!!\s*(.+?)\s*!!}(\r?\n)?/,
    start_chars_hint: ["@"],
});

export const DirectiveWithArgs = createToken({
    name: Token.Directive,
    pattern: {
        exec(text, startOffset): CustomPatternMatcherReturn | null {
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

            endOffset++;
            charCode = text.charAt(endOffset);
            // Consume name of directive
            while (/\w/.exec(charCode)) {
                endOffset++;
                charCode = text.charAt(endOffset);
            }

            // Consume spaces
            let possibleEndOffset = endOffset;
            charCode = text.charAt(possibleEndOffset);
            while ([" "].includes(charCode)) {
                possibleEndOffset++;
                charCode = text.charAt(possibleEndOffset);
            }

            // Check if next char is an open parenthesis
            charCode = text.charAt(possibleEndOffset);
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

            return [text.substring(startOffset, endOffset)];
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
            DirectiveWithArgs,
            EscapedEcho,
            EscapedRawEcho,
            Literal,
        ],
    },
    defaultMode: Mode.BLADE,
};

export const BladeLexer = new Lexer(allTokens);
