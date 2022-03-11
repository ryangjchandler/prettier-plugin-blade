import { format, ParserOptions } from "prettier";
// @ts-ignore
import php from "@prettier/plugin-php/standalone";
const tw = require("prettier-plugin-tailwindcss");

const htmlDebug = false;
const phpDebug = false;

let htmlOptions: ParserOptions;
let phpOptions: ParserOptions;
export const setOptions = (options: ParserOptions) => {
    htmlOptions = Object.assign({}, options, {
        parser: "html",
        plugins: [{ parsers: { html: tw.parsers.html } }],
    });

    phpOptions = Object.assign({}, options, { parser: "php", plugins: [php] });

    // FIXME there *must* be a better way to get just the user configurable options?!
    [
        "cursorOffset",
        "rangeEnd",
        "rangeStart",
        "locEnd",
        "locStat",
        "printer",
        "originalText",
        "astFormat",
    ].forEach((p) => {
        // @ts-ignore
        delete htmlOptions[p];
        // @ts-ignore
        delete phpOptions[p];
    });
};

export const formatAsHtml = (source: string): string => {
    let formatted = "";
    let debugOutput = [""];

    htmlDebug && debugOutput.push(`source:    '${source}'`);

    try {
        formatted = format(source, htmlOptions);
    } catch (e) {
        htmlDebug && debugOutput.push("error: defaulting to source");

        formatted = source;
    }

    htmlDebug && debugOutput.push(`formatted: '${formatted}'`);
    htmlDebug && console.log("formatAsHtml", debugOutput.join(`\n`));

    return formatted;
};

export const formatAsPhp = (source: string): string => {
    let manipulated = (source = source.trim());
    let formatted = "";
    let debugOutput = [""];

    if (source === "") {
        return source;
    }

    if (!manipulated.startsWith("<?php")) {
        manipulated = "<?php " + manipulated;
    }

    if (!manipulated.endsWith(";")) {
        manipulated += ";";
    }

    phpDebug && debugOutput.push(`source:      '${source}'`);
    phpDebug && debugOutput.push(`manipulated: '${manipulated}'`);

    try {
        formatted = format(manipulated, phpOptions)
            .replace("<?php ", "")
            .trim();
    } catch (e) {
        phpDebug && debugOutput.push("error: defaulting to source");

        // Fallback to original source if php formatter fails
        formatted = source;
    }

    // The PHP plugin for Prettier will add a semi-colon by default. We don't
    // always want that.
    if (!source.endsWith(";") && formatted.endsWith(";")) {
        formatted = formatted.substring(0, formatted.length - 1);
    }

    phpDebug && debugOutput.push(`formatted:   '${formatted}'`);
    phpDebug && console.log("formatAsPhp", debugOutput.join(`\n`));

    return formatted;
};

let id = 1;
export const nextId = () => {
    // `id` is just a base 10 int, but we format it into a base36 numeric string
    // which allows us to pack 1295 possible values into just 2 characters.
    // This helps us keep our placeholders small and makes it less likely to
    // incorrectly reflow inline elements like echo statements.
    return (++id).toString(36);
};

export const placeholderString = (prefix: string, content: string): string => {
    let placeholder = `__${prefix}_${nextId()}`;

    // The placeholder is as short as we can make it. If it's already "too long"
    // then use it as it b/c there's nothing we can do about it.
    if (placeholder.length >= content.length) {
        return placeholder;
    }

    let lengthToPad = content.length - placeholder.length;

    // Pad the placeholder to be as long as the "content" so it can be wrapped
    // correctly.
    return `__${prefix}_${nextId()}_${"x".repeat(lengthToPad - 1)}`;
};

export const placeholderElement = (prefix: string, content: string): string => {
    let placeholder = `<${prefix}-${nextId()} />`;

    // The placeholder is as short as we can make it. If it's already "too long"
    // then use it as it b/c there's nothing we can do about it.
    if (placeholder.length >= content.length) {
        return placeholder;
    }

    let lengthToPad = content.length - placeholder.length;

    // Pad the placeholder to be as long as the "content" so it can be wrapped
    // correctly.
    return `<${prefix}-${nextId()}-${"x".repeat(lengthToPad - 1)} />`;
};
