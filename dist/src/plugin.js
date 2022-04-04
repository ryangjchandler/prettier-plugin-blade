"use strict";
const nodes_1 = require("./lang/nodes");
const utils_1 = require("./utils");
const ASTParser_1 = require("./lang/ASTParser");
const parser_1 = require("./lang/parser");
const traverseHtml = (original, replacers) => {
    if (typeof original === "string") {
        return original;
    }
    if (original instanceof Array) {
        return original
            .map((asHtml) => traverseHtml(asHtml, replacers))
            .join("");
    }
    const asHtml = original.asHtml;
    const replacer = original.asReplacer;
    if (replacer) {
        if (typeof replacer === "string" && typeof asHtml === "string") {
            replacers.push({
                search: asHtml,
                replace: replacer,
            });
        }
        else {
            if (replacer instanceof Array) {
                replacers.push(...replacer);
            }
            else if (typeof replacer === "string") {
                throw new Error("AsHtml has to be string if replacer is string type.");
            }
            else {
                replacers.push(replacer);
            }
        }
    }
    return traverseHtml(asHtml, replacers);
};
const findIndent = (text, pattern, tabWidth) => {
    let search = 
    // @ts-ignore
    pattern.constructor.name === "RegExp" ? pattern.source : pattern;
    const matched = text.match(new RegExp(`([ \t]*.*)${search}`));
    if (matched === null) {
        return "";
    }
    return " ".repeat(Math.floor(matched[1].length / tabWidth) * tabWidth);
};
const replace = (original, replacers, options) => {
    let replaced = original;
    let blockIndent = "";
    let spreadingIndent = false;
    let tabWidth = options.tabWidth || 1;
    let debug = false;
    debug && console.log("original", original);
    // First off, let's clean up all of the "force line break" elements.
    [
        {
            pattern: new RegExp(`[ \t\n]+${nodes_1.forceHtmlSplit.trim()}`, "g"),
            replacement: "",
        },
        {
            pattern: new RegExp(`[ \t\n]+${nodes_1.forceNewLine.trim()}$`, "gm"),
            replacement: "",
        },
        {
            pattern: new RegExp(`[ \t\n]+${nodes_1.forceNewLine.trim()} ?`, "gm"),
            replacement: `\n`,
        },
    ].forEach((el) => {
        replaced = replaced.replace(el.pattern, el.replacement);
    });
    debug && console.log("just placeholders", replaced);
    replacers.forEach((replacer, i) => {
        var replacement = replacer.replace;
        let localIndent = "";
        if (replacer.spreadIndent) {
            spreadingIndent = true;
            blockIndent = findIndent(replaced, replacer.search, tabWidth);
        }
        if (spreadingIndent) {
            localIndent = findIndent(replaced, replacer.search, tabWidth);
            if (localIndent === "") {
                // if the current replacer has no indentation, when we might be
                // a "single line" replacer, so we should just use the
                // blockIndent and also indent this element
                localIndent = blockIndent;
                replacement = `${blockIndent}${replacement.trim()}`;
            }
            if (replacement.includes(`\n`)) {
                debug && console.log(`localIndent: '${localIndent}'`);
                // Apply the leading indent to the replacer string, except for the
                // first line, which is already indented
                replacement = replacement
                    .split(`\n`)
                    .map((line, i) => (i === 0 ? "" : localIndent) + line)
                    .join(`\n`);
            }
        }
        debug &&
            console.log(`
replacing  : '${replacer.search}'
with this  : '${replacement}'
blockIndent: '${blockIndent}'`);
        replaced = replaced.replace(replacer.search, replacement);
        if (replacer.resetIndent) {
            spreadingIndent = false;
            blockIndent = "";
        }
    });
    return replaced;
};
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
                const result = (0, parser_1.parseBlade)(text);
                const ast = ASTParser_1.bladeToAstVisitor.visit(result.cst);
                return ast;
            },
            locStart: () => 0,
            locEnd: () => 0,
            astFormat: "blade",
        },
    },
    printers: {
        blade: {
            print(path, options, print) {
                const node = path.getValue();
                const replacers = [];
                const html = traverseHtml(node.toHtml(), replacers);
                const formattedHtml = (0, utils_1.formatAsHtml)(html);
                const replacedHtml = replace(formattedHtml, replacers, options);
                return replacedHtml;
            },
        },
    },
    defaultOptions: {
        tabWidth: 4,
    },
};
module.exports = plugin;
