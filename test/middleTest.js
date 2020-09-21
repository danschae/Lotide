const middle = require("../middle");
const assert = require("chai").assert;


describe("#middle", () => {
  it("should return [3]", () => {
    const array = [1,2,3,4,5]
    assert.deepEqual(middle(array), [3]);
  });

  it("should return [3,4]", () => {
    const array = [1,2,3,4,5,6];
    assert.deepEqual(middle(array), [3,4]);
  });

});
