import prettier from "prettier";
import plugin from "../src/plugin";
import fs from "fs";

export function format(content: string) {
  return prettier.format(content, {
    parser: "blade",
    plugins: [plugin as any as string],
  });
}

export function readFile(path: string) {
  return fs.readFileSync(path, "utf-8");
}

export function formatFile(path: string) {
  return format(readFile(path));
}
