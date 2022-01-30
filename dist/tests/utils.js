"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatFile = exports.readFile = exports.format = exports.allFilesIn = void 0;
const prettier_1 = __importDefault(require("prettier"));
const plugin_1 = __importDefault(require("../src/plugin"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function allFilesIn(dirPath, files = []) {
    const dir = fs_1.default.readdirSync(dirPath);
    dir.forEach((file) => {
        const realPath = path_1.default.join(dirPath, "/", file);
        if (fs_1.default.statSync(realPath).isDirectory()) {
            files = allFilesIn(realPath, files);
        }
        else {
            files.push(realPath);
        }
    });
    return files;
}
exports.allFilesIn = allFilesIn;
function format(content) {
    return prettier_1.default.format(content, {
        parser: "blade",
        plugins: [plugin_1.default],
    });
}
exports.format = format;
function readFile(path) {
    return fs_1.default.readFileSync(path, "utf-8");
}
exports.readFile = readFile;
function formatFile(path) {
    return format(readFile(path));
}
exports.formatFile = formatFile;
