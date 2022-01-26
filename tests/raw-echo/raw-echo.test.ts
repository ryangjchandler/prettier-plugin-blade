import fs from "fs";
import path from "path";
import { format } from "../utils";

const fixture = fs.readFileSync(path.join(__dirname, "./raw-echo.blade.php"), "utf-8");

test("basic", () => {
    const formatted = format(fixture);
    expect(formatted).toMatchSnapshot();
});
