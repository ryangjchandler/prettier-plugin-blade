import {parseBlade, productions} from "../src/lang/Parser";
import { bladeToAstVisitor } from "../src/lang/ASTParser";
import {generateCstDts} from "chevrotain";
import {DirectivePairNode, DocumentNode} from "../src/lang/nodes";

const parse = (source: string): DocumentNode => {
    const cstDef = generateCstDts(productions);

    const result = parseBlade(source);

    if (result.lexErrors.length > 0) {
        throw result.lexErrors[0];
    }

    if (result.parseErrors.length > 0) {
        throw result.parseErrors[0];
    }

    return bladeToAstVisitor.visit(result.cst);
};

it("should parse ast for pair directives", function () {
    const ast = parse("@auth(\"admin\")@endauth");

    expect(ast.children).toHaveLength(1);

    const directivePairNode = ast.children[0] as DirectivePairNode;

    expect(directivePairNode.open.directive).toBe("auth")
    expect(directivePairNode.children).toHaveLength(0);
    expect(directivePairNode.close.directive).toBe("endauth")
});

it("should parse ast for pair directives with children", function () {
    const ast = parse("@auth(\"admin\")I am god!@endauth");

    expect(ast.children).toHaveLength(1);

    const directivePairNode = ast.children[0] as DirectivePairNode;

    expect(directivePairNode.open.directive).toBe("auth")
    expect(directivePairNode.children).toHaveLength(1);
    expect(directivePairNode.children[0].toString()).toBe("I am god!")
    expect(directivePairNode.close.directive).toBe("endauth")
});

it.todo("should parse ast for par directive with child pair directive");

it.todo("should parse literal only");

it.todo("should parse directives");
