function pattern(n){
 return Array.from({length:n}, (_, i) => Array.from({length: i + 1}, (_, j) => n - j).join('')).join('\n')
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(pattern(1),"1");
    assert.strictEqual(pattern(2),"2\n21");
    assert.strictEqual(pattern(5),"5\n54\n543\n5432\n54321");
  });
});

⬇️⬇️

/* Example:
5
54
543
5432
54321
*/
