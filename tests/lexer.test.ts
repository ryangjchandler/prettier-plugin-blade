import { Lexer } from "../src/lang/lexer";
import { Token, TokenType } from "../src/lang/token";

const lex = (source: string): Token[] => {
    return new Lexer(source).all();
};

it("can generate echo tokens", () => {
    const echo = lex("{{ $test }}")[0];

    expect(echo).toHaveProperty("type", TokenType.Echo);
    expect(echo).toHaveProperty("raw", "{{ $test }}");

    const spaceless = lex("{{$test}}")[0];

    expect(spaceless).toHaveProperty("type", TokenType.Echo);
    expect(spaceless).toHaveProperty("raw", "{{$test}}");
});

it("can generate raw echo tokens", () => {
    const raw = lex("{!! $test !!}")[0];

    expect(raw).toHaveProperty("type", TokenType.RawEcho);
    expect(raw).toHaveProperty("raw", "{!! $test !!}");

    const spaceless = lex("{!!$test!!}")[0];

    expect(spaceless).toHaveProperty("type", TokenType.RawEcho);
    expect(spaceless).toHaveProperty("raw", "{!!$test!!}");
});

it("can generate directive tokens", () => {
    const tokens = lex("@php @if(true) @else() @if  (true) @if(auth()) @if(')' === '@test')").filter(
        (token) => token.type !== TokenType.Literal && !!token.raw.trim()
    );

    expect(tokens[0]).toHaveProperty("type", TokenType.Directive);
    expect(tokens[0]).toHaveProperty("raw", "@php");

    expect(tokens[1]).toHaveProperty("type", TokenType.Directive);
    expect(tokens[1]).toHaveProperty("raw", "@if(true)");

    expect(tokens[2]).toHaveProperty("type", TokenType.Directive);
    expect(tokens[2]).toHaveProperty("raw", "@else()");

    expect(tokens[3]).toHaveProperty("type", TokenType.Directive);
    expect(tokens[3]).toHaveProperty("raw", "@if  (true)");

    expect(tokens[4]).toHaveProperty("type", TokenType.Directive)
    expect(tokens[4]).toHaveProperty("raw", "@if(auth())");
});

it("can generate comment tokens", () => {
    const raw = lex("{{-- $test --}}")[0];

    expect(raw).toHaveProperty("type", TokenType.Comment);
    expect(raw).toHaveProperty("raw", "{{-- $test --}}");

    const spaceless = lex("{{--$test--}}")[0];

    expect(spaceless).toHaveProperty("type", TokenType.Comment);
    expect(spaceless).toHaveProperty("raw", "{{--$test--}}");
});
