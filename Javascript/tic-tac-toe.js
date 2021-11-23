function displayBoard(board, width){
  return ` ${Array.from({length: board.length / width}, (_, i) => board.slice(i * width, i * width + width).join(' | ')).join(` \n${"-".repeat(width * 4 - 1)}\n `)} `
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(displayBoard(["O", "X", "X", "O"],2)," O | X \n-------\n X | O ");
    assert.deepEqual(displayBoard(["O", "X", " ", " ", "X", " ", "X", "O", " "],3)," O | X |   \n-----------\n   | X |   \n-----------\n X | O |   ");
    assert.deepEqual(displayBoard(["O", "X", " ", " ", "X", " ", "X", "O", " ", "O"],5)," O | X |   |   | X \n-------------------\n   | X | O |   | O ");
    assert.deepEqual(displayBoard(["O", "X", " ", " ", "X", " ", "X", "O", " ", "O"],2)," O | X \n-------\n   |   \n-------\n X |   \n-------\n X | O \n-------\n   | O ");
    assert.deepEqual(displayBoard(["1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1"],6)," 1 | 2 | 3 | 4 | 5 | 1 \n-----------------------\n 2 | 3 | 4 | 5 | 1 | 2 \n-----------------------\n 3 | 4 | 5 | 1 | 2 | 3 \n-----------------------\n 4 | 5 | 1 | 2 | 3 | 4 \n-----------------------\n 5 | 1 | 2 | 3 | 4 | 5 \n-----------------------\n 1 | 2 | 3 | 4 | 5 | 1 ");
  });
});

⬇️⬇️

/* Example (board = ["O", "X", " ", " ", "X", " ", "X", "O", " ", "O"], width = 5)：
 O | X |   |   | X 
-------------------
   | X | O |   | O 
*/
