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

it("removes superfluous spaces from directives", () => {
  const formatted = formatFile(
    path.join(__dirname, "./superfluous-spaces-directive.blade.php")
  );
  expect(formatted).toMatchSnapshot();
});

it("should format if else directives", () => {
  const formatted = formatFile(
    path.join(__dirname, "./if-else-directive.blade.php")
  );
  expect(formatted).toMatchSnapshot();
});
