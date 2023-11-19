// linear search algorithm
//Ex [1,5,7,3,7,3,4,45,88]
//linearSearch(arr, num) ---> returns the index of the num if its in arr
//first sort the array, the divide and conquer


myArr = [1, 5, 7, 77, 3, 4, 45, 88, 10]

//LONG WAY O(n)
// function linearSearch(arr, target){
//     for(let i=0; i<arr.length; i++){
//         if (arr[i] === target){
//             return i
//         }
//     }
//     return -1
// }

function binarySearch(arr, val){
    let leftIdx = 0;
    let rightIdx = arr.length -1;
    let middleIdx = Math.floor((arr.length -1)/2)
    
    while (leftIdx <= rightIdx) {
        middleIdx = Math.floor((leftIdx + rightIdx)/2);
        let middleVal = arr[middleIdx];
        if(middleVal < val){
            leftIdx = middleIdx + 1;
        } else if(middleVal > val){
            rightIdx = middleIdx - 1;
        } else {
            return middleIdx;
        }
    }
    return -1
}