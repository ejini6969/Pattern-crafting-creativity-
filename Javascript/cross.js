function drawACross(n) {
  if(n < 3) return "Not possible to draw cross for grids less than 3x3!"
  if(n % 2 == 0) return 'Centered cross not possible!'
  const side = Array.from({length: ~~(n / 2)}, (_, i) => ' '.repeat(i) + 'x' + ' '.repeat(n - 2 * (i + 1)) + 'x' + ' '.repeat(i))
  return `${side.join("\n")}\n${' '.repeat(~~(n / 2)) + 'x' + ' '.repeat(~~(n / 2)) + "\n"}${side.reverse().join("\n")}`
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(drawACross(7), 'x     x\n x   x \n  x x  \n   x   \n  x x  \n x   x \nx     x', 'Should draw a centered cross in a grid of height and width n!')
    assert.strictEqual(drawACross(15), 'x             x\n x           x \n  x         x  \n   x       x   \n    x     x    \n     x   x     \n      x x      \n       x       \n      x x      \n     x   x     \n    x     x    \n   x       x   \n  x         x  \n x           x \nx             x', 'Should draw a centered cross in a grid of height and width n!')
    assert.strictEqual(drawACross(25), 'x                       x\n x                     x \n  x                   x  \n   x                 x   \n    x               x    \n     x             x     \n      x           x      \n       x         x       \n        x       x        \n         x     x         \n          x   x          \n           x x           \n            x            \n           x x           \n          x   x          \n         x     x         \n        x       x        \n       x         x       \n      x           x      \n     x             x     \n    x               x    \n   x                 x   \n  x                   x  \n x                     x \nx                       x', 'Should draw a centered cross in a grid of height and width n!')
    assert.strictEqual(drawACross(6), 'Centered cross not possible!', 'If a centred cross is not possible, display the correct error message!')
    assert.strictEqual(drawACross(10), 'Centered cross not possible!', 'If a centred cross is not possible, display the correct error message!')
    assert.strictEqual(drawACross(2), 'Not possible to draw cross for grids less than 3x3!', 'Numbers less than three should return the correct error message')
  });
});

⬇️⬇️

/* Example (n = 7)：
x     x
 x   x 
  x x  
   x   
  x x  
 x   x 
x     x
*/
 
