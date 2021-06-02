function pattern(n){
 return Array.from({length: Math.floor(n / 2)}, (_, i) => String(i * 2 + 2).repeat(i * 2 + 2)).join('\n')
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(pattern(2),"22");
    assert.strictEqual(pattern(1),"");
    assert.strictEqual(pattern(5),"22\n4444");
    assert.strictEqual(pattern(0),"");
    assert.strictEqual(pattern(-25),"");
    assert.strictEqual(pattern(8),"22\n4444\n666666\n88888888");
  });
});

⬇️⬇️

/* Example:
22
4444
666666
88888888
*/
