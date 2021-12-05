// https://www.codewars.com/kata/584e8bba044a15d3ed00016c

function mobileDisplay(n,p){
  n = Math.max(20, n)
  p = Math.max(30, p)
  let prop = (n * p / 100) | 0
  let boarder = "*".repeat(n)
  let upper = Array((prop - 4) / 2 | 0).fill(`*${" ".repeat(n - 2)}*`).join`\n`
  let middle = `*${" ".repeat((n - 10) / 2 | 0)}CodeWars${" ".repeat(Math.ceil((n - 10) / 2))}*`
  let lower = Array(Math.ceil((prop - 4) / 2)).fill(`*${" ".repeat(n - 2)}*`).join`\n`
  let menus = `* Menu${" ".repeat(n - 16)}Contacts *`
  return [boarder, upper, middle, lower, menus, boarder].join`\n`.replace(/(\n)\1+/g, "\n")
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(mobileDisplay(20,31), "********************\n*                  *\n*     CodeWars     *\n*                  *\n* Menu    Contacts *\n********************");
    assert.strictEqual(mobileDisplay(27,41), "***************************\n*                         *\n*                         *\n*                         *\n*        CodeWars         *\n*                         *\n*                         *\n*                         *\n*                         *\n* Menu           Contacts *\n***************************");
  });
});

⬇️⬇️

/* Example (n = 27, p = 41)：
"***************************
 *                         *
 *                         *
 *                         *
 *        CodeWars         *
 *                         *
 *                         *
 *                         *
 *                         *
 * Menu           Contacts *
 ***************************"
*/
