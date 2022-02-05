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
    echo?: EchoCstNode[];
    rawEcho?: RawEchoCstNode[];
    comment?: CommentCstNode[];
    escapedEcho?: EscapedEchoCstNode[];
    escapedRawEcho?: EscapedRawEchoCstNode[];
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

export interface PairDirectiveCstNode extends CstNode {
    name: "pairDirective";
    children: PairDirectiveCstChildren;
}

export type PairDirectiveCstChildren = {
    startDirective: DirectiveCstNode[];
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

export interface ICstNodeVisitor<IN, OUT> extends ICstVisitor<IN, OUT> {
    blade(children: BladeCstChildren, param?: IN): OUT;
    content(children: ContentCstChildren, param?: IN): OUT;
    directive(children: DirectiveCstChildren, param?: IN): OUT;
    endDirective(children: EndDirectiveCstChildren, param?: IN): OUT;
    pairDirective(children: PairDirectiveCstChildren, param?: IN): OUT;
    literal(children: LiteralCstChildren, param?: IN): OUT;
    echo(children: EchoCstChildren, param?: IN): OUT;
    rawEcho(children: RawEchoCstChildren, param?: IN): OUT;
    comment(children: CommentCstChildren, param?: IN): OUT;
    escapedEcho(children: EscapedEchoCstChildren, param?: IN): OUT;
    escapedRawEcho(children: EscapedRawEchoCstChildren, param?: IN): OUT;
}
