// https://www.codewars.com/kata/56e67d6166d442121800074c

function draw(waves){
  const l = Math.max(...waves)
  let arr = waves.map(x => "■".repeat(x).padStart(l, "□"))
  return [...arr[0]].map((_, i) => arr.map((_, j) => arr[j][i]).join``).join("\n")
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(draw([1,2,3,4]),"□□□■\n"+
                                       "□□■■\n"+
                                       "□■■■\n"+
                                       "■■■■");
    assert.strictEqual(draw([1,2,3,3,2,1]),"□□■■□□\n"+
                                           "□■■■■□\n"+
                                           "■■■■■■");
    assert.strictEqual(draw([1,2,3,3,2,1,1,2,3,4,5,6,7]),"□□□□□□□□□□□□■\n"+
                                                         "□□□□□□□□□□□■■\n"+
                                                         "□□□□□□□□□□■■■\n"+
                                                         "□□□□□□□□□■■■■\n"+
                                                         "□□■■□□□□■■■■■\n"+
                                                         "□■■■■□□■■■■■■\n"+
                                                         "■■■■■■■■■■■■■");
    assert.strictEqual(draw([5,3,1,2,4,6,5,4,2,3,5,2,1]),"□□□□□■□□□□□□□\n"+
                                                         "■□□□□■■□□□■□□\n"+
                                                         "■□□□■■■■□□■□□\n"+
                                                         "■■□□■■■■□■■□□\n"+
                                                         "■■□■■■■■■■■■□\n"+
                                                         "■■■■■■■■■■■■■");
    assert.strictEqual(draw([1,0,1,0,1,0,1,0]),"■□■□■□■□");
    });
});

⬇️⬇️

/* Example (waves = [1,2,3,3,2,1,1,2,3,4,5,6,7]):
□□□□□□□□□□□□■
□□□□□□□□□□□■■
□□□□□□□□□□■■■
□□□□□□□□□■■■■
□□■■□□□□■■■■■
□■■■■□□■■■■■■
■■■■■■■■■■■■■
*/
