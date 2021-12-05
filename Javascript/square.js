// https://www.codewars.com/kata/59a96d71dbe3b06c0200009c

function generateShape(int){
  return Array(int).fill('+'.repeat(int)).join('\n')
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(generateShape(8) , '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++' )
  });
});

⬇️⬇️

/* Example (int = 8)：
++++++++
++++++++
++++++++
++++++++
++++++++
++++++++
++++++++
++++++++
*/
