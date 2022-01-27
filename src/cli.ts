import { Lexer, Parser } from "./lang"
import { DirectiveNode, DirectivePairNode, Node } from "./lang/nodes"
import chalk from "chalk"
import { format } from 'prettier'
const tw = require('prettier-plugin-tailwindcss')

const INPUT = `
<div>
    @if($test)Hello, world!
    @endif

    @foreach($items as $item)
Here is some super long content that will probably overflow because of the HTML formatter
    @endforeach
</div>
`

const toBeReplaced: Map<string, string> = new Map;
const toBeRemoved: string[] = [];

console.warn(chalk.yellow.underline('The input is:\n') + INPUT)

const ast = (source: string): Node[] => {
    return new Parser(new Lexer(source).all()).parse()
}

const convertDirectivePairToFakeHtml = (pair: DirectivePairNode): string => {
    let reconstructed = ''

    const openOpenTag = `<blade-pair-open-${pair.getId()}>`
    const openCloseTag = `</blade-pair-open-${pair.getId()}>`

    toBeReplaced.set(openOpenTag, pair.open.toString())
    toBeRemoved.push(openCloseTag)

    reconstructed += openOpenTag + "\n"
    let hasPushedCloseOpenTag = false

    pair.children.forEach((child: Node) => {
        if (child instanceof DirectivePairNode) {
            reconstructed += convertDirectivePairToFakeHtml(child)
        } else if (child instanceof DirectiveNode && pair.arms.includes(child)) {
            // TODO: Handle outputting the arms here.
            // We basically need to keep a stack and recursively call this same loop.
            // If we encounter a valid arm for the directive pair, we need to check if we're already inside of another arm,
            // close that arm and start a new arm for the next directive.
        } else {
            reconstructed += child.toString().trim()
        }
    })

    if (! hasPushedCloseOpenTag) {
        reconstructed += "\n" + openCloseTag
    }

    const closeOpenTag = `<blade-pair-close-${pair.getId()}>`
    const closeCloseTag = `</blade-pair-close-${pair.getId()}>`

    toBeReplaced.set(closeOpenTag, pair.close.toString())
    toBeRemoved.push(closeCloseTag)

    reconstructed += "\n" + closeOpenTag + "\n"
    reconstructed += "\n" + closeCloseTag

    return reconstructed.trim()
}

let html = ''
let tree = ast(INPUT)

console.log(chalk.yellow.underline('The AST is:\n'), tree)

tree.forEach((node: Node) => {
    if (node instanceof DirectivePairNode) {
        html += convertDirectivePairToFakeHtml(node)
    } else {
        html += node.toString()
    }
})

console.log(chalk.yellow.underline('The pre-formatted HTML is:\n') + html)

const formattedHtml = format(html, { parser: 'html', plugins: [tw], tabWidth: 4 })

console.log(chalk.yellow.underline('The formatted HTML is:\n') + formattedHtml)