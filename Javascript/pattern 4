function pattern(n){
 return Array.from({length:n}, (_, i) => Array.from({length: n - i}, (_, j) => j + i + 1).join('')).join('\n')
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
	assert.strictEqual(pattern(1),"1");
	assert.strictEqual(pattern(2),"12\n2");
	assert.strictEqual(pattern(5),"12345\n2345\n345\n45\n5");
  });
});

⬇️⬇️

/* Example:
12345
2345
345
45
5
*/
