function draw(n){
  const top = Array.from({length: ~~(n / 6)},  (_, i) => `${"█".repeat(n)}`).join`\n`
  const body = Array.from({length: n / 2}, (_, i) => `${"　".repeat(i)}◥${"█".repeat(n - 2 - 2 * i)}◤${"　".repeat(i)}`).join`\n`
  return [`◢${"█".repeat((n - 6) / 2 + 1)}◣◢${"█".repeat((n - 6) / 2 + 1)}◣`, top, body].join`\n`
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(draw(6), "◢█◣◢█◣\n"+
                                "██████\n"+
                                "◥████◤\n"+
                                "　◥██◤　\n"+
                                "　　◥◤　　");
    assert.strictEqual(draw(10), "◢███◣◢███◣\n"+
                                 "██████████\n"+
                                 "◥████████◤\n"+
                                 "　◥██████◤　\n"+
                                 "　　◥████◤　　\n"+
                                 "　　　◥██◤　　　\n"+
                                 "　　　　◥◤　　　　");
    assert.strictEqual(draw(12), "◢████◣◢████◣\n"+
                                 "████████████\n"+
                                 "████████████\n"+
                                 "◥██████████◤\n"+
                                 "　◥████████◤　\n"+
                                 "　　◥██████◤　　\n"+
                                 "　　　◥████◤　　　\n"+
                                 "　　　　◥██◤　　　　\n"+
                                 "　　　　　◥◤　　　　　");
    assert.strictEqual(draw(18), "◢███████◣◢███████◣\n"+
                                 "██████████████████\n"+
                                 "██████████████████\n"+
                                 "██████████████████\n"+
                                 "◥████████████████◤\n"+
                                 "　◥██████████████◤　\n"+
                                 "　　◥████████████◤　　\n"+
                                 "　　　◥██████████◤　　　\n"+
                                 "　　　　◥████████◤　　　　\n"+
                                 "　　　　　◥██████◤　　　　　\n"+
                                 "　　　　　　◥████◤　　　　　　\n"+
                                 "　　　　　　　◥██◤　　　　　　　\n"+
                                 "　　　　　　　　◥◤　　　　　　　　");            
  });
});
