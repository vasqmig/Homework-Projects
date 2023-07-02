function countZeroes(arr) {
   let zero1 = findZero(arr)
    if (findZero === -1) return 0;

    return arr.length - findZero
}

function findZero (arr){
    let low = 0
    let high = arr.length -1
    if(high >= low){
        let mid = low + Math.floor((high -low)/2)
        if((mid == 0 || arr[mid-1] == 1) && arr[mid] == 0) {
            return mid;
        }else if (arr[mid] === 1){
            return findZero(arr,mid+1,high)
        }
    }
    return -1
}
module.exports = countZeroes