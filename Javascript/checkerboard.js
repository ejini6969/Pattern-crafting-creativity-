// https://www.codewars.com/kata/53dc08fa8a0c93229400023b

function checkerboard (size) {
  return size <= 0 ? '' : Array.from({length : size}, (_, i) => Array.from({length : size}, (_, j) => (i + j) % 2 ? '[b]' : '[r]').join``).join('\n') + '\n'
};

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(checkerboard(0), "");
    assert.strictEqual(checkerboard(5), "[r][b][r][b][r]\n[b][r][b][r][b]\n[r][b][r][b][r]\n[b][r][b][r][b]\n[r][b][r][b][r]\n");
    assert.strictEqual(checkerboard(8), "[r][b][r][b][r][b][r][b]\n[b][r][b][r][b][r][b][r]\n[r][b][r][b][r][b][r][b]\n[b][r][b][r][b][r][b][r]\n[r][b][r][b][r][b][r][b]\n[b][r][b][r][b][r][b][r]\n[r][b][r][b][r][b][r][b]\n[b][r][b][r][b][r][b][r]\n");
  });
});

⬇️⬇️

/* Example (size = 8)：
[r][b][r][b][r][b][r][b]
[b][r][b][r][b][r][b][r]
[r][b][r][b][r][b][r][b]
[b][r][b][r][b][r][b][r]
[r][b][r][b][r][b][r][b]
[b][r][b][r][b][r][b][r]
[r][b][r][b][r][b][r][b]
[b][r][b][r][b][r][b][r]
*/
