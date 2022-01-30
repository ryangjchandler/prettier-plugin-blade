"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatAsPhp = exports.formatAsHtml = exports.setOptions = void 0;
const prettier_1 = require("prettier");
// @ts-ignore
const standalone_1 = __importDefault(require("@prettier/plugin-php/standalone"));
const tw = require('prettier-plugin-tailwindcss');
let pluginOptions;
const setOptions = (options) => {
    pluginOptions = options;
};
exports.setOptions = setOptions;
const formatAsHtml = (source) => {
    return (0, prettier_1.format)(source, {
        parser: "html",
        plugins: [{ parsers: { html: tw.parsers.html } }],
        tabWidth: pluginOptions === null || pluginOptions === void 0 ? void 0 : pluginOptions.tabWidth
    });
};
exports.formatAsHtml = formatAsHtml;
const formatAsPhp = (source) => {
    let manipulated = source;
    if (!source.startsWith("<?php")) {
        manipulated = "<?php " + manipulated;
    }
    if (!manipulated.endsWith(";")) {
        manipulated += ";";
    }
    try {
        manipulated = (0, prettier_1.format)(source, { parser: "php", plugins: [standalone_1.default] })
            .replace("<?php ", "")
            .trim();
    }
    catch (e) {
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
exports.formatAsPhp = formatAsPhp;
