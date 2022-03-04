import { placeholderElement } from "../src/utils";

describe("placeholderElement", () => {
    it("has a minimum length", () => {
        let content = "{{1}}";
        let placeHolder = placeholderElement("foo", content);

        expect(content.length).toBeLessThan(placeHolder.length);
        expect(placeHolder).toMatch(/<foo-\d \/>/);
    });

    it("pads output to match length of content", () => {
        let content = "{{ $thisHasLength22 }}";
        let placeHolder = placeholderElement("foo", content);

        expect(content.length).toBe(placeHolder.length);
        expect(placeHolder).toMatch(/<foo-\d-x+ \/>/);
    });
});
