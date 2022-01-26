import {format} from "prettier";
import {Lexer} from "./lang/lexer";
import {Parser} from "./lang/parser";

const tw = require('prettier-plugin-tailwindcss')


const plugin: any = {
    languages: [
        {
            name: "Blade",
            parsers: ["blade"],
            extensions: [
                '.blade.php'
            ],
            vscodeLanguageIds: ["blade"],
        },
    ],
    parsers: {
        blade: {
            parse: function (text: string) {
                const lexer = new Lexer(text)
                const tokens = lexer.all()

                return new Parser(tokens).parse()
            },
            astFormat: 'blade',
            preprocess: function (text: string) {
                return [
                    (t: string) => format(t, { parser: 'html', plugins: [{ parsers: { html: tw.parsers.html } }] }),
                ].reduce((t, callback) => callback(t), text)
            },
        },
    },
    printers: {
        blade: {
            print(path: any, options: any, print: any) {
                const node = path.getValue()

                if (Array.isArray(node)) {
                    return path.map(print)
                }

                return node ? node.toDoc() : ''
            }
        }
    },
};

export = plugin;