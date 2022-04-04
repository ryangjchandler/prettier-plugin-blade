"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.placeholderElement = exports.placeholderString = exports.nextId = exports.formatAsPhp = exports.formatAsHtml = exports.setOptions = void 0;
const prettier_1 = require("prettier");
// @ts-ignore
const standalone_1 = __importDefault(require("@prettier/plugin-php/standalone"));
const tw = require("prettier-plugin-tailwindcss");
const htmlDebug = false;
const phpDebug = false;
let htmlOptions;
let phpOptions;
const setOptions = (options) => {
    htmlOptions = Object.assign({}, options, {
        parser: "html",
        plugins: [{ parsers: { html: tw.parsers.html } }],
    });
    phpOptions = Object.assign({}, options, { parser: "php", plugins: [standalone_1.default] });
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
exports.setOptions = setOptions;
const formatAsHtml = (source) => {
    let formatted = "";
    let debugOutput = [""];
    htmlDebug && debugOutput.push(`source:    '${source}'`);
    try {
        formatted = (0, prettier_1.format)(source, htmlOptions);
    }
    catch (e) {
        htmlDebug && debugOutput.push("error: defaulting to source");
        formatted = source;
    }
    htmlDebug && debugOutput.push(`formatted: '${formatted}'`);
    htmlDebug && console.log("formatAsHtml", debugOutput.join(`\n`));
    return formatted;
};
exports.formatAsHtml = formatAsHtml;
const formatAsPhp = (source) => {
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
        formatted = (0, prettier_1.format)(manipulated, phpOptions)
            .replace("<?php ", "")
            .trim();
    }
    catch (e) {
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
exports.formatAsPhp = formatAsPhp;
let id = 1;
const nextId = () => {
    // `id` is just a base 10 int, but we format it into a base36 numeric string
    // which allows us to pack 1295 possible values into just 2 characters.
    // This helps us keep our placeholders small and makes it less likely to
    // incorrectly reflow inline elements like echo statements.
    return (++id).toString(36);
};
exports.nextId = nextId;
const placeholderString = (prefix, content) => {
    let placeholder = `__${prefix}_${(0, exports.nextId)()}`;
    // The placeholder is as short as we can make it. If it's already "too long"
    // then use it as it b/c there's nothing we can do about it.
    if (placeholder.length >= content.length) {
        return placeholder;
    }
    let lengthToPad = content.length - placeholder.length;
    // Pad the placeholder to be as long as the "content" so it can be wrapped
    // correctly.
    return `__${prefix}_${(0, exports.nextId)()}_${"x".repeat(lengthToPad - 1)}`;
};
exports.placeholderString = placeholderString;
const placeholderElement = (prefix, content) => {
    let placeholder = `<${prefix}-${(0, exports.nextId)()} />`;
    // The placeholder is as short as we can make it. If it's already "too long"
    // then use it as it b/c there's nothing we can do about it.
    if (placeholder.length >= content.length) {
        return placeholder;
    }
    let lengthToPad = content.length - placeholder.length;
    // Pad the placeholder to be as long as the "content" so it can be wrapped
    // correctly.
    return `<${prefix}-${(0, exports.nextId)()}-${"x".repeat(lengthToPad - 1)} />`;
};
exports.placeholderElement = placeholderElement;
