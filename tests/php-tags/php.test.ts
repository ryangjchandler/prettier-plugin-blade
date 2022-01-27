import path from "path";
import { formatFile } from "../utils";

it("should convert php long tags to blade directives", function() {
  const formatted = formatFile(path.join(__dirname, "./php-long-tags.blade.php"));
  expect(formatted).toMatchSnapshot();
});

it("should convert php short tags to blade directives", function() {
  const formatted = formatFile(path.join(__dirname, "./php-short-tags.blade.php"));
  expect(formatted).toMatchSnapshot();
});

it("should convert php echo tags to raw echo", function() {
  const formatted = formatFile(path.join(__dirname, "./php-echo-tags.blade.php"));
  expect(formatted).toMatchSnapshot();
});