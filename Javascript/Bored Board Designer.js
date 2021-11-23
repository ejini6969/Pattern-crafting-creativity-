function generateBoard(cols, rows) {
  return Array.from({length: rows}, (_, i) => Array.from({length: cols}, (_, j) => (i + j) % 2? '#': ' ').join``).join('\n') + '\n'
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
	  assert.strictEqual(generateBoard(3,3),` # 
                                           # #
                                            # 
                                            `);
    assert.strictEqual(generateBoard(5,9), ` # # 
                                            # # #
                                             # # 
                                            # # #
                                             # # 
                                            # # #
                                             # #
                                            # # #
                                             # # 
                                          `);
	});
});

⬇️⬇️

/* Example(cols = 6, rows = 6)：
 # # #
# # # 
 # # #
# # #
 # # #
# # #
*/
