function pattern(n){
  let side = Array.from({length: n - 1}, (_, i) => `${' '.repeat(n - 1)}${(i + 1) % 10}`)
  let center = Array.from({length: n - 1}, (_, i) => (i + 1) % 10)
  return side.join('\n') + `\n${center.join``}${n % 10}${center.reverse().join``}\n` + side.reverse().join('\n') + '\n'
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(pattern(3),"  1\n  2\n12321\n  2\n  1\n");
    assert.strictEqual(pattern(6),"     1\n     2\n     3\n     4\n     5\n12345654321\n     5\n     4\n     3\n     2\n     1\n");
    assert.strictEqual(pattern(10),"         1\n         2\n         3\n         4\n         5\n         6\n         7\n         8\n         9\n1234567890987654321\n         9\n         8\n         7\n         6\n         5\n         4\n         3\n         2\n         1\n");
    assert.strictEqual(pattern(21),"                    1\n                    2\n                    3\n                    4\n                    5\n                    6\n                    7\n                    8\n                    9\n                    0\n                    1\n                    2\n                    3\n                    4\n                    5\n                    6\n                    7\n                    8\n                    9\n                    0\n12345678901234567890109876543210987654321\n                    0\n                    9\n                    8\n                    7\n                    6\n                    5\n                    4\n                    3\n                    2\n                    1\n                    0\n                    9\n                    8\n                    7\n                    6\n                    5\n                    4\n                    3\n                    2\n                    1\n");
  });
});

⬇️⬇️

/* Example: (12)
             1
             2
             3
             4
             5
             6
             7
             8
             9
             0
             1
  12345678901210987654321
             1
             0
             9
             8
             7
             6
             5
             4
             3
             2
             1
*/
