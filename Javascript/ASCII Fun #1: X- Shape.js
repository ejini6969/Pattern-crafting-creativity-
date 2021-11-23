function x(n){
  return Array.from({length : n}, (_, i) => Array.from({length : n}, (_, j) => i == j || i == n - j - 1 ? '■' : '□').join``).join("\n")
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(x(3), "■□■\n□■□\n■□■");
    assert.strictEqual(x(5), "■□□□■\n□■□■□\n□□■□□\n□■□■□\n■□□□■");
  });
});

⬇️⬇️

/* Example (n = 3)：
■□■
□■□
■□■
*/
