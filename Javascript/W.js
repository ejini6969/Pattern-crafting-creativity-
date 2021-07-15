function getW(height) {
  if(height < 2) return []
  const top = [`*${" ".repeat(height * 2 - 3)}*${" ".repeat(height * 2 - 3)}*`]
  const middle = Array.from({length: height - 2}, function(x, i){
  const s = `${" ".repeat(i + 1)}*${" ".repeat((height - 2) * 2 - 1 - i * 2)}*`
  return `${s}${" ".repeat(i * 2 + 1)}${[...s].reverse().join("")}`
  })
  const bottom = [`${" ".repeat(height - 1)}*${" ".repeat(height * 2 - 3)}*${" ".repeat(height - 1)}`]
  return top.concat(middle).concat(bottom)
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(getW(-5),[]);
    assert.deepEqual(getW(1),[]);
    assert.deepEqual(getW(3), [
                                  "*   *   *", 
                                  " * * * * ", 
                                  "  *   *  "
                                ]);
   assert.deepEqual(getW(7),[
                                "*           *           *",
                                " *         * *         * ",
                                "  *       *   *       *  ",
                                "   *     *     *     *   ",
                                "    *   *       *   *    ",
                                "     * *         * *     ",
                                "      *           *      "
                               ]);
  });
});

⬇️⬇️

/* Example(5)：
[
'*       *       *',
' *     * *     * ',
'  *   *   *   *  ',
'   * *     * *   ',
'    *       *    '
]
*/
