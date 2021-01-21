// 有效的数独
var isValidSudoku = function(board) {
    // 检查行
    for (let arr of board) {
        let row = [];
        for (let c of arr) {
            if (c !== '.') {
                row.push(c);
            }
        }
        let set = new Set(row);
        if (set.size !== row.length)
            return false;
    }
    // 检查列
    for (let i = 0; i < board.length; i++) {
        let col = [];
        board.map(arr => {
            if (arr[i] !== '.') {
                col.push(arr[i]);
            }
        });
        let set = new Set(col);
        if (set.size !== col.length)
            return false;
    }
    // 检查九宫格
    for (let x = 0; x < board.length; x += 3) {
        for (let y = 0; y < board[x].length; y += 3) {
            let box = [];
            for (let a = x; a < x + 3; a++) {
                for (let b = y; b < y + 3; b++) {
                    if (board[a][b] !== '.')
                        box.push(board[a][b]);
                }
            }
            let set = new Set(box);
            if (set.size !== box.length)
                return false;
        }
    }

    return true;

};
const board = [];
/*
    [".",".","4",".",".",".","6","3","."]
    [".",".",".",".",".",".",".",".","."]
    ["5",".",".",".",".",".",".","9","."]
    [".",".",".","5","6",".",".",".","."]
    ["4",".","3",".",".",".",".",".","1"]
    [".",".",".","7",".",".",".",".","."]
    [".",".",".","5",".",".",".",".","."]
    [".",".",".",".",".",".",".",".","."]
    [".",".",".",".",".",".",".",".","."]
*/
board[0] = [".", ".", "4", ".", ".", ".", "6", "3", "."];
board[1] = [".", ".", ".", ".", ".", ".", ".", ".", "."];
board[2] = ["5", ".", ".", ".", ".", ".", ".", "9", "."];
board[3] = [".", ".", ".", "5", "6", ".", ".", ".", "."];
board[4] = ["4", ".", "3", ".", ".", ".", ".", ".", "1"];
board[5] = [".", ".", ".", "7", ".", ".", ".", ".", "."];
board[6] = [".", ".", ".", "5", ".", ".", ".", ".", "."];
board[7] = [".", ".", ".", ".", ".", ".", ".", ".", "."];
board[8] = [".", ".", ".", ".", ".", ".", ".", ".", "."];

console.log(isValidSudoku(board));