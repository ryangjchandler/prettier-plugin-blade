import { Lexer, Parser, Nodes } from './parser/index'
import { format, doc, } from 'prettier';
import html from 'prettier/parser-html'

const tw = require('prettier-plugin-tailwindcss')

const languages = [
    {
        name: 'Blade',
        parsers: ['blade'],
        aceMode: 'html',
        extensions: ['.blade.php'],
        vscodeLanguageIds: ['blade'],
    }
]

const parsers = {
    'blade': {
        parse: function (text) {
            const lexer = new Lexer(text)
            const tokens = lexer.all()

            return new Parser(tokens).parse()
        },
        astFormat: 'blade',
        preprocess: function (text) {
            return [
                t => format(t, { parser: 'html', plugins: [{ parsers: { html: tw.parsers.html } }] }),
            ].reduce((t, callback) => callback(t), text)
        },
    },
}

const printers = {
    blade: {
        print: function (path, options, print) {
            const node = path.getValue()

            if (Array.isArray(node)) {
                return path.map(print)
            }

            return node ? node.toDoc() : ''
        }
    }
}

module.exports = {
    languages,
    parsers,
    printers
}