"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const argparse_1 = require("argparse");
const fs_1 = require("fs");
const utils_1 = require("../tests/utils");
const parser = new argparse_1.ArgumentParser({
    description: 'A small command-line tool to test the Blade plugin on fixture files.',
    add_help: true,
});
parser.add_argument('file', { help: 'The file to format.' });
const args = parser.parse_args();
const [original, _] = (0, fs_1.readFileSync)(args.file, 'utf-8')
    .split("----")
    .map((part) => part.trimStart());
process.stdout.write((0, utils_1.format)(original));
