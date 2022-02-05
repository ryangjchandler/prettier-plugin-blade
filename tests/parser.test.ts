import { parseBlade } from "../src/lang/Parser";
import { bladeToAstVisitor } from "../src/lang/ASTParser";

const parse = (source: string) => {
    const result = parseBlade(source);

    return bladeToAstVisitor.visit(result.cst);
};

it("should work", function () {
    const ast = parse("{{'awesome'}} @csrf {{'cool'}}");

    expect(ast);
});

it.todo("should parse literal only");

it.todo("should parse directives");
