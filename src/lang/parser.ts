import {CstParser, Rule} from "chevrotain";
import {allTokens, BladeLexer, Comment, DirectiveWithArgs, Echo, Literal, RawEcho} from "./lexer";

class BladeParser extends CstParser {
    constructor() {
        super(allTokens);
        this.performSelfAnalysis()
    }

    public blade = this.RULE("blade", () => {
        this.MANY(() => {
            this.OR([
                {
                    ALT: () => this.SUBRULE(this.literal)
                },
                {
                    ALT: () => this.SUBRULE(this.directive)
                },
                {
                    ALT: () => this.SUBRULE(this.echo)
                },
                {
                    ALT: () => this.SUBRULE(this.rawEcho)
                },
                {
                    ALT: () => this.SUBRULE(this.comment)
                }
            ])
        })
    })

    private directive = this.RULE("directive", () => {
        this.CONSUME(DirectiveWithArgs)
    })

    private literal = this.RULE("literal", () => {
        this.AT_LEAST_ONE(() => {
            this.CONSUME(Literal)
        })
    })

    private echo = this.RULE("echo", () => {
        this.CONSUME(Echo)
    })

    private rawEcho = this.RULE("rawEcho", () => {
        this.CONSUME(RawEcho)
    })

    private comment = this.RULE("comment", () => {
        this.CONSUME(Comment)
    })
}



export const Parser = new BladeParser()

export const productions: Record<string, Rule> = Parser.getGAstProductions()

export function parseBlade(text: string) {
    const lexResult = BladeLexer.tokenize(text)
    Parser.input = lexResult.tokens
    const cst = Parser.blade()

    return {
        cst: cst,
        lexErrors: lexResult.errors,
        parseErrors: Parser.errors
    }
}