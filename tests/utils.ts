import prettier from "prettier";
import plugin from "../src/plugin";

export function format(content: string) {
  return prettier.format(content, {
    parser: "blade",
    plugins: [plugin as any as string],
  });
}
