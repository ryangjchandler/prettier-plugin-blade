import { allFilesIn, format, readFile } from "./utils";
import { join } from "path";

allFilesIn(join(__dirname, '/', '__fixtures__')).forEach(file => {
    const fixture = file.replace(join(__dirname, '/', '__fixtures__', '/'), '')

    test(fixture, () => {
        const [original, expected] = readFile(file).split('----').map(part => part.trimStart())

        expect(format(original)).toEqual(expected)
    })
})
