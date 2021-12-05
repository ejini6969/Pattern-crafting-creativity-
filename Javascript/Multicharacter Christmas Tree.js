// https://www.codewars.com/kata/5a405ba4e1ce0e1d7800012e

function customChristmasTree(chars,n){
  chars = chars.padEnd(n * (n + 1) / 2, chars)
  let tree = Array.from({length: n}, (_, i) => `${" ".repeat(n - i - 1)}${chars.split("").slice(i * (i + 1) / 2 | 0, (i + 1) * (i + 2) / 2 | 0).join(" ")}`).join`\n` 
  let trunk = `${" ".repeat(n - 1)}|\n`.repeat((n / 3) | 0).replace(/\n$/, "")
  return tree + "\n" + trunk
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(customChristmasTree("*@o",3),
                                          `  *
                                           @ o
                                          * @ o
                                            |`));
    assert.strictEqual(customChristmasTree("*@o",6),
                                        `     *
                                            @ o
                                           * @ o
                                          * @ o *
                                         @ o * @ o
                                        * @ o * @ o
                                             |
                                             |`);
    assert.strictEqual(customChristmasTree("1234",6),
                                        `     1
                                            2 3
                                           4 1 2
                                          3 4 1 2
                                         3 4 1 2 3
                                        4 1 2 3 4 1
                                             |
                                             |`));
  });
});

⬇️⬇️

/* Example (chars = "*@o", n = 6):
     *
    @ o
   * @ o
  * @ o *
 @ o * @ o
* @ o * @ o
     |
     |
*/
