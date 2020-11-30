const assert = require("chai").assert;
const head = require("../head");

describe("#head", () => {
  it("returns 1 when given [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns 5 for [5]", () => {
    assert.strictEqual(head([5]), 5);
  });
  it("returns 5 for [5, 4, 3, 2, 1]", () => {
    assert.strictEqual(head([5, 4, 3, 2, 1]), 5);
  });
});