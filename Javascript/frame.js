const frame = (text, char) => {
 let l = Math.max(...text.map(x => x.length))
 return `${char.repeat(l + 4)}\n` + text.map(x => `${char} ${x}${' '.repeat(l - x.length)} ${char}`).join('\n') + '\n' + `${char.repeat(l + 4)}`
};

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(frame(['Small','frame'], '~'), '~~~~~~~~~\n~ Small ~\n~ frame ~\n~~~~~~~~~');
    assert.strictEqual(frame(['Create','this','kata'], '+'), '++++++++++\n+ Create +\n+ this   +\n+ kata   +\n++++++++++');
    assert.strictEqual(frame(['This is a very long single frame'], '-'), '------------------------------------\n- This is a very long single frame -\n------------------------------------');
  });
});

⬇️⬇️

/* Example(text = ['Create', 'a', 'frame'], char = '+')：
++++++++++
+ Create +
+ a      +
+ frame  +
++++++++++
*/
