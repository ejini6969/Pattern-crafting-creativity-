function stairs(n){
  return Array.from({length: n}, (_, i) => `${" ".repeat((n - i - 1) * 4)}${Array.from({length: i + 1}, (_, j) => (j + 1) % 10).join` `} ${Array.from({length: i + 1}, (_, j) => (i + 1 - j) % 10).join` `}`).join("\n")
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
	  assert.strictEqual(stairs(3),"        1 1\n    1 2 2 1\n1 2 3 3 2 1");
    assert.strictEqual(stairs(7),"                        1 1\n                    1 2 2 1\n                1 2 3 3 2 1\n            1 2 3 4 4 3 2 1\n        1 2 3 4 5 5 4 3 2 1\n    1 2 3 4 5 6 6 5 4 3 2 1\n1 2 3 4 5 6 7 7 6 5 4 3 2 1")
  });
});

⬇️⬇️

/* Example(12)：
                                            1 1
                                        1 2 2 1
                                    1 2 3 3 2 1
                                1 2 3 4 4 3 2 1
                            1 2 3 4 5 5 4 3 2 1
                        1 2 3 4 5 6 6 5 4 3 2 1
                    1 2 3 4 5 6 7 7 6 5 4 3 2 1
                1 2 3 4 5 6 7 8 8 7 6 5 4 3 2 1
            1 2 3 4 5 6 7 8 9 9 8 7 6 5 4 3 2 1
        1 2 3 4 5 6 7 8 9 0 0 9 8 7 6 5 4 3 2 1
    1 2 3 4 5 6 7 8 9 0 1 1 0 9 8 7 6 5 4 3 2 1
1 2 3 4 5 6 7 8 9 0 1 2 2 1 0 9 8 7 6 5 4 3 2 1
*/
