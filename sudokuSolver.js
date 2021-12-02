// 37. Sudoku Solver
// Hard

// Write a program to solve a Sudoku puzzle by filling the empty cells.

// A sudoku solution must satisfy all of the following rules:

//     Each of the digits 1-9 must occur exactly once in each row.
//     Each of the digits 1-9 must occur exactly once in each column.
//     Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.

// The '.' character indicates empty cells.

// Example 1:

// Input: 
board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
// Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
// Explanation: The input board is shown above and the only valid solution is shown below:

var solveSudoku = board => {
    function isValidSudoku(row, col, char) {
        for (let i=0; i<9; i++) {
            if (board[row][i] === char) return false
        }
        for (let i=0; i<9; i++) {
            if(board[i][col] === char) return false
        }
        let x = Math.floor(row/3) * 3
        let y = Math.floor(col/3) * 3

        for (let i=0; i < 3; i++) {
            for (let j=0; j<3; j++) {
                if (board[x+i][y+j] === char) return false
            }
        }
        return true
    }

    function sudoku(board) {
        for (let i=0; i<9; i++) {
            for (let j=0; j<9; j++) {
                if (board[i][j] === '.') {
                    let char = '1'
                    while(char <= 9) {
                        if (isValidSudoku(i, j, char)) {
                            board[i][j] = char;
                            if (sudoku(board)) return true
                            else board[i][j] = '.'
                        }
                        char = (parseInt(char) +1).toString()
                    }
                    return false
                }
            }
        }
        return true
    }
    return sudoku(board)
}

console.log(solveSudoku(board))