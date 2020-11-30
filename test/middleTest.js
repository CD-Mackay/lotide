const assert = require('chai').assert;
const middle = require("../middle");
describe("#middle", () => {
  it("should return the middle element when given odd numbered arrays", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("should return TWO middle elements when given an array of even length", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
    assert.deepEqual(middle([1, 2, 3, "6"]), [2, 3]);
  });
  it("should return an empty array given an array of 2 elements or less", () => {
    assert.deepEqual(middle([1]), []);
    assert.deepEqual(middle(["hello", "world"]), []);
  })
})