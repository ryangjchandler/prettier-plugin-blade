import { allFilesIn, format, readFile } from "./utils";
import { join } from "path";

test.each(
    allFilesIn(join(__dirname, "/", "__fixtures__")).map(function (path) {
        return {
            path,
            name: path.replace(join(__dirname, "/", "__fixtures__", "/"), ""),
        };
    })
)("$name", ({ name, path }) => {
    const [original, expected] = readFile(path)
        .split("----")
        .map((part) => part.trimStart());

    expect(format(original)).toEqual(expected);
});

it("should test", function () {
    const [original, expected] = readFile(
        join(
            __dirname,
            "/",
            "__fixtures__/components/component-directive.blade.php"
        )
    )
        .split("----")
        .map((part) => part.trimStart());

    expect(format(original)).toEqual(expected);
});
