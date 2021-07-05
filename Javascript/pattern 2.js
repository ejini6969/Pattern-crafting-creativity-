function pattern(n){
 return Array.from({length:n}, (_, i) => Array.from({length: n - i}, (_, j) => n - j).join('')).join('\n')
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(pattern(1),"1");
    assert.strictEqual(pattern(2),"21\n2");
    assert.strictEqual(pattern(5),"54321\n5432\n543\n54\n5");
  });
});

⬇️⬇️

/* Example：
54321
5432
543
54
5
*/
