function sortedFrequency(arr, num) {
    let firstIdx = findFirst(arr,num);
    if(firstIdx == -1)
    return firstIdx;
    let lastIdx = findLast(arr,num);
    return lastIdx - firstIdx +1;

}

function findFirst(arr,num){
    let leftSide = 0
    let righSide = arr.length -1
    if(righSide >= leftSide){
        let mid = Math.floor((leftSide+righSide)/2)
        if((mid == 0 || num > arr[mid -1]) && arr[mid]=== num){
            return mid;
        }else if (num > arr[mid]){
            return findFirst(arr, num, mid +1, righSide)
        }else {
            return findFirst(arr,num, leftSide, mid -1)
        }
    }
    return -1 
}

function findLast(arr, num){
    let low = 0
    let high = arr.length-1
    if(high >= low){
        let mid = Math.floor((low+high)/2)
        if((mid === arr.length -1 || num <arr[mid+1]) && arr[mid]=== num){
            return mid;
        }else if (num < arr[mid]){
            return findLast(arr, num, low, mid -1)
        }else{
            return findLast(arr, num, mid +1, high)
        }
    }
    return -1 
}

module.exports = sortedFrequency