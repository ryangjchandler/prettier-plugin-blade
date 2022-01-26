import { formatFile } from "../utils";
import path from "path";

test("basic", () => {
  const formatted = formatFile(path.join(__dirname, "./comment.blade.php"));
  expect(formatted).toMatchSnapshot();
});

it("does not escape comments", () => {
  const formatted = formatFile(
    path.join(__dirname, "./comment-with-escape.blade.php")
  );
  expect(formatted).toMatchSnapshot();
});
