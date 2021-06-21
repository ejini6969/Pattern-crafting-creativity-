function draw(n){
  let top = `${n % 2 == 1 ? " " : ""}${"　".repeat((n + 2) / 2 | 0)}●`
  let middle = Array.from({length: n}, (_, i) => `${(n - i - 1) % 2 == 1 ? " " : ""}${"　".repeat((n - i - 1) / 2 | 0)}.◢${"█".repeat(i + 1)}◣.`).join`\n`
  let bottom = `${n % 2 == 1 ? " " : "　"}${"︸".repeat(Math.ceil(n / 2))}█${"︸".repeat(Math.ceil(n / 2))}`
  return [top, middle, bottom].join`\n`
}

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
