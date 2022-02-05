import { CstParser, Rule } from "chevrotain";
import {
    allTokens,
    BladeLexer,
    Comment,
    DirectiveWithArgs,
    Echo,
    EndDirectiveWithArgs,
    EscapedEcho,
    EscapedRawEcho,
    Literal,
    RawEcho,
} from "./lexer";

class BladeToCSTParser extends CstParser {
    constructor() {
        super(allTokens);
        this.performSelfAnalysis();
    }

    public blade = this.RULE("blade", () => {
        this.MANY(() => {
            this.SUBRULE(this.content);
        });
    });

    private content = this.RULE("content", () => {
        this.OR([
            {
                ALT: () => this.SUBRULE(this.literal),
            },
            {
                ALT: () => this.SUBRULE(this.pairDirective),
            },
            {
                ALT: () => this.SUBRULE(this.directive),
            },
            {
                ALT: () => this.SUBRULE(this.echo),
            },
            {
                ALT: () => this.SUBRULE(this.rawEcho),
            },
            {
                ALT: () => this.SUBRULE(this.comment),
            },
            {
                ALT: () => this.SUBRULE(this.escapedEcho),
            },
            {
                ALT: () => this.SUBRULE(this.escapedRawEcho),
            },
        ]);
    });

    private directive = this.RULE("directive", () => {
        this.CONSUME(DirectiveWithArgs);
    });

    private endDirective = this.RULE("endDirective", () => {
        this.CONSUME(EndDirectiveWithArgs);
    });

    private pairDirective = this.RULE("pairDirective", () => {
        this.SUBRULE(this.directive, { LABEL: "startDirective" });
        this.OPTION(() => {
            this.MANY(() => {
                this.SUBRULE(this.content);
            });
        });
        this.SUBRULE2(this.endDirective, { LABEL: "endDirective" });
    });

    private literal = this.RULE("literal", () => {
        this.AT_LEAST_ONE(() => {
            this.CONSUME(Literal);
        });
    });

    private echo = this.RULE("echo", () => {
        this.CONSUME(Echo);
    });

    private rawEcho = this.RULE("rawEcho", () => {
        this.CONSUME(RawEcho);
    });

    private comment = this.RULE("comment", () => {
        this.CONSUME(Comment);
    });

    private escapedEcho = this.RULE("escapedEcho", () => {
        this.CONSUME(EscapedEcho);
    });

    private escapedRawEcho = this.RULE("escapedRawEcho", () => {
        this.CONSUME(EscapedRawEcho);
    });
}

export const Parser = new BladeToCSTParser();

export const productions: Record<string, Rule> = Parser.getGAstProductions();

export function parseBlade(text: string) {
    const lexResult = BladeLexer.tokenize(text);
    Parser.input = lexResult.tokens;
    const cst = Parser.blade();

    return {
        cst: cst,
        lexErrors: lexResult.errors,
        parseErrors: Parser.errors,
    };
}
