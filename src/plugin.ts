import { AstPath, format } from "prettier";
import { Lexer } from "./lang/lexer";
import { Parser } from "./lang/parser";
import { Plugin, Doc } from "prettier";

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
      parse: function (text: string) {
        const lexer = new Lexer(text);
        const tokens = lexer.all();

        return new Parser(tokens).parse();
      },
      locStart: () => 0,
      locEnd: () => 0,
      astFormat: "blade",
      preprocess: function (text: string) {
        return [
          (t: string) =>
            format(t, {
              parser: "html",
              plugins: [{ parsers: { html: tw.parsers.html } }],
            }),
        ].reduce((t, callback) => callback(t), text);
      },
    },
  },
  printers: {
    blade: {
      print(path: AstPath, _, print: (path: AstPath) => Doc) {
        const node = path.getValue();

        if (Array.isArray(node)) {
          return path.map(print);
        }

        return node ? node.toDoc() : "";
      },
    },
  },
};

export = plugin;
