function findRotatedIndex(arr, target) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal === target) {
            return middleIdx;
        }

        if (arr[leftIdx] <= middleVal) {
            // Left half is sorted
            if (target >= arr[leftIdx] && target < middleVal) {
                rightIdx = middleIdx - 1;
            } else {
                leftIdx = middleIdx + 1;
            }
        } else {
            // Right half is sorted
            if (target > middleVal && target <= arr[rightIdx]) {
                leftIdx = middleIdx + 1;
            } else {
                rightIdx = middleIdx - 1;
            }
        }
    }

    return -1;
}

// module.exports = findRotatedIndex
// expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)).toBe(2)