function pattern(n){
 let a = Array.from({length:n},(_, i) => i + 1)
 return Array.from({length: n}, (_, i) => a.slice(i).concat(a.slice(0, i)).join('')).join('\n')
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(pattern(7),"1234567\n2345671\n3456712\n4567123\n5671234\n6712345\n7123456");
    assert.strictEqual(pattern(1),"1");
    assert.strictEqual(pattern(4),"1234\n2341\n3412\n4123");
    assert.strictEqual(pattern(0),"");
    assert.strictEqual(pattern(-25),"");
    assert.strictEqual(pattern(9),"123456789\n234567891\n345678912\n456789123\n567891234\n678912345\n789123456\n891234567\n912345678");
  });
});

⬇️⬇️

/* Example (n = 9):
123456789
234567891
345678912
456789123
567891234
678912345
789123456
891234567
912345678
*/
