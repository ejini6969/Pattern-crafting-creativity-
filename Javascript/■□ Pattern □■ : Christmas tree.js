// https://www.codewars.com/kata/56e8f0d5b131af66ec00018e

function draw(n){
  let top = `${n % 2 == 1 ? " " : ""}${"　".repeat((n + 2) / 2 | 0)}●`
  let middle = Array.from({length: n}, (_, i) => `${(n - i - 1) % 2 == 1 ? " " : ""}${"　".repeat((n - i - 1) / 2 | 0)}.◢${"█".repeat(i + 1)}◣.`).join`\n`
  let bottom = `${n % 2 == 1 ? " " : "　"}${"︸".repeat(Math.ceil(n / 2))}█${"︸".repeat(Math.ceil(n / 2))}`
  return [top, middle, bottom].join`\n`
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(pattern(3)," 　　●\n"+
                                  "　.◢█◣.\n"+
                                  " .◢██◣.\n"+
                                  ".◢███◣.\n"+
                                  " ︸︸█︸︸";);
    assert.strictEqual(pattern(5)," 　　　●\n"+
                                  "　　.◢█◣.\n"+
                                  " 　.◢██◣.\n"+
                                  "　.◢███◣.\n"+
                                  " .◢████◣.\n"+
                                  ".◢█████◣.\n"+
                                  " ︸︸︸█︸︸︸";);
    assert.strictEqual(pattern(8),"　　　　　●\n"+
			          " 　　　.◢█◣.\n"+
				  "　　　.◢██◣.\n"+
				  " 　　.◢███◣.\n"+
				  "　　.◢████◣.\n"+
				  " 　.◢█████◣.\n"+
				  "　.◢██████◣.\n"+
				  " .◢███████◣.\n"+
				  ".◢████████◣.\n"+
                                  "　︸︸︸︸█︸︸︸︸";);
    assert.strictEqual(pattern(16),"　　　　　　　　　●\n"+
                                   " 　　　　　　　.◢█◣.\n"+
                                   "　　　　　　　.◢██◣.\n"+
                                   " 　　　　　　.◢███◣.\n"+
                                   "　　　　　　.◢████◣.\n"+
                                   " 　　　　　.◢█████◣.\n"+
                                   "　　　　　.◢██████◣.\n"+
                                   " 　　　　.◢███████◣.\n"+
                                   "　　　　.◢████████◣.\n"+
                                   " 　　　.◢█████████◣.\n"+
                                   "　　　.◢██████████◣.\n"+
                                   " 　　.◢███████████◣.\n"+
                                   "　　.◢████████████◣.\n"+
                                   " 　.◢█████████████◣.\n"+
                                   "　.◢██████████████◣.\n"+
                                   " .◢███████████████◣.\n"+
                                   ".◢████████████████◣.\n"+
                                   "　︸︸︸︸︸︸︸︸█︸︸︸︸︸︸︸︸";;); 
  });  
});
