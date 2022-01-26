import fs from "fs";
import path from "path";
import prettier from "prettier";
import plugin from "../../src/plugin";

const fixture = fs.readFileSync(path.join(__dirname, "./echo.blade.php"), "utf-8");

function format(content: string) {
    return prettier.format(content, {
        parser: "blade",
        plugins: [plugin as any as string]
    });
}

test("basic", () => {
    const formatted = format(fixture);
    expect(formatted).toMatchSnapshot();
});
