// https://www.codewars.com/kata/581c894633b9fe465d0000a6

function board(size) {
  return Array.from({length: size}, (_, i) => Array.from({length: size}, (_, j) => (i + j) % 2? ' ': '#').join``).join('\n')
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(board(5), "# # #\n # # \n# # #\n # # \n# # #\n");
    assert.strictEqual(board(11), "# # # # # #\n # # # # # \n# # # # # #\n # # # # # \n# # # # # #\n # # # # # \n# # # # # #\n # # # # # \n# # # # # #\n # # # # # \n# # # # # #\n");
  });
});

⬇️⬇️

/* Example (size = 5)：
# # #
 # #
# # #
 # #
# # #
*/
