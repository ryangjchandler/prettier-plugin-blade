import { Lexer } from "../src/parser/lexer"
import { Parser } from "../src/parser/parser"

console.warn('Extracting tokens and ast from:\n {{ $test }}');

const l = new Lexer('{{ $test }}')
const lt = l.all()
console.log(lt)
console.log()

const pl = new Parser(lt)
console.log(pl.parse())

const js = `<h1>Cool stuff</h1><div>cool</div>
{{$test}}

@if($test)
@endif`

console.warn('Extracting tokens & ast from:\n' + js);

const j = new Lexer(js)
const jt = j.all()
console.log(jt)
console.log()

const pj = new Parser(jt)
console.log(pj.parse())