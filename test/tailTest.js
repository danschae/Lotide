const tail = require("../tail");
const assert = require("chai").assert;



describe("#tail", () => {
  it("returns chill, Labs", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words), [ 'Lighthouse', 'Labs' ]);
  });

  it("returns Lighthouse, Labs", () => {
    const words = ["Yo Yo", "chill", "Labs"];
    assert.deepEqual(tail(words), [ 'chill', 'Labs' ]);
  });

});
