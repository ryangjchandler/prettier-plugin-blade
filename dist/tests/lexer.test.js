"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lexer_1 = require("../src/lang/lexer");
const token_1 = require("../src/lang/token");
const lex = (source) => {
    return new lexer_1.Lexer(source).all();
};
it("can generate echo tokens", () => {
    const echo = lex("{{ $test }}")[0];
    expect(echo).toHaveProperty("type", token_1.TokenType.Echo);
    expect(echo).toHaveProperty("raw", "{{ $test }}");
    const spaceless = lex("{{$test}}")[0];
    expect(spaceless).toHaveProperty("type", token_1.TokenType.Echo);
    expect(spaceless).toHaveProperty("raw", "{{$test}}");
});
it("can generate raw echo tokens", () => {
    const raw = lex("{!! $test !!}")[0];
    expect(raw).toHaveProperty("type", token_1.TokenType.RawEcho);
    expect(raw).toHaveProperty("raw", "{!! $test !!}");
    const spaceless = lex("{!!$test!!}")[0];
    expect(spaceless).toHaveProperty("type", token_1.TokenType.RawEcho);
    expect(spaceless).toHaveProperty("raw", "{!!$test!!}");
});
it("can generate directive tokens", () => {
    const tokens = lex("@php @if(true) @else() @if  (true) @if(auth()) @if(')' === '@test')").filter((token) => token.type !== token_1.TokenType.Literal && !!token.raw.trim());
    expect(tokens[0]).toHaveProperty("type", token_1.TokenType.Directive);
    expect(tokens[0]).toHaveProperty("raw", "@php");
    expect(tokens[1]).toHaveProperty("type", token_1.TokenType.Directive);
    expect(tokens[1]).toHaveProperty("raw", "@if(true)");
    expect(tokens[2]).toHaveProperty("type", token_1.TokenType.Directive);
    expect(tokens[2]).toHaveProperty("raw", "@else()");
    expect(tokens[3]).toHaveProperty("type", token_1.TokenType.Directive);
    expect(tokens[3]).toHaveProperty("raw", "@if  (true)");
    expect(tokens[4]).toHaveProperty("type", token_1.TokenType.Directive);
    expect(tokens[4]).toHaveProperty("raw", "@if(auth())");
    expect(tokens[5]).toHaveProperty("type", token_1.TokenType.Directive);
    expect(tokens[5]).toHaveProperty("raw", "@if(auth()) @if(')' === '@test')");
    expect(tokens).toHaveLength(6);
});
it("can generate comment tokens", () => {
    const raw = lex("{{-- $test --}}")[0];
    expect(raw).toHaveProperty("type", token_1.TokenType.Comment);
    expect(raw).toHaveProperty("raw", "{{-- $test --}}");
    const spaceless = lex("{{--$test--}}")[0];
    expect(spaceless).toHaveProperty("type", token_1.TokenType.Comment);
    expect(spaceless).toHaveProperty("raw", "{{--$test--}}");
});
it("should parse directive if ended with space", function () {
    const tokens = lex("@csrf ");
    expect(tokens).toHaveLength(1);
    expect(tokens[0]).toHaveProperty("type", token_1.TokenType.Directive);
    expect(tokens[0]).toHaveProperty("raw", "@csrf");
});
it("should parse multiple no args directives", function () {
    const tokens = lex("@csrf is good @csrf");
    expect(tokens).toHaveLength(3);
    expect(tokens[0]).toHaveProperty("type", token_1.TokenType.Directive);
    expect(tokens[0]).toHaveProperty("raw", "@csrf");
    expect(tokens[1]).toHaveProperty("type", token_1.TokenType.Literal);
    expect(tokens[1]).toHaveProperty("raw", " is good ");
    expect(tokens[2]).toHaveProperty("type", token_1.TokenType.Directive);
    expect(tokens[2]).toHaveProperty("raw", "@csrf");
});
it("can generate raw echo tokens when wrapped in parenthesis", () => {
    const raw = lex("{{!! 'yes' !!}}")[0];
    expect(raw).toHaveProperty("type", token_1.TokenType.RawEcho);
    expect(raw).toHaveProperty("raw", "{!! 'yes' !!}");
});
it("can generate echo token when starting with double negation", () => {
    const raw = lex("{{!!$value}}")[0];
    expect(raw).toHaveProperty("type", token_1.TokenType.Echo);
    expect(raw).toHaveProperty("raw", "{{!!$value}}");
});
