function diagonalDifference(arr) {
    let leftsum=0;
    let rightsum=0;
    for (let i=0; i<arr.length ; i++){
        leftsum+=arr[i][i];
        rightsum+=arr[i][arr.length-i-1];
    }
    return Math.abs(leftsum - rightsum);

}
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
];

console.log(diagonalDifference(matrix)); // Output: 2