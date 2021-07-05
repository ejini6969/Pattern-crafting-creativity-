function box(n){
 return ['-'.repeat(n)].concat(Array.from({length: n - 2}, (_, i) => '-' + ' '.repeat(n - 2) + '-')).concat(['-'.repeat(n)])
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(box(5), ["-----", "-   -", "-   -", "-   -", "-----"]);
    assert.deepEqual(box(2), ["--", "--"]);
    assert.deepEqual(box(4), ["----", "-  -", "-  -", "----"]);
    assert.deepEqual(box(6), ["------", "-    -", "-    -", "-    -", "-    -", "------"]);
    assert.deepEqual(box(3), ["---", "- -", "---"]);
  });
});

⬇️⬇️

/* Example：
[
  '-----',
  '-   -',
  '-   -',
  '-   -',
  '-----'
]
*/
