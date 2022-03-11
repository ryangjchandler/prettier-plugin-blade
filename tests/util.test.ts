import { placeholderElement, placeholderString } from "../src/utils";

describe("placeholderElement", () => {
    it("has a minimum length", () => {
        let content = "{{1}}";
        let placeHolder = placeholderElement("foo", content);

        expect(content.length).toBeLessThan(placeHolder.length);
        expect(placeHolder).toMatch(/<foo-. \/>/);
    });

    it("pads output to match length of content", () => {
        let content = "{{ $thisHasLength22 }}";
        let placeHolder = placeholderElement("foo", content);

        expect(placeHolder.length).toBe(content.length);
        expect(placeHolder).toMatch(/<foo-.-x+ \/>/);
    });
});

describe("placeholderString", () => {
    it("has a minimum length", () => {
        let content = "1";
        let placeHolder = placeholderString("foo", content);

        expect(content.length).toBeLessThan(placeHolder.length);
        expect(placeHolder).toMatch(/__foo_./);
    });

    it("pads output to match length of content", () => {
        let content = "{{ $thisHasLength22 }}";
        let placeHolder = placeholderString("foo", content);

        expect(placeHolder.length).toBe(content.length);
        expect(placeHolder).toMatch(/__foo_._x+/);
    });
});
