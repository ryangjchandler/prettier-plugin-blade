import { format } from "prettier";
// @ts-ignore
import php from "@prettier/plugin-php/standalone";

export const formatAsPhp = (source: string): string => {
  if (!source.startsWith("<?php")) {
    source = "<?php " + source;
  }

  let code = format(source, { parser: "php", plugins: [php] })
    .replace("<?php ", "")
    .trim();

  if (source.trim().endsWith(";")) {
    return code;
  }

  // The PHP plugin for Prettier will add a semi-colon by default. We don't always want that.
  return code.substring(0, code.length - 1);
};
