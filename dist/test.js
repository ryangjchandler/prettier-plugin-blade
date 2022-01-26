(() => {
  // src/parser/token.js
  var TokenType = {
    T_DIRECTIVE: "directive",
    T_ECHO: "echo",
    T_LITERAL: "literal",
    T_EOF: "eof"
  };
  var Token = class {
    constructor(type, raw, line) {
      this.type = type;
      this.raw = raw;
      this.line = line;
    }
    static eof() {
      return new Token(TokenType.T_EOF, "", 0);
    }
  };

  // src/parser/lexer.js
  var ctype_space = (subject) => subject.replace(/\s/g, "").length === 0;
  var Lexer = class {
    constructor(source) {
      this.source = source.replace("<?php", "@php").replace("?>", "@endphp").replace(/\r\n|\r|\n/, "\n").split("");
      this.line = 1;
      this.i = -1;
      this.tokens = [];
      this.buffer = "";
      this.previous = "";
      this.current = "";
      this.next = "";
    }
    all() {
      this.read();
      while (true) {
        if (this.i >= this.source.length) {
          break;
        }
        if (this.current === "{" && this.next === "{") {
          this.tokens.push(this.echo());
        } else if (this.current === "@" && this.next !== "@") {
          this.tokens.push(this.directive());
        } else {
          this.buffer += this.current;
          this.read();
        }
      }
      return this.tokens;
    }
    echo() {
      this.literal();
      let raw = "{{";
      this.read();
      this.read();
      while (true) {
        if (this.i >= this.source.length) {
          break;
        }
        if (this.current === "}" && this.next === "}") {
          raw += "}}";
          this.read();
          this.read();
          break;
        }
        raw += this.current;
        this.read();
      }
      return new Token(TokenType.T_ECHO, raw, this.line);
    }
    directive() {
      this.literal();
      let match = this.current;
      let hasFoundDirectiveName = false;
      let parens = 0;
      this.read();
      while (true) {
        if (this.i >= this.source.length) {
          break;
        }
        match += this.current;
        if ((this.current === "(" || ctype_space(this.current)) && !hasFoundDirectiveName) {
          hasFoundDirectiveName = true;
        }
        if (ctype_space(this.current) && (!ctype_space(this.next) || this.next !== "(")) {
          if (hasFoundDirectiveName) {
            break;
          }
          return new Token(TokenType.T_LITERAL, match, this.line);
        }
        if (hasFoundDirectiveName && this.current === "(") {
          parens++;
        }
        if (parens === 0 && [")", "\n"].includes(this.current)) {
          break;
        }
        if (this.current === ")") {
          parens--;
          if (parens === 0 && hasFoundDirectiveName) {
            this.read();
            break;
          }
        }
        this.read();
      }
      return new Token(TokenType.T_DIRECTIVE, match.trim(), this.line);
    }
    literal() {
      if (this.buffer.length > 0) {
        this.tokens.push(new Token(TokenType.T_LITERAL, this.buffer, this.line));
        this.buffer = "";
      }
    }
    read() {
      this.i += 1;
      this.previous = this.current;
      this.current = this.source[this.i] || "";
      if (this.previous === "\n") {
        this.line += 1;
      }
      if (this.i + 1 < this.source.length) {
        this.next = this.source[this.i + 1];
      }
    }
  };

  // src/parser/nodes/index.js
  var EchoNode = class {
    constructor(content, code) {
      this.content = content;
      this.code = code;
    }
    toString() {
      return `{{ ${this.code.trim()} }}`;
    }
  };
  var DirectiveNode = class {
    constructor(content, directive, code, line) {
      this.content = content;
      this.directive = directive;
      this.code = code;
      this.line = line;
    }
    toString() {
      return `@${this.directive}`;
    }
  };
  var LiteralNode = class {
    constructor(content) {
      this.content = content;
    }
    toString() {
      return this.content;
    }
  };
  var DirectivePairNode = class {
    constructor(open, close, children, line) {
      this.open = open;
      this.close = close;
      this.children = children;
    }
    toString() {
      return `${this.open.toString()}${this.children.map((child) => child.toString()).join()}${this.close.toString()}`;
    }
  };

  // src/parser/parser.js
  var STATIC_BLOCK_DIRECTIVES = [
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
    "prepend"
  ];
  var isBlockDirective = (directive) => {
    if (STATIC_BLOCK_DIRECTIVES.includes(directive.directive)) {
      return true;
    }
    if (directive.directive === "php" && !directive.code) {
      return true;
    }
    return false;
  };
  var directiveCanBeClosedBy = (open, close) => {
    return close.directive === "end" + open.directive;
  };
  var isBlockClosingDirective = (directive) => directive.directive.startsWith("end");
  var guessClosingBlockDirective = (directive) => "end".directive.directive;
  var Parser = class {
    constructor(tokens) {
      this.tokens = tokens;
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
    node() {
      if (this.current.type === TokenType.T_ECHO) {
        return this.echo();
      } else if (this.current.type === TokenType.T_DIRECTIVE) {
        return this.directive();
      } else {
        const node = new LiteralNode(this.current.raw);
        this.read();
        return node;
      }
    }
    echo() {
      const node = new EchoNode(this.current.raw, this.current.raw.substring(2, this.current.raw.length - 2).trim());
      this.read();
      return node;
    }
    directive() {
      let directiveName = this.current.raw.substring(this.current.raw.indexOf("@") + 1);
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
      const directive = new DirectiveNode(this.current.raw, directiveName, inner, this.current.line);
      this.read();
      if (!isBlockDirective(directive)) {
        return directive;
      }
      let children = [];
      let close = null;
      while (this.current.type !== TokenType.T_EOF) {
        const child = this.node();
        if (child instanceof DirectiveNode && directiveCanBeClosedBy(directive, child)) {
          close = child;
          break;
        }
        if (child instanceof DirectiveNode && isBlockClosingDirective(child)) {
          throw `Unexpected directive ${child.directive} on line ${child.line}, expected ${guessClosingBlockDirective(directive)}`;
        }
        children.push(child);
      }
      if (close === null) {
        throw `Could not find "@end..." directive for "@${directive.directive}" defined on line ${directive.line}.`;
      }
      return new DirectivePairNode(directive, close, children);
    }
    read() {
      this.i += 1;
      this.current = this.next;
      this.next = this.i >= this.tokens.length ? Token.eof() : this.tokens[this.i];
    }
  };

  // test/index.js
  console.warn("Extracting tokens and ast from:\n {{ $test }}");
  var l = new Lexer("{{ $test }}");
  var lt = l.all();
  console.log(lt);
  console.log();
  var pl = new Parser(lt);
  console.log(pl.parse());
  var js = `<h1>Cool stuff</h1><div>cool</div>
{{$test}}

@if($test)
@endif`;
  console.warn("Extracting tokens & ast from:\n" + js);
  var j = new Lexer(js);
  var jt = j.all();
  console.log(jt);
  console.log();
  var pj = new Parser(jt);
  console.log(pj.parse());
})();
