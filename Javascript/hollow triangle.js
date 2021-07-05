function hollowTriangle(n){
  let num = n - 2
  let first = [`${"_".repeat(n - 1)}#${"_".repeat(n - 1)}`]
  let middle = Array.from({length: num}, (_, i) => `${"_".repeat(num - i)}#${"_".repeat(i * 2 + 1)}#${"_".repeat(num - i)}`)
  let last = ["#".repeat(n * 2 - 1)]
  return n == 1 ? first : first.concat(middle).concat(last)
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(hollowTriangle(2),['_#_', '###']);
    assert.deepEqual(hollowTriangle(4),['___#___', '__#_#__', '_#___#_', '#######']);
    assert.deepEqual(hollowTriangle(6),['_____#_____', '____#_#____', '___#___#___', '__#_____#__', '_#_______#_', '###########']);
    assert.deepEqual(hollowTriangle(1),['#']);
    assert.deepEqual(hollowTriangle(3),['__#__', '_#_#_', '#####']);
  });
});

⬇️⬇️

/* Example(6)：
['_____#_____', 
 '____#_#____', 
 '___#___#___', 
 '__#_____#__', 
 '_#_______#_', 
 '###########']
*/
