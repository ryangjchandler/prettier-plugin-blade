import { format } from "prettier";
// @ts-ignore
import php from "@prettier/plugin-php/standalone";
const tw = require('prettier-plugin-tailwindcss')

export const formatAsHtml = (source: string): string => {
    return format(source, {
        parser: "html",
        plugins: [{ parsers: { html: tw.parsers.html } }],
    })
}

export const formatAsPhp = (source: string): string => {
    let manipulated = source;

    if (!source.startsWith("<?php")) {
        manipulated = "<?php " + manipulated;
    }

    if (!manipulated.endsWith(";")) {
        manipulated += ";";
    }

    try {
        manipulated = format(source, { parser: "php", plugins: [php] })
            .replace("<?php ", "")
            .trim();
    } catch (e) {
        // Fallback to original source if php formatter fails
        return source.trim();
    }

    if (source.trim().endsWith(";")) {
        return manipulated;
    }

    // The PHP plugin for Prettier will add a semi-colon by default. We don't always want that.
    if (manipulated.endsWith(";")) {
        manipulated.substring(0, manipulated.length - 1);
    }
    return manipulated;
};
