import type { CstNode, ICstVisitor, IToken } from "chevrotain";

export interface BladeCstNode extends CstNode {
    name: "blade";
    children: BladeCstChildren;
}

export type BladeCstChildren = {
    content?: ContentCstNode[];
};

export interface ContentCstNode extends CstNode {
    name: "content";
    children: ContentCstChildren;
}

export type ContentCstChildren = {
    literal?: LiteralCstNode[];
    pairDirective?: PairDirectiveCstNode[];
    directive?: DirectiveCstNode[];
    ifDirectiveBlock?: IfDirectiveBlockCstNode[];
    echo?: EchoCstNode[];
    rawEcho?: RawEchoCstNode[];
    comment?: CommentCstNode[];
    escapedEcho?: EscapedEchoCstNode[];
    escapedRawEcho?: EscapedRawEchoCstNode[];
    verbatimBlockDirective?: VerbatimBlockDirectiveCstNode[];
    phpBlockDirective?: PhpBlockDirectiveCstNode[];
};

export interface DirectiveCstNode extends CstNode {
    name: "directive";
    children: DirectiveCstChildren;
}

export type DirectiveCstChildren = {
    Directive: IToken[];
};

export interface EndDirectiveCstNode extends CstNode {
    name: "endDirective";
    children: EndDirectiveCstChildren;
}

export type EndDirectiveCstChildren = {
    EndDirective: IToken[];
};

export interface StartDirectiveCstNode extends CstNode {
    name: "startDirective";
    children: StartDirectiveCstChildren;
}

export type StartDirectiveCstChildren = {
    StartDirective: IToken[];
};

export interface PairDirectiveCstNode extends CstNode {
    name: "pairDirective";
    children: PairDirectiveCstChildren;
}

export type PairDirectiveCstChildren = {
    startDirective: StartDirectiveCstNode[];
    content?: ContentCstNode[];
    endDirective: EndDirectiveCstNode[];
};

export interface LiteralCstNode extends CstNode {
    name: "literal";
    children: LiteralCstChildren;
}

export type LiteralCstChildren = {
    Literal: IToken[];
};

export interface EchoCstNode extends CstNode {
    name: "echo";
    children: EchoCstChildren;
}

export type EchoCstChildren = {
    Echo: IToken[];
};

export interface RawEchoCstNode extends CstNode {
    name: "rawEcho";
    children: RawEchoCstChildren;
}

export type RawEchoCstChildren = {
    RawEcho: IToken[];
};

export interface CommentCstNode extends CstNode {
    name: "comment";
    children: CommentCstChildren;
}

export type CommentCstChildren = {
    Comment: IToken[];
};

export interface EscapedEchoCstNode extends CstNode {
    name: "escapedEcho";
    children: EscapedEchoCstChildren;
}

export type EscapedEchoCstChildren = {
    EscapedEcho: IToken[];
};

export interface EscapedRawEchoCstNode extends CstNode {
    name: "escapedRawEcho";
    children: EscapedRawEchoCstChildren;
}

export type EscapedRawEchoCstChildren = {
    EscapedRawEcho: IToken[];
};

export interface StartIfDirectiveCstNode extends CstNode {
    name: "startIfDirective";
    children: StartIfDirectiveCstChildren;
}

export type StartIfDirectiveCstChildren = {
    StartIfDirective: IToken[];
};

export interface EndIfDirectiveCstNode extends CstNode {
    name: "endIfDirective";
    children: EndIfDirectiveCstChildren;
}

export type EndIfDirectiveCstChildren = {
    EndIfDirective: IToken[];
};

export interface ElseDirectiveCstNode extends CstNode {
    name: "elseDirective";
    children: ElseDirectiveCstChildren;
}

export type ElseDirectiveCstChildren = {
    ElseDirective: IToken[];
};

export interface ElseIfDirectiveCstNode extends CstNode {
    name: "elseIfDirective";
    children: ElseIfDirectiveCstChildren;
}

export type ElseIfDirectiveCstChildren = {
    ElseIfDirective: IToken[];
};

export interface ElseBlockCstNode extends CstNode {
    name: "elseBlock";
    children: ElseBlockCstChildren;
}

export type ElseBlockCstChildren = {
    elseDirective: ElseDirectiveCstNode[];
    content?: ContentCstNode[];
};

export interface ElseIfBlockCstNode extends CstNode {
    name: "elseIfBlock";
    children: ElseIfBlockCstChildren;
}

export type ElseIfBlockCstChildren = {
    elseIfDirective: ElseIfDirectiveCstNode[];
    content?: ContentCstNode[];
};

export interface IfDirectiveBlockCstNode extends CstNode {
    name: "ifDirectiveBlock";
    children: IfDirectiveBlockCstChildren;
}

export type IfDirectiveBlockCstChildren = {
    startDirective: StartIfDirectiveCstNode[];
    content?: ContentCstNode[];
    elseIfBlock?: ElseIfBlockCstNode[];
    elseBlock?: ElseBlockCstNode[];
    endDirective: EndIfDirectiveCstNode[];
};

export interface StartVerbatimDirectiveCstNode extends CstNode {
    name: "startVerbatimDirective";
    children: StartVerbatimDirectiveCstChildren;
}

export type StartVerbatimDirectiveCstChildren = {
    StartVerbatimDirective: IToken[];
};

export interface EndVerbatimDirectiveCstNode extends CstNode {
    name: "endVerbatimDirective";
    children: EndVerbatimDirectiveCstChildren;
}

export type EndVerbatimDirectiveCstChildren = {
    EndVerbatimDirective: IToken[];
};

export interface VerbatimBlockDirectiveCstNode extends CstNode {
    name: "verbatimBlockDirective";
    children: VerbatimBlockDirectiveCstChildren;
}

export type VerbatimBlockDirectiveCstChildren = {
    startDirective: StartVerbatimDirectiveCstNode[];
    content?: ContentCstNode[];
    endDirective: EndVerbatimDirectiveCstNode[];
};

export interface StartPhpDirectiveCstNode extends CstNode {
    name: "startPhpDirective";
    children: StartPhpDirectiveCstChildren;
}

export type StartPhpDirectiveCstChildren = {
    StartPhpDirective: IToken[];
};

export interface EndPhpDirectiveCstNode extends CstNode {
    name: "endPhpDirective";
    children: EndPhpDirectiveCstChildren;
}

export type EndPhpDirectiveCstChildren = {
    EndPhpDirective: IToken[];
};

export interface PhpBlockDirectiveCstNode extends CstNode {
    name: "verbatimBlockDirective";
    children: PhpBlockDirectiveCstChildren;
}

export type PhpBlockDirectiveCstChildren = {
    startDirective: StartPhpDirectiveCstNode[];
    content?: ContentCstNode[];
    endDirective: EndPhpDirectiveCstNode[];
};

export interface ICstNodeVisitor<IN, OUT> extends ICstVisitor<IN, OUT> {
    blade(children: BladeCstChildren, param?: IN): OUT;
    content(children: ContentCstChildren, param?: IN): OUT;
    directive(children: DirectiveCstChildren, param?: IN): OUT;
    endDirective(children: EndDirectiveCstChildren, param?: IN): OUT;
    startDirective(children: StartDirectiveCstChildren, param?: IN): OUT;
    pairDirective(children: PairDirectiveCstChildren, param?: IN): OUT;
    literal(children: LiteralCstChildren, param?: IN): OUT;
    echo(children: EchoCstChildren, param?: IN): OUT;
    rawEcho(children: RawEchoCstChildren, param?: IN): OUT;
    comment(children: CommentCstChildren, param?: IN): OUT;
    escapedEcho(children: EscapedEchoCstChildren, param?: IN): OUT;
    escapedRawEcho(children: EscapedRawEchoCstChildren, param?: IN): OUT;
    startIfDirective(children: StartIfDirectiveCstChildren, param?: IN): OUT;
    endIfDirective(children: EndIfDirectiveCstChildren, param?: IN): OUT;
    elseDirective(children: ElseDirectiveCstChildren, param?: IN): OUT;
    elseIfDirective(children: ElseIfDirectiveCstChildren, param?: IN): OUT;
    elseBlock(children: ElseBlockCstChildren, param?: IN): OUT;
    elseIfBlock(children: ElseIfBlockCstChildren, param?: IN): OUT;
    ifDirectiveBlock(children: IfDirectiveBlockCstChildren, param?: IN): OUT;
    startVerbatimDirective(
        children: StartVerbatimDirectiveCstChildren,
        param?: IN
    ): OUT;
    endVerbatimDirective(
        children: EndVerbatimDirectiveCstChildren,
        param?: IN
    ): OUT;
    verbatimBlockDirective(
        children: VerbatimBlockDirectiveCstChildren,
        param?: IN
    ): OUT;
}
