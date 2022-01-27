import { Lexer } from "../src/lang/lexer";
import { Token, TokenType } from "../src/lang/token";

const lex = (source: string): Token[] => {
    return new Lexer(source).all();
};

it("can generate echo tokens", () => {
    const echo = lex("{{ $test }}")[0];

    expect(echo).toHaveProperty("type", TokenType.T_ECHO);
    expect(echo).toHaveProperty("raw", "{{ $test }}");

    const spaceless = lex("{{$test}}")[0];

    expect(spaceless).toHaveProperty("type", TokenType.T_ECHO);
    expect(spaceless).toHaveProperty("raw", "{{$test}}");
});

it("can generate raw echo tokens", () => {
    const raw = lex("{!! $test !!}")[0];

    expect(raw).toHaveProperty("type", TokenType.T_RAW_ECHO);
    expect(raw).toHaveProperty("raw", "{!! $test !!}");

    const spaceless = lex("{!!$test!!}")[0];

    expect(spaceless).toHaveProperty("type", TokenType.T_RAW_ECHO);
    expect(spaceless).toHaveProperty("raw", "{!!$test!!}");
});

it("can generate directive tokens", () => {
    const tokens = lex("@php @if(true) @else() @if  (true)").filter(
        (token) => token.type !== TokenType.T_LITERAL
    );

    expect(tokens[0]).toHaveProperty("type", TokenType.T_DIRECTIVE);
    expect(tokens[0]).toHaveProperty("raw", "@php");

    expect(tokens[1]).toHaveProperty("type", TokenType.T_DIRECTIVE);
    expect(tokens[1]).toHaveProperty("raw", "@if(true)");

    expect(tokens[2]).toHaveProperty("type", TokenType.T_DIRECTIVE);
    expect(tokens[2]).toHaveProperty("raw", "@else()");

    expect(tokens[3]).toHaveProperty("type", TokenType.T_DIRECTIVE);
    expect(tokens[3]).toHaveProperty("raw", "@if  (true)");
});

it("can generate comment tokens", () => {
    const raw = lex("{{-- $test --}}")[0];

    expect(raw).toHaveProperty("type", TokenType.T_COMMENT);
    expect(raw).toHaveProperty("raw", "{{-- $test --}}");

    const spaceless = lex("{{--$test--}}")[0];

    expect(spaceless).toHaveProperty("type", TokenType.T_COMMENT);
    expect(spaceless).toHaveProperty("raw", "{{--$test--}}");
});
