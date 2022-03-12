import { parseBlade, productions } from "../src/lang/parser";
import { bladeToAstVisitor } from "../src/lang/ASTParser";
import { generateCstDts } from "chevrotain";
import {
    DirectiveIfBlockNode,
    DirectiveForElseBlockNode,
    DirectiveNode,
    DirectivePairNode,
    DocumentNode,
    LiteralNode,
    VerbatimNode,
    PhpNode,
} from "../src/lang/nodes";

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
    const ast = parse('@auth("admin")@endauth');

    expect(ast.children).toHaveLength(1);

    const directivePairNode = ast.children[0] as DirectivePairNode;

    expect(directivePairNode.open.directive).toBe("auth");
    expect(directivePairNode.children).toHaveLength(0);
    expect(directivePairNode.close.directive).toBe("endauth");
});

it("should parse ast for pair directives with children", function () {
    const ast = parse('@auth("admin")I am god!@endauth');

    expect(ast.children).toHaveLength(1);

    const directivePairNode = ast.children[0] as DirectivePairNode;

    expect(directivePairNode.open.directive).toBe("auth");
    expect(directivePairNode.children).toHaveLength(1);
    expect(directivePairNode.children[0].toString()).toBe("I am god!");
    expect(directivePairNode.close.directive).toBe("endauth");
});

it("should parse ast for directive", function () {
    const ast = parse("@method('PUT')");

    expect(ast.children).toHaveLength(1);

    const directiveNode = ast.children[0] as DirectiveNode;

    expect(directiveNode.directive).toBe("method");
    expect(directiveNode.code).toBe("'PUT'");
});

it("should parse ast for multiple directive ", function () {
    const ast = parse("@method('PUT') @csrf");

    expect(ast.children).toHaveLength(3);

    const methodDirective = ast.children[0] as DirectiveNode;
    expect(methodDirective.directive).toBe("method");
    expect(methodDirective.code).toBe("'PUT'");

    const literal = ast.children[1] as LiteralNode;
    expect(literal.toString()).toBe(" ");

    const csrfDirective = ast.children[2] as DirectiveNode;
    expect(csrfDirective.directive).toBe("csrf");
    expect(csrfDirective.code).toBe("");
});

it("should parse ast @if @endif directive block", function () {
    const ast = parse("@if(true) cool @endif");

    expect(ast.children).toHaveLength(1);

    const ifBlockNode = ast.children[0] as DirectiveIfBlockNode;

    expect(ifBlockNode.open.directive).toBe("if");
    expect(ifBlockNode.children).toHaveLength(1);
    expect(ifBlockNode.children[0].toString()).toBe(" cool ");
    expect(ifBlockNode.close.directive).toBe("endif");
});

it("should parse ast @if @else @endif directive block", function () {
    const ast = parse("@if(false) nice @else not as cool @endif");

    expect(ast.children).toHaveLength(1);

    const ifBlockNode = ast.children[0] as DirectiveIfBlockNode;

    expect(ifBlockNode.open.directive).toBe("if");
    expect(ifBlockNode.children).toHaveLength(1);
    expect(ifBlockNode.children[0].toString()).toBe(" nice ");

    const elseBlockNode = ifBlockNode.elseBlock;
    expect(elseBlockNode?.elseDirective.directive).toBe("else");
    expect(elseBlockNode?.children).toHaveLength(1);
    expect(elseBlockNode?.children[0].toString()).toBe(" not as cool ");

    expect(ifBlockNode.close.directive).toBe("endif");
});

it("should parse ast @if @elseif @else @endif directive block", function () {
    const ast = parse(
        '@if(false) nice @elseif("monkey") cat @else not as nice @endif'
    );

    expect(ast.children).toHaveLength(1);

    const ifBlockNode = ast.children[0] as DirectiveIfBlockNode;

    expect(ifBlockNode.open.directive).toBe("if");
    expect(ifBlockNode.children).toHaveLength(1);
    expect(ifBlockNode.children[0].toString()).toBe(" nice ");

    expect(ifBlockNode.elseIfBlocks).toHaveLength(1);
    const elseIfBlockNode = ifBlockNode.elseIfBlocks[0];
    expect(elseIfBlockNode.elseIfDirective.directive).toBe("elseif");
    expect(elseIfBlockNode.children).toHaveLength(1);
    expect(elseIfBlockNode.children[0].toString()).toBe(" cat ");

    const elseBlockNode = ifBlockNode.elseBlock;
    expect(elseBlockNode?.elseDirective.directive).toBe("else");
    expect(elseBlockNode?.children).toHaveLength(1);
    expect(elseBlockNode?.children[0].toString()).toBe(" not as nice ");

    expect(ifBlockNode.close.directive).toBe("endif");
});

it("should parse ast @if block with multiple elseif", function () {
    const ast = parse(
        '@if("snake") snake @elseif("monkey") monkey @elseif("human") human @endif'
    );

    expect(ast.children).toHaveLength(1);

    const ifBlockNode = ast.children[0] as DirectiveIfBlockNode;

    expect(ifBlockNode.open.directive).toBe("if");
    expect(ifBlockNode.children).toHaveLength(1);
    expect(ifBlockNode.children[0].toString()).toBe(" snake ");

    expect(ifBlockNode.elseIfBlocks).toHaveLength(2);
    const elseIfBlockNodeA = ifBlockNode.elseIfBlocks[0];
    expect(elseIfBlockNodeA.elseIfDirective.directive).toBe("elseif");
    expect(elseIfBlockNodeA.children).toHaveLength(1);
    expect(elseIfBlockNodeA.children[0].toString()).toBe(" monkey ");

    const elseIfBlockNodeB = ifBlockNode.elseIfBlocks[1];
    expect(elseIfBlockNodeB.elseIfDirective.directive).toBe("elseif");
    expect(elseIfBlockNodeB.children).toHaveLength(1);
    expect(elseIfBlockNodeB.children[0].toString()).toBe(" human ");

    expect(ifBlockNode.close.directive).toBe("endif");
});

it("should parse ast verbatim block", function () {
    const ast = parse("@verbatim gg wp {{well}} @endverbatim");

    expect(ast.children).toHaveLength(1);

    const verbatimBlock = ast.children[0] as VerbatimNode;

    expect(verbatimBlock.open.directive).toBe("verbatim");
    expect(verbatimBlock.content).toEqual(" gg wp {{well}} ");
    expect(verbatimBlock.close.directive).toBe("endverbatim");
});

it("should parse ast php block", function () {
    const ast = parse("@php $foo = 'bar' @endphp");

    expect(ast.children).toHaveLength(1);

    const phpBlock = ast.children[0] as PhpNode;

    expect(phpBlock.open.directive).toBe("php");
    expect(phpBlock.code).toEqual(" $foo = 'bar' ");
    expect(phpBlock.close.directive).toBe("endphp");
});

describe("loops", () => {
    it("should parse ast @forelse @endforelse directive block", function () {
        const ast = parse("@forelse(true) cool @endforelse");

        expect(ast.children).toHaveLength(1);

        const forElseBlockNode = ast.children[0] as DirectiveForElseBlockNode;

        expect(forElseBlockNode.open.directive).toBe("forelse");
        expect(forElseBlockNode.children).toHaveLength(1);
        expect(forElseBlockNode.children[0].toString()).toBe(" cool ");
        expect(forElseBlockNode.close.directive).toBe("endforelse");
    });

    it("should parse ast @forelse @empty @endforelse directive block", function () {
        const ast = parse(
            "@forelse(false) nice @empty not as cool @endforelse"
        );

        expect(ast.children).toHaveLength(1);

        const forElseBlockNode = ast.children[0] as DirectiveForElseBlockNode;

        expect(forElseBlockNode.open.directive).toBe("forelse");
        expect(forElseBlockNode.children).toHaveLength(1);
        expect(forElseBlockNode.children[0].toString()).toBe(" nice ");

        const elseBlockNode = forElseBlockNode.emptyBlock;
        expect(elseBlockNode?.emptyDirective.directive).toBe("empty");
        expect(elseBlockNode?.children).toHaveLength(1);
        expect(elseBlockNode?.children[0].toString()).toBe(" not as cool ");

        expect(forElseBlockNode.close.directive).toBe("endforelse");
    });
});

it.todo("should parse ast for par directive with child pair directive");

it.todo("should parse literal only");
