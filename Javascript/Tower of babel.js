function babel(height) {
  return Array.from({length: height}, (_, i) => `${" ".repeat(height - i - 1)}${"o".repeat(2 * i + 1)}\n`.repeat(3)).join``.replace(/\n$/, "")
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(babel(0), ``);
    assert.strictEqual(babel(1), `o
                                  o
                                  o`);
    assert.strictEqual(babel(2), ` o
                                   o
                                   o
                                  ooo
                                  ooo
                                  ooo`);
    assert.strictEqual(babel(3), ` o
                                   o
                                   o
                                  ooo
                                  ooo
                                  ooo
                                 ooooo
                                 ooooo
                                 ooooo`);
    assert.strictEqual(babel(4), `   o
                                     o
                                     o
                                    ooo
                                    ooo
                                    ooo
                                   ooooo
                                   ooooo
                                   ooooo
                                  ooooooo
                                  ooooooo
                                  ooooooo`);
   assert.strictEqual(babel(5), `    o
                                     o
                                     o
                                    ooo
                                    ooo
                                    ooo
                                   ooooo
                                   ooooo
                                   ooooo
                                  ooooooo
                                  ooooooo
                                  ooooooo
                                 ooooooooo
                                 ooooooooo
                                 ooooooooo`); 
  });
});

⬇️⬇️

/* Example (height = 4)：
   o
   o
   o
  ooo
  ooo
  ooo
 ooooo
 ooooo
 ooooo
ooooooo
ooooooo
ooooooo
*/
