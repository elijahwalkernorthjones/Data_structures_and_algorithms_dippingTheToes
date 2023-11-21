function findFloor(arr, target) {
    let leftIdx = 0;
    let rightIdx = arr.length -1
    let closestNum;

    while(leftIdx <= rightIdx){
        middleIdx = Math.floor((leftIdx + rightIdx)/2);
        let middleVal = arr[middleIdx];
        //is the target the middleValue?
        if(middleVal === target){
            return target;
        } 
        //is the target number below the target in the array?
        else if(middleVal < target){
            closestNum = middleVal
            leftIdx = middleIdx + 1;
        } 
        //is the target number above the target in the array?
        else {
            closestNum = middleVal;
            rightIdx = middleIdx -1;
        } 
    }
    if (closestNum !== undefined){
        return closestNum;
    } else {
        return -1
    }
    
}

// module.exports = findFloor

//            L         M               R
//            L     R
// findFloor([1, 2, 8, 10, 10, 12, 19], 3)
// find closest number less than or equal to target. 
// if zero then return -1