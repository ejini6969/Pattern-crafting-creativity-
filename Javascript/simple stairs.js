// https://www.codewars.com/kata/5b4e779c578c6a898e0005c5

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

/* Example (n = 7)：
I
 I
  I
   I
    I
     I
      I
*/
