console.log('running ')

import { Lexer } from "../src/parser/lexer"

console.warn('Extracting tokens from:\n {{ $test }}');

const l = new Lexer('{{ $test }}')
console.log(l.all())
console.log()

console.warn('Extracting tokens from:\n @php @endphp');

const j = new Lexer('@php @endphp')
console.log(j.all())