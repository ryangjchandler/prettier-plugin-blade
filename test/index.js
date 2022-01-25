import { Lexer } from "../src/parser/lexer"
import { Parser } from "../src/parser/parser"

console.warn('Extracting tokens and ast from:\n {{ $test }}');

const l = new Lexer('{{ $test }}')
const lt = l.all()
console.log(lt)
console.log()

const pl = new Parser(lt)
console.log(pl.parse())

console.warn('Extracting tokens & ast from:\n @php @endphp');

const j = new Lexer('@php @endphp')
const jt = j.all()
console.log(jt)
console.log()

const pj = new Parser(jt)
console.log(pj.parse())