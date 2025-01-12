function miniMaxSum(arr) {
    // Write your code here
    let sortedArray = arr.sort((a, b) => a-b);
    let minimum = sortedArray.slice(0, sortedArray.length -1).reduce((a, b) => a+b);
    let maximum = sortedArray.slice(1).reduce((a, b) => a+b);
    console.log(minimum, maximum);
}
