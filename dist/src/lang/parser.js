"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseBlade = exports.productions = exports.Parser = void 0;
const chevrotain_1 = require("chevrotain");
const lexer_1 = require("./lexer");
class BladeToCSTParser extends chevrotain_1.CstParser {
    constructor() {
        super(lexer_1.allTokens);
        this.blade = this.RULE("blade", () => {
            this.MANY(() => {
                this.SUBRULE(this.content);
            });
        });
        this.content = this.RULE("content", () => {
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
                    ALT: () => this.SUBRULE(this.forElseDirectiveBlock),
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
                {
                    ALT: () => this.SUBRULE(this.phpBlockDirective),
                },
            ]);
        });
        this.directive = this.RULE("directive", () => {
            this.CONSUME(lexer_1.DirectiveWithArgs);
        });
        this.endDirective = this.RULE("endDirective", () => {
            this.CONSUME(lexer_1.EndDirectiveWithArgs);
        });
        this.startDirective = this.RULE("startDirective", () => {
            this.CONSUME(lexer_1.StartDirectiveWithArgs);
        });
        this.pairDirective = this.RULE("pairDirective", () => {
            this.SUBRULE(this.startDirective, { LABEL: "startDirective" });
            this.OPTION(() => {
                this.MANY(() => {
                    this.SUBRULE(this.content);
                });
            });
            this.SUBRULE2(this.endDirective, { LABEL: "endDirective" });
        });
        this.literal = this.RULE("literal", () => {
            this.AT_LEAST_ONE(() => {
                this.CONSUME(lexer_1.Literal);
            });
        });
        this.echo = this.RULE("echo", () => {
            this.CONSUME(lexer_1.Echo);
        });
        this.rawEcho = this.RULE("rawEcho", () => {
            this.CONSUME(lexer_1.RawEcho);
        });
        this.comment = this.RULE("comment", () => {
            this.CONSUME(lexer_1.Comment);
        });
        this.escapedEcho = this.RULE("escapedEcho", () => {
            this.CONSUME(lexer_1.EscapedEcho);
        });
        this.escapedRawEcho = this.RULE("escapedRawEcho", () => {
            this.CONSUME(lexer_1.EscapedRawEcho);
        });
        this.startIfDirective = this.RULE("startIfDirective", () => {
            this.CONSUME(lexer_1.StartIfDirectiveWithArgs);
        });
        this.endIfDirective = this.RULE("endIfDirective", () => {
            this.CONSUME(lexer_1.EndIfDirectiveWithArgs);
        });
        this.elseDirective = this.RULE("elseDirective", () => {
            this.CONSUME(lexer_1.ElseDirectiveWithArgs);
        });
        this.elseIfDirective = this.RULE("elseIfDirective", () => {
            this.CONSUME(lexer_1.ElseIfDirectiveWithArgs);
        });
        this.elseBlock = this.RULE("elseBlock", () => {
            this.SUBRULE(this.elseDirective, { LABEL: "elseDirective" });
            this.OPTION(() => {
                this.MANY(() => {
                    this.SUBRULE(this.content);
                });
            });
        });
        this.elseIfBlock = this.RULE("elseIfBlock", () => {
            this.SUBRULE(this.elseIfDirective, { LABEL: "elseIfDirective" });
            this.OPTION(() => {
                this.MANY(() => {
                    this.SUBRULE(this.content);
                });
            });
        });
        this.ifDirectiveBlock = this.RULE("ifDirectiveBlock", () => {
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
                });
            });
            // Else block
            this.OPTION2(() => {
                this.SUBRULE(this.elseBlock);
            });
            this.SUBRULE(this.endIfDirective, { LABEL: "endDirective" });
        });
        this.startForElseDirective = this.RULE("startForElseDirective", () => {
            this.CONSUME(lexer_1.StartForElseDirectiveWithArgs);
        });
        this.emptyDirective = this.RULE("emptyDirective", () => {
            this.CONSUME(lexer_1.EmptyDirectiveWithoutArgs);
        });
        this.endForElseDirective = this.RULE("endForElseDirective", () => {
            this.CONSUME(lexer_1.EndForElseDirectiveWithArgs);
        });
        this.forElseDirectiveBlock = this.RULE("forElseDirectiveBlock", () => {
            this.SUBRULE(this.startForElseDirective, { LABEL: "startDirective" });
            this.OPTION(() => {
                this.MANY(() => {
                    this.SUBRULE(this.content);
                });
            });
            // Empty block
            this.OPTION2(() => {
                this.SUBRULE(this.emptyBlock);
            });
            this.SUBRULE(this.endForElseDirective, { LABEL: "endDirective" });
        });
        this.emptyBlock = this.RULE("emptyBlock", () => {
            this.SUBRULE(this.emptyDirective, { LABEL: "emptyDirective" });
            this.OPTION(() => {
                this.MANY(() => {
                    this.SUBRULE(this.content);
                });
            });
        });
        this.startVerbatimDirective = this.RULE("startVerbatimDirective", () => {
            this.CONSUME(lexer_1.StartVerbatimDirectiveWithArgs);
        });
        this.endVerbatimDirective = this.RULE("endVerbatimDirective", () => {
            this.CONSUME(lexer_1.EndVerbatimDirectiveWithArgs);
        });
        this.verbatimBlockDirective = this.RULE("verbatimBlockDirective", () => {
            this.SUBRULE(this.startVerbatimDirective, { LABEL: "startDirective" });
            this.OPTION(() => {
                this.MANY(() => {
                    this.SUBRULE(this.content);
                });
            });
            this.SUBRULE2(this.endVerbatimDirective, { LABEL: "endDirective" });
        });
        this.startPhpDirective = this.RULE("startPhpDirective", () => {
            this.CONSUME(lexer_1.StartPhpDirective);
        });
        this.endPhpDirective = this.RULE("endPhpDirective", () => {
            this.CONSUME(lexer_1.EndPhpDirective);
        });
        this.phpBlockDirective = this.RULE("phpBlockDirective", () => {
            this.SUBRULE(this.startPhpDirective, { LABEL: "startDirective" });
            this.OPTION(() => {
                this.MANY(() => {
                    this.SUBRULE(this.content);
                });
            });
            this.SUBRULE2(this.endPhpDirective, { LABEL: "endDirective" });
        });
        this.performSelfAnalysis();
    }
}
exports.Parser = new BladeToCSTParser();
exports.productions = exports.Parser.getGAstProductions();
function parseBlade(text) {
    const lexResult = lexer_1.BladeLexer.tokenize(text);
    exports.Parser.input = lexResult.tokens;
    const cst = exports.Parser.blade();
    return {
        cst: cst,
        lexErrors: lexResult.errors,
        parseErrors: exports.Parser.errors,
    };
}
exports.parseBlade = parseBlade;
