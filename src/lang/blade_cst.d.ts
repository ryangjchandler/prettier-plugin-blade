import type { CstNode, ICstVisitor, IToken } from "chevrotain";

export interface BladeCstNode extends CstNode {
    name: "blade";
    children: BladeCstChildren;
}

export type BladeCstChildren = {
    literal?: LiteralCstNode[];
    directive?: DirectiveCstNode[];
    echo?: EchoCstNode[];
    rawEcho?: RawEchoCstNode[];
    comment?: CommentCstNode[];
};

export interface DirectiveCstNode extends CstNode {
    name: "directive";
    children: DirectiveCstChildren;
}

export type DirectiveCstChildren = {
    Directive: IToken[];
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

export interface ICstNodeVisitor<IN, OUT> extends ICstVisitor<IN, OUT> {
    blade(children: BladeCstChildren, param?: IN): OUT;
    directive(children: DirectiveCstChildren, param?: IN): OUT;
    literal(children: LiteralCstChildren, param?: IN): OUT;
    echo(children: EchoCstChildren, param?: IN): OUT;
    rawEcho(children: RawEchoCstChildren, param?: IN): OUT;
    comment(children: CommentCstChildren, param?: IN): OUT;
}