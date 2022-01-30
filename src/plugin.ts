import { AstPath, format } from "prettier";
import { Lexer } from "./lang/lexer";
import { Parser } from "./lang/parser";
import { Plugin, Doc } from "prettier";
import { Node } from "./lang/nodes";
import { formatAsHtml, setOptions } from "./utils";

const tw = require("prettier-plugin-tailwindcss");

const plugin: Plugin = {
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
            parse: function (text: string, _, options) {
                setOptions(options)

                const lexer = new Lexer(text);
                const tokens = lexer.all();

                return new Parser(tokens).parse();
            },
            locStart: () => 0,
            locEnd: () => 0,
            astFormat: "blade",
            preprocess: function (text: string) {
                return [
                    (t: string) => formatAsHtml(t),
                ].reduce((t, callback) => callback(t), text);
            },
        },
    },
    printers: {
        blade: {
            print(path: AstPath, _, print: (path: AstPath<Node>) => Doc) {
                const node: Node = path.getValue();

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

export = plugin;
