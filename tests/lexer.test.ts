import { BladeLexer, Token } from "../src/lang/lexer";
import {ILexingResult, IToken} from "chevrotain";
import {TokenType} from "../src/lang/token";

const lex = (source: string): IToken[] => {
    return BladeLexer.tokenize(source).tokens
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
    const tokens = lex("{{value");

    expect(tokens).toHaveLength(0)
});

it("should generate echo token when starting with double negation", () => {
    const tokens = lex("{{!!$value}}");

    expect(tokens[0]).toHaveProperty("tokenType.name", TokenType.Echo);
    expect(tokens[0]).toHaveProperty("image", "{{!!$value}}");

    expect(tokens).toHaveLength(1)
});

it("should generate raw echo tokens when wrapped in parenthesis", () => {
    const tokens = lex("{{!! 'yes' !!}}");

    expect(tokens[0]).toHaveProperty("tokenType.name", TokenType.RawEcho);
    expect(tokens[0]).toHaveProperty("image", "{!! 'yes' !!}");

    expect(tokens).toHaveLength(1)
});

it("should parse directive if ended with space", function () {
    const tokens = lex("@csrf ");

    expect(tokens[0]).toHaveProperty("tokenType.name", TokenType.Directive);
    expect(tokens[0]).toHaveProperty("image", "@csrf");

    expect(tokens).toHaveLength(1);
});
