function countZeros(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Check if the middle element is 1
        if (arr[mid] === 1) {
            // Move to the right half
            left = mid + 1;
        } else {
            // Move to the left half (including the current mid)
            right = mid;
        }
    }

    // The 'left' pointer now points to the first occurrence of 1 meeting 0
    return arr.length - left;
}

// module.exports = countZeroes