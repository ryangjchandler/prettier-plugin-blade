"use strict";
const lexer_1 = require("./lang/lexer");
const parser_1 = require("./lang/parser");
const utils_1 = require("./utils");
const tw = require("prettier-plugin-tailwindcss");
const plugin = {
    languages: [
        {
            name: "Blade",
            parsers: ["blade"],
            extensions: [".blade.php"],
            vscodeLanguageIds: ["blade"],
        },
    ],
    parsers: {
        blade: {
            parse: function (text, _, options) {
                (0, utils_1.setOptions)(options);
                const lexer = new lexer_1.Lexer(text);
                const tokens = lexer.all();
                return new parser_1.Parser(tokens).parse();
            },
            locStart: () => 0,
            locEnd: () => 0,
            astFormat: "blade",
            preprocess: function (text) {
                return [
                    (t) => (0, utils_1.formatAsHtml)(t),
                ].reduce((t, callback) => callback(t), text);
            },
        },
    },
    printers: {
        blade: {
            print(path, _, print) {
                const node = path.getValue();
                if (Array.isArray(node)) {
                    return path.map(print);
                }
                return node ? node.toDoc() : "";
            },
        },
    },
    defaultOptions: {
        tabWidth: 4,
    }
};
module.exports = plugin;
