
    function sortedFrequency(arr, target) {
        let leftIdx = 0;
        let rightIdx = arr.length - 1;
    
        // Binary search to find the leftmost occurrence of target
        let leftMostIdx = binarySearchLeftmost(arr, target, leftIdx, rightIdx);
    
        // If target is not found, return -1
        if (leftMostIdx === -1) {
            return -1;
        }
    
        // Binary search to find the rightmost occurrence of target
        let rightMostIdx = binarySearchRightmost(arr, target, leftIdx, rightIdx);
    
        // Calculate the frequency using the leftmost and rightmost indices
        let frequency = rightMostIdx - leftMostIdx + 1;
    
        return frequency;
    }
    
    // Helper function for finding the leftmost occurrence in a sorted array
    function binarySearchLeftmost(arr, target, left, right) {
        let leftmost = -1;
    
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
    
            if (arr[mid] === target) {
                leftmost = mid;
                right = mid - 1; // Continue searching on the left side
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    
        return leftmost;
    }
    
    // Helper function for finding the rightmost occurrence in a sorted array
    function binarySearchRightmost(arr, target, left, right) {
        let rightmost = -1;
    
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
    
            if (arr[mid] === target) {
                rightmost = mid;
                left = mid + 1; // Continue searching on the right side
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    
        return rightmost;
    }
    


// module.exports = sortedFrequency

//SIMILAR TO THE COUNT ZEROS FUNCTION!! EXCEPT THERE IS AN ADDED 'TARGET' PARAMETER 