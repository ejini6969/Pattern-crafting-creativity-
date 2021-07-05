function towerBuilder(nFloors, nBlockSz) {
  var maximum = nBlockSz[0] + nBlockSz[0] * 2 * (nFloors - 1)
  return [].concat(...Array.from({length: nFloors}, (_, i) => (' '.repeat((maximum - (i * nBlockSz[0] * 2 + nBlockSz[0])) / 2) + '*'.repeat(i * nBlockSz[0] * 2 + nBlockSz[0]) + ' '.repeat((maximum - (i * nBlockSz[0] * 2 + nBlockSz[0])) / 2) + '\n').repeat(nBlockSz[1]).split("\n"))).filter(x => x != '')
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
	  assert.deepEqual(JSON.stringify(towerBuilder(1, [1, 1])), JSON.stringify(["*"]));
    assert.deepEqual(JSON.stringify(towerBuilder(3, [4, 2])), JSON.stringify(['        ****        ', '        ****        ', '    ************    ', '    ************    ', '********************', '********************']));
  });
});

⬇️⬇️

/* Example(3, [2, 3])：
[
  '    **    ',
  '    **    ',
  '    **    ',
  '  ******  ',
  '  ******  ',
  '  ******  ',
  '**********',
  '**********',
  '**********'
]
*/
