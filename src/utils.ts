import { format, ParserOptions } from "prettier";
// @ts-ignore
import php from "@prettier/plugin-php/standalone";
const tw = require("prettier-plugin-tailwindcss");

const debug = false;

let pluginOptions: ParserOptions;
export const setOptions = (options: ParserOptions) => {
    pluginOptions = options;
};

export const formatAsHtml = (source: string): string => {
    let formatted = "";
    let debugOutput = [""];

    debug && debugOutput.push(`source:    '${source}'`);

    try {
        formatted = format(source, {
            parser: "html",
            plugins: [{ parsers: { html: tw.parsers.html } }],
            tabWidth: pluginOptions?.tabWidth,
        });
    } catch (e) {
        debug && debugOutput.push("error: defaulting to source");

        formatted = source;
    }

    debug && debugOutput.push(`formatted: '${formatted}'`);
    debug && console.log("formatAsHtml", debugOutput.join(`\n`));

    return formatted;
};

export const formatAsPhp = (source: string): string => {
    let manipulated = (source = source.trim());
    let formatted = "";
    let debugOutput = [""];

    if (!manipulated.startsWith("<?php")) {
        manipulated = "<?php " + manipulated;
    }

    if (!manipulated.endsWith(";")) {
        manipulated += ";";
    }

    debug && debugOutput.push(`source:      '${source}'`);
    debug && debugOutput.push(`manipulated: '${manipulated}'`);

    try {
        formatted = format(manipulated, { parser: "php", plugins: [php] })
            .replace("<?php ", "")
            .trim();
    } catch (e) {
        debug && debugOutput.push("error: defaulting to source");

        // Fallback to original source if php formatter fails
        formatted = source;
    }

    // The PHP plugin for Prettier will add a semi-colon by default. We don't
    // always want that.
    if (!source.endsWith(";") && formatted.endsWith(";")) {
        formatted = formatted.substring(0, formatted.length - 1);
    }

    debug && debugOutput.push(`formatted:   '${formatted}'`);
    debug && console.log("formatAsPhp", debugOutput.join(`\n`));

    return formatted;
};
