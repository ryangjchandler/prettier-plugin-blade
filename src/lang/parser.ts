import { CstParser, Rule } from "chevrotain";
import {
    allTokens,
    BladeLexer,
    Comment,
    DirectiveWithArgs,
    Echo, ElseDirectiveWithArgs, ElseIfDirectiveWithArgs,
    EndDirectiveWithArgs, EndIfDirectiveWithArgs, EndVerbatimDirectiveWithArgs,
    EscapedEcho,
    EscapedRawEcho,
    Literal,
    RawEcho, StartDirectiveWithArgs, StartIfDirectiveWithArgs, StartVerbatimDirectiveWithArgs,
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
                ALT: () => this.SUBRULE(this.ifDirectiveBlock),
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
            {
                ALT: () => this.SUBRULE(this.verbatimBlockDirective),
            },
        ]);
    });

    private directive = this.RULE("directive", () => {
        this.CONSUME(DirectiveWithArgs);
    });

    private endDirective = this.RULE("endDirective", () => {
        this.CONSUME(EndDirectiveWithArgs);
    });

    private startDirective = this.RULE("startDirective", () => {
        this.CONSUME(StartDirectiveWithArgs);
    });

    private pairDirective = this.RULE("pairDirective", () => {
        this.SUBRULE(this.startDirective, { LABEL: "startDirective" });
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

    private startIfDirective = this.RULE("startIfDirective", () => {
        this.CONSUME(StartIfDirectiveWithArgs)
    })

    private endIfDirective = this.RULE("endIfDirective", () => {
        this.CONSUME(EndIfDirectiveWithArgs)
    })

    private elseDirective = this.RULE("elseDirective", () => {
        this.CONSUME(ElseDirectiveWithArgs)
    })

    private elseIfDirective = this.RULE("elseIfDirective", () => {
        this.CONSUME(ElseIfDirectiveWithArgs)
    })

    private elseBlock = this.RULE("elseBlock", () => {
        this.SUBRULE(this.elseDirective, { LABEL: "elseDirective" })
        this.OPTION(() => {
            this.MANY(() => {
                this.SUBRULE(this.content);
            });
        });
    })

    private elseIfBlock = this.RULE("elseIfBlock", () => {
        this.SUBRULE(this.elseIfDirective, { LABEL: "elseIfDirective" })
        this.OPTION(() => {
            this.MANY(() => {
                this.SUBRULE(this.content);
            });
        });
    })

    private ifDirectiveBlock = this.RULE("ifDirectiveBlock", () => {
        this.SUBRULE(this.startIfDirective, { LABEL: "startDirective" });
        this.OPTION(() => {
            this.MANY(() => {
                this.SUBRULE(this.content);
            });
        });

        // Else if blocks
        this.OPTION1(() => {
            this.MANY1(() => {
                this.SUBRULE(this.elseIfBlock);
            })
        })

        // Else block
        this.OPTION2(() => {
            this.SUBRULE(this.elseBlock);
        })

        this.SUBRULE(this.endIfDirective, { LABEL: "endDirective" })
    })

    private startVerbatimDirective = this.RULE("startVerbatimDirective", () => {
        this.CONSUME(StartVerbatimDirectiveWithArgs)
    })

    private endVerbatimDirective = this.RULE("endVerbatimDirective", () => {
        this.CONSUME(EndVerbatimDirectiveWithArgs)
    })

    private verbatimBlockDirective = this.RULE("verbatimBlockDirective", () => {
        this.SUBRULE(this.startVerbatimDirective, { LABEL: "startDirective" });
        this.OPTION(() => {
            this.MANY(() => {
                this.SUBRULE(this.content);
            });
        });
        this.SUBRULE2(this.endVerbatimDirective, { LABEL: "endDirective" });
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
