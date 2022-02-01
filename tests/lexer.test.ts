import { BladeLexer, Token } from "../src/lang/lexer";
import {ILexingResult, IToken} from "chevrotain";

const lex = (source: string): IToken[] => {
    const result = BladeLexer.tokenize(source);

  if (result.errors.length > 0) {
      throw new Error("Lexer found " + result.errors.length + " errors")
  }

    return result.tokens
};

it("should generate echo tokens", () => {
    const tokens = lex("{{ $test }}");

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.Echo)
    expect(tokens[0]).toHaveProperty("image", "{{ $test }}")

    expect(tokens).toHaveLength(1)
});

it('should generate echo tokens when no spaces', function () {
    const tokens = lex("{{$coolStuff}}");

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.Echo)
    expect(tokens[0]).toHaveProperty("image", "{{$coolStuff}}")

    expect(tokens).toHaveLength(1)
});

it("should generate raw echo tokens", () => {
    const tokens = lex("{!! $test !!}");

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.RawEcho)
    expect(tokens[0]).toHaveProperty("image", "{!! $test !!}")

    expect(tokens).toHaveLength(1)
});

it("should generate raw echo tokens without spaces", () => {
    const tokens = lex("{!!$something!!}");

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.RawEcho)
    expect(tokens[0]).toHaveProperty("image", "{!!$something!!}")

    expect(tokens).toHaveLength(1)
});


it("should not generate echo token if no ending braces", () => {
    const tokens = lex("{{value")
        .filter((token) => token.tokenType.name !== Token.Literal);

    expect(tokens).toHaveLength(0)
});

it("should generate echo token when starting with double negation", () => {
    const tokens = lex("{{!!$value}}");

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.Echo);
    expect(tokens[0]).toHaveProperty("image", "{{!!$value}}");

    expect(tokens).toHaveLength(1)
});

it("should generate raw echo tokens when wrapped in parenthesis", () => {
    const tokens = lex("{{!! 'yes' !!}}")
        .filter((token) => token.tokenType.name !== Token.Literal);

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.RawEcho);
    expect(tokens[0]).toHaveProperty("image", "{!! 'yes' !!}");

    expect(tokens).toHaveLength(1)
});

it("should parse directive if ended with space", function () {
    const tokens = lex("@csrf ")

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.Directive);
    expect(tokens[0]).toHaveProperty("image", "@csrf");

    expect(tokens).toHaveLength(2);
});

it("should parse multiple no args directives", function () {
    const tokens = lex("@csrf is good @csrf")
        .filter((token) => token.tokenType.name !== Token.Literal);

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
        "@php @if(true) @else() @if  (true) @if(auth()) @if(')' === '@test')"
    ).filter((token) => token.tokenType.name !== Token.Literal);

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.Directive);
    expect(tokens[0]).toHaveProperty("image", "@php");

    expect(tokens[1]).toHaveProperty("tokenType.name", Token.Directive);
    expect(tokens[1]).toHaveProperty("image", "@if(true)");

    expect(tokens[2]).toHaveProperty("tokenType.name", Token.Directive);
    expect(tokens[2]).toHaveProperty("image", "@else()");

    expect(tokens[3]).toHaveProperty("tokenType.name", Token.Directive);
    expect(tokens[3]).toHaveProperty("image", "@if  (true)");

    expect(tokens[4]).toHaveProperty("tokenType.name", Token.Directive);
    expect(tokens[4]).toHaveProperty("image", "@if(auth())");

    expect(tokens[5]).toHaveProperty("tokenType.name", Token.Directive);
    expect(tokens[5]).toHaveProperty("image", "@if(')' === '@test')");
    expect(tokens).toHaveLength(6);
});

it("should generate directive tokens with double quote string", () => {
    const tokens = lex("@if(\")\" === '@test')");

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.Directive);
    expect(tokens[0]).toHaveProperty("image", "@if(\")\" === '@test')");

    expect(tokens).toHaveLength(1);
});

it("should generate directive tokens with double quote string escaped", () => {
    const tokens = lex("@if(\"\\\")\" === '@test')");

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.Directive);
    expect(tokens[0]).toHaveProperty("image", "@if(\"\\\")\" === '@test')");

    expect(tokens).toHaveLength(1);
});

it("should generate directive tokens with single quote string escaped", () => {
    const tokens = lex("@if('\\')' === '@test')");

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.Directive);
    expect(tokens[0]).toHaveProperty("image", "@if('\\')' === '@test')");

    expect(tokens).toHaveLength(1);
});

it("should generate directive tokens with close parenthesis over multiple lines", () => {
    const tokens = lex("@csrf(\n\n)");

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.Directive);
    expect(tokens[0]).toHaveProperty("image", "@csrf(\n\n)");

    expect(tokens).toHaveLength(1);
});

it("should generate directive tokens with open parenthesis over multiple lines", () => {
    const tokens = lex("@csrf\n\n\n()");

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.Directive);
    expect(tokens[0]).toHaveProperty("image", "@csrf\n\n\n()");

    expect(tokens).toHaveLength(1);
});

it('should match echo with non php around it', function () {
    const tokens = lex("does it  {{ 'work' }}?")
        .filter((token) => token.tokenType.name !== Token.Literal);

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.Echo);
    expect(tokens[0]).toHaveProperty("image", "{{ 'work' }}");

    expect(tokens).toHaveLength(1);
});

it('should parse space as literal', function () {
    const tokens = lex(" ");

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.Literal);
    expect(tokens[0]).toHaveProperty("image", " ");

    expect(tokens).toHaveLength(1);
});

it('should parse space after directive as literal', function () {
    const tokens = lex("@csrf ");

    expect(tokens[0]).toHaveProperty("tokenType.name", Token.Directive);
    expect(tokens[0]).toHaveProperty("image", "@csrf");

    expect(tokens[1]).toHaveProperty("tokenType.name", Token.Literal);
    expect(tokens[1]).toHaveProperty("image", " ");

    expect(tokens).toHaveLength(2);
});
