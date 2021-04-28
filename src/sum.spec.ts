import { sum } from "./sum";
import assert from "assert";

describe("sum", () => {

    it("2 + 2", () => {
        const actual = sum(2, 2);
        assert.strictEqual(actual, 4);
    });

});