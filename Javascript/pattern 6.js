// https://www.codewars.com/kata/5574940eae1cf7d520000076

function pattern(n){
 return Array.from({length: Math.ceil(n / 2)}, (_, i) => String(i * 2 + 1).repeat(i * 2 + 1)).join('\n')
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(pattern(4),"1\n333");
    assert.strictEqual(pattern(1),"1");
    assert.strictEqual(pattern(5),"1\n333\n55555");
    assert.strictEqual(pattern(0),"");
    assert.strictEqual(pattern(-25),"");
    assert.strictEqual(pattern(9),"1\n333\n55555\n7777777\n999999999");
  });
});

⬇️⬇️

/* Example: (n = 9)
1
333
55555
7777777
999999999
*/
