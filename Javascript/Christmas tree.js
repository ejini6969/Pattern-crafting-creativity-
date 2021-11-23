function christmasTree(height) {
  return Array.from({length : height}, (_, i) => ' '.repeat(height - i - 1) + '*'.repeat(i * 2 + 1) + ' '.repeat(height - i - 1)).join("\n")
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(christmasTree(0), "");
    assert.strictEqual(christmasTree(1), "*");
    assert.strictEqual(christmasTree(5), "    *    \n   ***   \n  *****  \n ******* \n*********");
    assert.strictEqual(christmasTree(8), "       *       \n      ***      \n     *****     \n    *******    \n   *********   \n  ***********  \n ************* \n***************");
  });
});

⬇️⬇️

/* Example (n = 5):
    *    
   ***   
  *****  
 ******* 
*********
*/
