// https://www.codewars.com/kata/5572f7c346eb58ae9c000047

function pattern(n){
 return Array.from({length: n}, (_, i) => String(i + 1).repeat(i + 1)).join('\n')
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(pattern(1),"1");
    assert.strictEqual(pattern(2),"1\n22");
    assert.strictEqual(pattern(5),"1\n22\n333\n4444\n55555");
  });
});

⬇️⬇️

/* Example (n = 5)：
1
22
333
4444
55555
*/
