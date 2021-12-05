// https://www.codewars.com/kata/59c03f175fb13337df00002e

function makeAWindow(num) {
 let side = `|${'.'.repeat(num)}|${'.'.repeat(num)}|\n`.repeat(num)
 let centre = `|${'-'.repeat(num)}+${'-'.repeat(num)}|\n`
 return '-'.repeat(num * 2 + 3) + '\n' + side + centre + side + '-'.repeat(num * 2 + 3) + '\n'
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(makeAWindow(3), "---------\n|...|...|\n|...|...|\n|...|...|\n|---+---|\n|...|...|\n|...|...|\n|...|...|\n---------");
  });
});

⬇️⬇️

/* Example (num = 3)：
---------
|...|...|
|...|...|
|...|...|
|---+---|
|...|...|
|...|...|
|...|...|
---------
*/
