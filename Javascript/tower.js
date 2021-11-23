function towerBuilder(nFloors) {
  return Array.from({length: nFloors}, (_, i) => ' '.repeat(nFloors - i - 1) + '*'.repeat(i * 2 + 1) +  ' '.repeat(nFloors - i - 1))
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(towerBuilder(1), ["*"]);
    assert.deepEqual(towerBuilder(2), [" * ","***"]);
    assert.deepEqual(towerBuilder(3), ["  *  "," *** ","*****"]);
  });
});

⬇️⬇️

/* Example (nFloors = 3)：
[
  '  *  ', 
  ' *** ', 
  '*****'
]
*/
