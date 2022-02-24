import { AstPath, Doc, Plugin } from "prettier";
import {AsHtml, AsReplacer, HtmlOutput, Node, Replacer} from "./lang/nodes";
import { formatAsHtml, setOptions } from "./utils";
import { bladeToAstVisitor } from "./lang/ASTParser";
import { parseBlade } from "./lang/Parser";

const traverseHtml = (original: AsHtml, replacers: Replacer[]): string => {
    if (typeof original === "string") {
        return original;
    }

    if (original instanceof Array) {
        return original
            .map((asHtml) => traverseHtml(asHtml, replacers))
            .join("")
    }

    const asHtml = original.asHtml;

    const replacer = original.asReplacer;
    if (replacer) {
        if (typeof replacer === "string" && typeof asHtml === "string") {
            replacers.push({
                search: asHtml,
                replace: replacer,
            })
        } else {
            if (replacer instanceof Array) {
                replacers.push(...replacer);
            } else if (typeof replacer === "string") {
                throw new Error("AsHtml has to be string if replacer is string type.")
            } else {
                replacers.push(replacer);
            }
        }
    }

    return traverseHtml(asHtml, replacers)
}

const replace = (original: string, replacers: Replacer[]): string => {
    let replaced = original;

    replacers.forEach((replacer) => {
        replaced = replaced.replace(replacer.search, replacer.replace)
    })

    replaced = replaced.replace(/\s+<div x-delete-x><\/div>/g, "")

    return replaced;
}

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
                setOptions(options);

                const result = parseBlade(text);

                const ast: Node = bladeToAstVisitor.visit(result.cst);

                return ast;
            },
            locStart: () => 0,
            locEnd: () => 0,
            astFormat: "blade",
        },
    },
    printers: {
        blade: {
            print(path: AstPath, _, print: (path: AstPath<Node>) => Doc) {
                const node: Node = path.getValue();

                const replacers: Replacer[] = [];
                const html = traverseHtml(node.toHtml(), replacers);

                const formattedHtml = formatAsHtml(html);

                const replacedHtml = replace(formattedHtml, replacers)

                return replacedHtml;
            },
        },
    },
    defaultOptions: {
        tabWidth: 4,
    },
};

export = plugin;
