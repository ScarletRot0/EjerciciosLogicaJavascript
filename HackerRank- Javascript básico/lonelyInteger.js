function lonelyinteger(a) {
    let lonely = 0;

    // XOR all numbers in the array
    for (let num of a) {
        lonely ^= num;
        console.log(lonely);
    }

    return lonely;
}
let array = [4, 9, 2, 9, 2, 4, 7];
let lonelyNumber = findLonelyNumber(array);
console.log(lonelyNumber); // Output: 7