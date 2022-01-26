import { formatFile } from "../utils";
import path from "path";

it("escapes directives with parameters", () => {
  // Can still remove overflow of spaces, as multiple spaces will
  // be removed when rendered.
  const formatted = formatFile(
    path.join(__dirname, "./escaped-directive-parameters.blade.php")
  );
  expect(formatted).toMatchSnapshot();
});

it("escapes directives", () => {
  // Can still remove overflow of spaces, as multiple spaces will
  // be removed when rendered.
  const formatted = formatFile(
    path.join(__dirname, "./escaped-directive.blade.php")
  );
  expect(formatted).toMatchSnapshot();
});