function findMedian(arr) {
    // Step 1: Sort the array numerically
    arr.sort((a, b) => a - b);

    // Step 2: Find the middle index
    let middleIndex = Math.floor(arr.length / 2);

    // Step 3: Return the median (middle element)
    return arr[middleIndex];
}