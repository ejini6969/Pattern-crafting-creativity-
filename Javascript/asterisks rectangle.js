function getRectangleString(width, height) {
  if(width < 2 || height < 2) 
    return `*\r\n`.repeat(height)
  const side = `${'*'.repeat(width)}` 
  const middle = Array.from({length: height - 2}, (_, i) => `*${' '.repeat(width - 2)}*`).join`\r\n`
  return ([side, middle, side].join`\r\n` + "\r\n").replace(/(\r\n)\1+/g, "\r\n")
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(getRectangleString(3, 3), "***\r\n" +
                                               "* *\r\n" +
                                               "***\r\n)
  });
});

⬇️⬇️

/* Example：
***
* *
***
*/
