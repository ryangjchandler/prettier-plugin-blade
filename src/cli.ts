import { ArgumentParser } from 'argparse'
import { readFileSync } from 'fs'
import { format } from '../tests/utils'

const parser = new ArgumentParser({
    description: 'A small command-line tool to test the Blade plugin on fixture files.',
    add_help: true,
})

parser.add_argument('file', { help: 'The file to format.' })

const args = parser.parse_args()
const [original, _] = readFileSync(args.file, 'utf-8')
    .split("----")
    .map((part) => part.trimStart());

process.stdout.write(format(original))
