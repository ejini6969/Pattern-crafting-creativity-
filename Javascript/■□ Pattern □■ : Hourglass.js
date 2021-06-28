function draw(n){
  const l = ~~(n / 2)
  const arr = Array.from({length: l}, (_, i) => `${"　".repeat(i)}${"■"}${"∷".repeat(l * 2 - 1 - i * 2)}${"■"}${"　".repeat(i)}`)
  return [`${"■".repeat(n)}`, `${arr[0]}`, `${arr.join`\n`}`, `${"　".repeat(l)}${"■"}${"　".repeat(l)}`, `${arr.slice().reverse().join`\n`}`, `${arr[0]}`, `${"■".repeat(n)}`].join`\n`
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(draw(5),"■■■■■\n"+
                               "■∷∷∷■\n"+
                               "■∷∷∷■\n"+
                               "　■∷■　\n"+
                               "　　■　　\n"+
                               "　■∷■　\n"+
                               "■∷∷∷■\n"+
                               "■∷∷∷■\n"+
                               "■■■■■";);
    assert.strictEqual(draw(7),"■■■■■■■\n"+
                               "■∷∷∷∷∷■\n"+
                               "■∷∷∷∷∷■\n"+
                               "　■∷∷∷■　\n"+
                               "　　■∷■　　\n"+
                               "　　　■　　　\n"+
                               "　　■∷■　　\n"+
                               "　■∷∷∷■　\n"+
                               "■∷∷∷∷∷■\n"+
                               "■∷∷∷∷∷■\n"+
                               "■■■■■■■";
                                  );
    assert.strictEqual(draw(9),"■■■■■■■■■\n"+
                               "■∷∷∷∷∷∷∷■\n"+
                               "■∷∷∷∷∷∷∷■\n"+
                               "　■∷∷∷∷∷■　\n"+
                               "　　■∷∷∷■　　\n"+
                               "　　　■∷■　　　\n"+
                               "　　　　■　　　　\n"+
                               "　　　■∷■　　　\n"+
                               "　　■∷∷∷■　　\n"+
                               "　■∷∷∷∷∷■　\n"+
                               "■∷∷∷∷∷∷∷■\n"+
                               "■∷∷∷∷∷∷∷■\n"+
                               "■■■■■■■■■";);
  });
});

⬇️⬇️

/* Example:
■■■■■■■
■∷∷∷∷∷■
■∷∷∷∷∷■
　■∷∷∷■　
　　■∷■　　
　　　■　　　
　　■∷■　　
　■∷∷∷■　
■∷∷∷∷∷■
■∷∷∷∷∷■
■■■■■■■
*/
