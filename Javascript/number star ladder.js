// https://www.codewars.com/kata/5631213916d70a0979000066

function pattern(n){
 return '1\n' + Array.from({length: n - 1}, (_, i) => `1${'*'.repeat(i + 1)}${i + 2}`).join('\n')
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(pattern(3),"1\n1*2\n1**3");
    assert.strictEqual(pattern(7),"1\n1*2\n1**3\n1***4\n1****5\n1*****6\n1******7");
    assert.strictEqual(pattern(20),"1\n1*2\n1**3\n1***4\n1****5\n1*****6\n1******7\n1*******8\n1********9\n1*********10\n1**********11\n1***********12\n1************13\n1*************14\n1**************15\n1***************16\n1****************17\n1*****************18\n1******************19\n1*******************20");
  });
});

⬇️⬇️

/* Example (n = 10)：
1
1*2
1**3
1***4
1****5
1*****6
1******7
1*******8
1********9
1*********10
*/
