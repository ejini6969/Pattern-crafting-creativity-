function unionJack(x) {
  if(typeof x != "number") return false
  x = Math.max(7, Math.ceil(x))
  let n = ~~((x - 1) / 2)
  let side = Array.from({length: n}, (_, i) => `${"-".repeat(i)}X${"-".repeat(n - i - 1)}${"X".repeat(x % 2 ? 1 : 2)}${"-".repeat(n - i - 1)}X${"-".repeat(i)}`).join`\n`
  return `${side}\n${("X".repeat(x) + "\n").repeat(x % 2 ? 1 : 2)}${side.split("\n").reverse().join("\n")}`
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(unionJack(7), 'X--X--X\n-X-X-X-\n--XXX--\nXXXXXXX\n--XXX--\n-X-X-X-\nX--X--X');
    assert.strictEqual(unionJack(8), 'X--XX--X\n-X-XX-X-\n--XXXX--\nXXXXXXXX\nXXXXXXXX\n--XXXX--\n-X-XX-X-\nX--XX--X')
  });
});

⬇️⬇️

/* Example(9)：
"X---X---X
-X--X--X-
--X-X-X--
---XXX---
XXXXXXXXX
---XXX---
--X-X-X--
-X--X--X-
X---X---X"

Example(10):
'X---XX---X
-X--XX--X-
--X-XX-X--
---XXXX---
XXXXXXXXXX
XXXXXXXXXX
---XXXX---
--X-XX-X--
-X--XX--X-
X---XX---X'
*/
