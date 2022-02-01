import {parseBlade} from "../src/lang/parser";

const parse = (source: string) => {
    const result = parseBlade(source)

    if (result.parseErrors.length > 0) {
        throw result.parseErrors[0]
    }

    return result.cst.children
};

it.todo('should parse literal only');

it.todo("should parse directives");