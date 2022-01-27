import prettier from "prettier";
import plugin from "../src/plugin";
import fs from "fs";
import path from "path";

export function allFilesIn(dirPath: string, files: string[] = []): string[] {
  const dir = fs.readdirSync(dirPath)

  dir.forEach(file => {
    const realPath = path.join(dirPath, '/', file)

    if (fs.statSync(realPath).isDirectory()) {
      files = allFilesIn(realPath, files)
    } else {
      files.push(realPath)
    }
  })

  return files
}

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
