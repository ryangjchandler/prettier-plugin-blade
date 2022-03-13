import { BladeLexer, Token } from "../src/lang/lexer";
import { IToken } from "chevrotain";

const lex = (source: string): IToken[] => {
    const result = BladeLexer.tokenize(source);

    if (result.errors.length > 0) {
        throw result.errors[0];
    }

    return result.tokens;
};

it("should generate echo tokens", () => {
    const tokens = lex("{{ $test }}");

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.Echo);
    expect(tokens[0]).toHaveProperty("image", "{{ $test }}");

    expect(tokens).toHaveLength(1);
});

it("should generate echo tokens when no spaces", function () {
    const tokens = lex("{{$coolStuff}}");

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.Echo);
    expect(tokens[0]).toHaveProperty("image", "{{$coolStuff}}");

    expect(tokens).toHaveLength(1);
});

it("should generate raw echo tokens", () => {
    const tokens = lex("{!! $test !!}");

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.RawEcho);
    expect(tokens[0]).toHaveProperty("image", "{!! $test !!}");

    expect(tokens).toHaveLength(1);
});

it("should generate raw echo tokens without spaces", () => {
    const tokens = lex("{!!$something!!}");

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.RawEcho);
    expect(tokens[0]).toHaveProperty("image", "{!!$something!!}");

    expect(tokens).toHaveLength(1);
});

it("should not generate echo token if no ending braces", () => {
    const tokens = lex("{{value").filter(
        (token) => token.tokenType.name !== Token.Literal
    );

    expect(tokens).toHaveLength(0);
});

it("should generate echo token when starting with double negation", () => {
    const tokens = lex("{{!!$value}}");

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.Echo);
    expect(tokens[0]).toHaveProperty("image", "{{!!$value}}");

    expect(tokens).toHaveLength(1);
});

it("should generate raw echo tokens when wrapped in parenthesis", () => {
    const tokens = lex("({!! 'yes' !!})").filter(
        (token) => token.tokenType.name !== Token.Literal
    );

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.RawEcho);
    expect(tokens[0]).toHaveProperty("image", "{!! 'yes' !!}");

    expect(tokens).toHaveLength(1);
});

it("should parse directive if ended with space", function () {
    const tokens = lex("@csrf ");

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.Directive);
    expect(tokens[0]).toHaveProperty("image", "@csrf");

    expect(tokens).toHaveLength(2);
});

it("should parse multiple no args directives", function () {
    const tokens = lex("@csrf is good @csrf").filter(
        (token) => token.tokenType.name !== Token.Literal
    );

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.Directive);
    expect(tokens[0]).toHaveProperty("image", "@csrf");

    expect(tokens[1]).toHaveProperty("tokenType.name", Token.Directive);
    expect(tokens[1]).toHaveProperty("image", "@csrf");

    expect(tokens).toHaveLength(2);
});

it("should generate comment tokens", () => {
    const tokens = lex("{{-- $test --}}");

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.Comment);
    expect(tokens[0]).toHaveProperty("image", "{{-- $test --}}");

    expect(tokens).toHaveLength(1);
});

it("should generate comment tokens without spaces", () => {
    const tokens = lex("{{--$test--}}");

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.Comment);
    expect(tokens[0]).toHaveProperty("image", "{{--$test--}}");

    expect(tokens).toHaveLength(1);
});

it("should generate directive tokens", () => {
    const tokens = lex(
        "@php @something(true) @some() @some  (true) @some(auth()) @some(')' === '@test')"
    ).filter((token) => token.tokenType.name !== Token.Literal);

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.StartPhpDirective);
    expect(tokens[0]).toHaveProperty("image", "@php");

    expect(tokens[1]).toHaveProperty("tokenType.name", Token.Directive);
    expect(tokens[1]).toHaveProperty("image", "@something(true)");

    expect(tokens[2]).toHaveProperty("tokenType.name", Token.Directive);
    expect(tokens[2]).toHaveProperty("image", "@some()");

    expect(tokens[3]).toHaveProperty("tokenType.name", Token.Directive);
    expect(tokens[3]).toHaveProperty("image", "@some  (true)");

    expect(tokens[4]).toHaveProperty("tokenType.name", Token.Directive);
    expect(tokens[4]).toHaveProperty("image", "@some(auth())");

    expect(tokens[5]).toHaveProperty("tokenType.name", Token.Directive);
    expect(tokens[5]).toHaveProperty("image", "@some(')' === '@test')");
    expect(tokens).toHaveLength(6);
});

it("should generate directive tokens with double quote string", () => {
    const tokens = lex("@directive(\")\" === '@test')");

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.Directive);
    expect(tokens[0]).toHaveProperty("image", "@directive(\")\" === '@test')");

    expect(tokens).toHaveLength(1);
});

it("should generate directive tokens with double quote string escaped", () => {
    const tokens = lex('@custom("\\")" === \'@test\')');

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.Directive);
    expect(tokens[0]).toHaveProperty("image", '@custom("\\")" === \'@test\')');

    expect(tokens).toHaveLength(1);
});

it("should generate directive tokens with single quote string escaped", () => {
    const tokens = lex("@test('\\')' === '@test')");

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.Directive);
    expect(tokens[0]).toHaveProperty("image", "@test('\\')' === '@test')");

    expect(tokens).toHaveLength(1);
});

it("should generate directive tokens with close parenthesis over multiple lines", () => {
    const tokens = lex("@csrf(\n\n)");

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.Directive);
    expect(tokens[0]).toHaveProperty("image", "@csrf(\n\n)");

    expect(tokens).toHaveLength(1);
});

it("should generate literal tokens for parenthesis with open parenthesis on next line", () => {
    const tokens = lex("@csrf\n\n\n()");

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.Directive);
    expect(tokens[0]).toHaveProperty("image", "@csrf");

    expect(tokens[1]).toHaveProperty("tokenType.name", Token.Literal);
    expect(tokens[1]).toHaveProperty("image", "\n");
    expect(tokens[2]).toHaveProperty("tokenType.name", Token.Literal);
    expect(tokens[2]).toHaveProperty("image", "\n");
    expect(tokens[3]).toHaveProperty("tokenType.name", Token.Literal);
    expect(tokens[3]).toHaveProperty("image", "\n");
    expect(tokens[4]).toHaveProperty("tokenType.name", Token.Literal);
    expect(tokens[4]).toHaveProperty("image", "(");
    expect(tokens[5]).toHaveProperty("tokenType.name", Token.Literal);
    expect(tokens[5]).toHaveProperty("image", ")");

    expect(tokens).toHaveLength(6);
});

it("should generate literal tokens for 'fake' directives like Vue and Alpine style event handlers", () => {
    const input = '@click="foo()"';
    const tokens = lex(input);

    expect(tokens).toHaveLength(14);
    tokens.forEach((t, i) => {
        expect(t).toHaveProperty("tokenType.name", Token.Literal);
        expect(t).toHaveProperty("image", input.substring(i, i + 1));
    });
});

it("should match echo with non php around it", function () {
    const tokens = lex("does it  {{ 'work' }}?").filter(
        (token) => token.tokenType.name !== Token.Literal
    );

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.Echo);
    expect(tokens[0]).toHaveProperty("image", "{{ 'work' }}");

    expect(tokens).toHaveLength(1);
});

it("should parse space as literal", function () {
    const tokens = lex(" ");

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.Literal);
    expect(tokens[0]).toHaveProperty("image", " ");

    expect(tokens).toHaveLength(1);
});

it("should parse space after directive as literal", function () {
    const tokens = lex("@csrf ");

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.Directive);
    expect(tokens[0]).toHaveProperty("image", "@csrf");

    expect(tokens[1]).toHaveProperty("tokenType.name", Token.Literal);
    expect(tokens[1]).toHaveProperty("image", " ");

    expect(tokens).toHaveLength(2);
});

it("should parse comment with @ sign as comment", function () {
    const tokens = lex("@{{--This is actually not that nice--}}");

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.Literal);
    expect(tokens[0]).toHaveProperty("image", "@");

    expect(tokens[1]).toHaveProperty("tokenType.name", Token.Comment);
    expect(tokens[1]).toHaveProperty(
        "image",
        "{{--This is actually not that nice--}}"
    );

    expect(tokens).toHaveLength(2);
});

it("should parse escaped echos", function () {
    const tokens = lex("@{{ This is actually not that nice }}");

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.EscapedEcho);
    expect(tokens[0]).toHaveProperty(
        "image",
        "@{{ This is actually not that nice }}"
    );

    expect(tokens).toHaveLength(1);
});

it("should parse escaped raw echoes", function () {
    const tokens = lex("@{!! This is actually not that nice !!}");

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.EscapedRawEcho);
    expect(tokens[0]).toHaveProperty(
        "image",
        "@{!! This is actually not that nice !!}"
    );

    expect(tokens).toHaveLength(1);
});

it("should parse if directive", function () {
    const tokens = lex("@if(true)");

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.StartIfDirective);
    expect(tokens[0]).toHaveProperty("image", "@if(true)");

    expect(tokens).toHaveLength(1);
});

it("should parse elseif directive", function () {
    const tokens = lex("@elseif(true)");

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.ElseIfDirective);
    expect(tokens[0]).toHaveProperty("image", "@elseif(true)");

    expect(tokens).toHaveLength(1);
});

it("should parse else directive", function () {
    const tokens = lex("@else");

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.ElseDirective);
    expect(tokens[0]).toHaveProperty("image", "@else");

    expect(tokens).toHaveLength(1);
});

it("should parse endif directive", function () {
    const tokens = lex("@endif");

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.EndIfDirective);
    expect(tokens[0]).toHaveProperty("image", "@endif");

    expect(tokens).toHaveLength(1);
});

it("should parse verbatim directive", function () {
    const tokens = lex("@verbatim");

    expect(tokens[0]).toHaveProperty(
        "tokenType.name",
        Token.StartVerbatimDirective
    );
    expect(tokens[0]).toHaveProperty("image", "@verbatim");

    expect(tokens).toHaveLength(1);
});

it("should parse endverbatim directive", function () {
    const tokens = lex("@endverbatim");

    expect(tokens[0]).toHaveProperty(
        "tokenType.name",
        Token.EndVerbatimDirective
    );
    expect(tokens[0]).toHaveProperty("image", "@endverbatim");

    expect(tokens).toHaveLength(1);
});

it.todo("should parse escaped directive as literal");

describe("php directives", () => {
    it("should parse php directives", function () {
        const tokens = lex("@php");

        expect(tokens[0]).toHaveProperty(
            "tokenType.name",
            Token.StartPhpDirective
        );
        expect(tokens[0]).toHaveProperty("image", "@php");

        expect(tokens).toHaveLength(1);
    });

    it("should parse endphp directives", function () {
        const tokens = lex("@endphp");

        expect(tokens[0]).toHaveProperty(
            "tokenType.name",
            Token.EndPhpDirective
        );
        expect(tokens[0]).toHaveProperty("image", "@endphp");

        expect(tokens).toHaveLength(1);
    });
});

describe("loops", () => {
    it("should parse forelse directive", function () {
        const tokens = lex("@forelse(true)");

        expect(tokens[0]).toHaveProperty(
            "tokenType.name",
            Token.StartForElseDirective
        );
        expect(tokens[0]).toHaveProperty("image", "@forelse(true)");

        expect(tokens).toHaveLength(1);
    });

    it("should parse empty directive", function () {
        const tokens = lex("@empty");

        expect(tokens[0]).toHaveProperty(
            "tokenType.name",
            Token.EmptyDirective
        );
        expect(tokens[0]).toHaveProperty("image", "@empty");

        expect(tokens).toHaveLength(1);
    });

    it("should parse endforelse directive", function () {
        const tokens = lex("@endforelse");

        expect(tokens[0]).toHaveProperty(
            "tokenType.name",
            Token.EndForElseDirective
        );
        expect(tokens[0]).toHaveProperty("image", "@endforelse");

        expect(tokens).toHaveLength(1);
    });
});
