var rotate = function(matrix) {
    // 沿着右下对角线对折
    for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < matrix.length - x; y++) {
            let temp = matrix[x][y];
            matrix[x][y] = matrix[matrix.length - 1 - y][matrix.length - 1 - x];
            matrix[matrix.length - 1 - y][matrix.length - 1 - x] = temp;
        }
    }
    // 沿着水平中线对折
    for (let x = 0; x < matrix.length / 2; x++) {
        for (let y = 0; y < matrix[x].length; y++) {
            let temp = matrix[x][y];
            matrix[x][y] = matrix[matrix.length - 1 - x][y];
            matrix[matrix.length - 1 - x][y] = temp;
        }
    }
    return matrix;
};
matrix = [];
/*
    [ 5, 1, 9,11]
    [ 2, 4, 8,10]
    [13, 3, 6, 7]
    [15,14,12,16] 
*/
matrix[0] = [5, 1, 9, 11];
matrix[1] = [2, 4, 8, 10];
matrix[2] = [13, 3, 6, 7];
matrix[3] = [15, 14, 12, 16];

console.log(rotate(matrix));