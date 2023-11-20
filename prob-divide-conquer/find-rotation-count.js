function findRotationCount(arr) {
    const sortedArr = arr.sort(function(a,b){
        return a - b
    })
    return sortedArr[0]
}

// module.exports = findRotationCount