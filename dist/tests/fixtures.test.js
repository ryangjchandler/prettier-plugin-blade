"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const path_1 = require("path");
test.each((0, utils_1.allFilesIn)((0, path_1.join)(__dirname, "/", "__fixtures__")).map(function (path) {
    return {
        path,
        name: path.replace((0, path_1.join)(__dirname, "/", "__fixtures__", "/"), ""),
    };
}))("$name", ({ name, path }) => {
    const [original, expected] = (0, utils_1.readFile)(path)
        .split("----")
        .map((part) => part.trimStart());
    expect((0, utils_1.format)(original)).toEqual(expected);
});
it("should test", function () {
    const [original, expected] = (0, utils_1.readFile)((0, path_1.join)(__dirname, "/", "__fixtures__/components/component-directive.blade.php"))
        .split("----")
        .map((part) => part.trimStart());
    expect((0, utils_1.format)(original)).toEqual(expected);
});
