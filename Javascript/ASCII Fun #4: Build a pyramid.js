function buildPyramid(str,n){
  let num = str.split(/[^a-z\d\-]/i)[0].length + 1
  return Array.from({length: n}, (_, i) => " ".repeat((n - 1) * num - num * i) + str.match(/(.)\1*/g).map(x => x.repeat(i + 1)).join``).join`\n`
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(buildPyramid("00-00..00-00",3), "            00-00..00-00\n      0000--0000....0000--0000\n000000---000000......000000---000000");
    assert.strictEqual(buildPyramid("00-00..00-00",7), "                                    00-00..00-00\n                              0000--0000....0000--0000\n                        000000---000000......000000---000000\n                  00000000----00000000........00000000----00000000\n            0000000000-----0000000000..........0000000000-----0000000000\n      000000000000------000000000000............000000000000------000000000000\n00000000000000-------00000000000000..............00000000000000-------00000000000000");
  });
});

⬇️⬇️

/* Example(7)：
                                    00-00..00-00
                              0000--0000....0000--0000
                        000000---000000......000000---000000
                  00000000----00000000........00000000----00000000
            0000000000-----0000000000..........0000000000-----0000000000
      000000000000------000000000000............000000000000------000000000000
00000000000000-------00000000000000..............00000000000000-------00000000000000"
*/
