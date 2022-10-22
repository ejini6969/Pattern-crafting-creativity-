// https://www.codewars.com/kata/5939b753942a2700860000df

function buildAWall(x = 0, y = 0) {
  if(![x, y].every(n => typeof n == "number" && n >= 1 && n % 1 == 0)) return null
  else if(x * y > 10000) return "Naah, too much...here's my resignation."
  return Array.from({length: x}, (_, i) => i % 2 ? `■${"|■■".repeat(y - 1)}|■` : Array(y).fill("■■").join`|`).reverse().join`\n`
}

const Test = require('@codewars/test-compat');

describe("Basic tests", function() {
  it("Should return wall as string", function() {
    Test.assertEquals(buildAWall(4, 5), "■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■\n■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■");
    Test.assertEquals(buildAWall(10, 7), "■|■■|■■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■|■■|■■\n■|■■|■■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■|■■|■■\n■|■■|■■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■|■■|■■\n■|■■|■■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■|■■|■■\n■|■■|■■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■|■■|■■");
  });
  it("Should return null", function() {
    Test.assertEquals(buildAWall(), null);
    Test.assertEquals(buildAWall('eight', [3]), null);
    Test.assertEquals(buildAWall(12, -4), null);
    Test.assertEquals(buildAWall(0, 9), null);
  });
  it(`Should return "Naah, too much...here's my resignation."`, function() {
    Test.assertEquals(buildAWall(123, 987), "Naah, too much...here's my resignation.");
  });
});

⬇️⬇️
/* Example (x = 10, y = 7)：
■|■■|■■|■■|■■|■■|■■|■
■■|■■|■■|■■|■■|■■|■■
■|■■|■■|■■|■■|■■|■■|■
■■|■■|■■|■■|■■|■■|■■
■|■■|■■|■■|■■|■■|■■|■
■■|■■|■■|■■|■■|■■|■■
■|■■|■■|■■|■■|■■|■■|■
■■|■■|■■|■■|■■|■■|■■
■|■■|■■|■■|■■|■■|■■|■
■■|■■|■■|■■|■■|■■|■■
*/
