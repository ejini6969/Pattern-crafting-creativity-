function chessBoard(rows, columns) {
  return Array.from({length: rows}, (_, i) => Array.from({length:columns}, (_, j) => (i + j) % 2 == 1 ? "X" : "O"))
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(hessBoard(1, 1),[["O"]])
    assert.deepEqual(chessBoard(1, 2),[["O","X"]])
    assert.deepEqual(chessBoard(2, 1),[["O"],["X"]])
    assert.deepEqual(chessBoard(2, 2),[["O","X"],["X","O"]])
    assert.deepEqual(chessBoard(6, 6),[['O','X','O','X','O','X'],['X','O','X','O','X','O'],['O','X','O','X','O','X'],['X','O','X','O','X','O'],['O','X','O','X','O','X'],['X','O','X','O','X','O']])
  });
});

⬇️⬇️

/* Example (rows = 3, columns = 7)：
[
    ["O","X","O","X","O","X","O"],
    ["X","O","X","O","X","O","X"],
    ["O","X","O","X","O","X","O"]
]
*/
