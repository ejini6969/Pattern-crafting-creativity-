// https://www.codewars.com/kata/56c30eaef85696bf35000ccf

function christmasTree(height){
  if(height < 3) return ""
  const max = 5 + 2 * (~~(height / 3) - 1)
  return Array.from({length: ~~(height / 3)}, function(_, i){
    const l = i * 2 + 1
    return Array.from({length: 3}, (_, j) => " ".repeat((max - 1) / 2 - j - i) + "*".repeat(j * 2 + l)).join("\r\n")
  }).join("\r\n")  + `\r\n${" ".repeat((max - 3) / 2)}###`
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(christmasTree(5),"  *\r\n ***\r\n*****\r\n ###");
    assert.strictEqual(christmasTree(10),"    *\r\n   ***\r\n  *****\r\n   ***\r\n  *****\r\n *******\r\n  *****\r\n *******\r\n*********\r\n   ###");
    assert.strictEqual(christmasTree(8),"   *\r\n  ***\r\n *****\r\n  ***\r\n *****\r\n*******\r\n  ###");
    assert.strictEqual(christmasTree(2),"");
  });
});

⬇️⬇️

/* Example (height = 17):
      *
     ***
    *****
     ***
    *****
   *******
    *****
   *******
  *********
   *******
  *********
 ***********
  *********
 ***********
*************
     ###     
*/
