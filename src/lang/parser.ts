import { TokenType, Token } from "./token";
import * as Nodes from "./nodes";
import {
  DirectiveNode,
  DirectivePairNode,
  EchoNode,
  LiteralNode,
  Node,
  EchoType,
  CommentNode,
} from "./nodes";

const STATIC_BLOCK_DIRECTIVES = [
  "if",
  "for",
  "foreach",
  "forelse",
  "unless",
  "while",
  "isset",
  "empty",
  "auth",
  "guest",
  "production",
  "env",
  "hasSection",
  "sectionMissing",
  "switch",
  "once",
  "verbatim",
  "error",
  "push",
  "prepend",
];

const isBlockDirective = (directive: DirectiveNode) => {
  if (STATIC_BLOCK_DIRECTIVES.includes(directive.directive)) {
    return true;
  }

  if (directive.directive === "php" && !directive.code) {
    return true;
  }

  // Support for custom directives?
  return false;
};

const directiveCanBeClosedBy = (open: DirectiveNode, close: DirectiveNode) => {
  return close.directive === "end" + open.directive;
};

const isBlockClosingDirective = (directive: DirectiveNode) =>
  directive.directive.startsWith("end");
const guessClosingBlockDirective = (directive: DirectiveNode) =>
  "end" + directive.directive;

export class Parser {
  private nodes: Node[];
  private current: Token;
  private next: Token;
  private i: number;
  constructor(private tokens: Token[]) {
    this.tokens.push(Token.eof());

    this.nodes = [];
    this.current = Token.eof();
    this.next = Token.eof();
    this.i = -1;
  }

  parse() {
    this.read();
    this.read();

    while (this.current.type !== TokenType.T_EOF) {
      this.nodes.push(this.node());
    }

    return this.nodes;
  }

  node(): Node {
    if (this.current.type === TokenType.T_ECHO) {
      return this.echo();
    } else if (this.current.type === TokenType.T_RAW_ECHO) {
      return this.rawEcho();
    } else if (this.current.type === TokenType.T_DIRECTIVE) {
      return this.directive();
    } else if (this.current.type === TokenType.T_COMMENT) {
      return this.comment();
    } else {
      const node = new Nodes.LiteralNode(this.current.raw);
      this.read();

      return node;
    }
  }

  echo(): EchoNode {
    const node = new Nodes.EchoNode(
      this.current.raw,
      this.current.raw.substring(2, this.current.raw.length - 2).trim(),
      EchoType.Escaped
    );
    this.read();

    return node;
  }

  comment(): CommentNode {
    const node = new Nodes.CommentNode(
      this.current.raw,
      this.current.raw.substring(4, this.current.raw.length - 4).trim()
    );
    this.read();

    return node;
  }

  rawEcho(): EchoNode {
    const node = new Nodes.EchoNode(
      this.current.raw,
      this.current.raw.substring(3, this.current.raw.length - 3).trim(),
      EchoType.Raw
    );
    this.read();

    return node;
  }

  directive(): DirectiveNode | DirectivePairNode {
    let directiveName = this.current.raw.substring(
      this.current.raw.indexOf("@") + 1
    );

    if (directiveName.includes("(")) {
      directiveName = directiveName.substring(0, directiveName.indexOf("("));
    }

    let inner = this.current.raw.replace("@" + directiveName, "");
    if (inner.startsWith("(")) {
      inner = inner.substring(1);
    }

    if (inner.endsWith(")")) {
      inner = inner.substring(0, inner.length - 1);
    }

    const directive = new Nodes.DirectiveNode(
      this.current.raw,
      directiveName,
      inner,
      this.current.line
    );

    this.read();

    if (!isBlockDirective(directive)) {
      return directive;
    }

    let children = [];
    let close = null;

    while (this.current.type !== TokenType.T_EOF) {
      const child = this.node();

      if (
        child instanceof Nodes.DirectiveNode &&
        directiveCanBeClosedBy(directive, child)
      ) {
        close = child;
        break;
      }

      if (
        child instanceof Nodes.DirectiveNode &&
        isBlockClosingDirective(child)
      ) {
        throw new Error(`Unexpected directive ${child.directive} on line ${
          child.line
        }, expected ${guessClosingBlockDirective(directive)}`);
      }

      children.push(child);
    }

    if (close === null) {
      throw new Error(`Could not find "@end..." directive for "@${directive.directive}" defined on line ${directive.line}.`);
    }

    return new Nodes.DirectivePairNode(directive, close, children);
  }

  read() {
    this.i += 1;
    this.current = this.next;
    this.next =
      this.i >= this.tokens.length ? Token.eof() : this.tokens[this.i];
  }
}
