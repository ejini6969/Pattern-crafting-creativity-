function drawStairs(n) {
 return Array.from({length: n}, (_, i) => ' '.repeat(i) + 'I').join('\n')
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(drawStairs(1), "I");
    assert.strictEqual(drawStairs(3), "I\n I\n  I");
    assert.strictEqual(drawStairs(5), "I\n I\n  I\n   I\n    I");
  });
});

⬇️⬇️

/* Exampl(7)e：
I
 I
  I
   I
    I
     I
      I
*/
