function dot(n,m){
  let border = '+---'.repeat(n) + '+'
  let centre = '| o '.repeat(n) + "|\n"
  return (border + "\n" + centre).repeat(m) + border
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(dot(1,1), "+---+\n| o |\n+---+");
    assert.strictEqual(dot(3,2), "+---+---+---+\n| o | o | o |\n+---+---+---+\n| o | o | o |\n+---+---+---+");
  });
});

⬇️⬇️

/* Example：
+---+---+---+
| o | o | o |
+---+---+---+
| o | o | o |
+---+---+---+
*/
