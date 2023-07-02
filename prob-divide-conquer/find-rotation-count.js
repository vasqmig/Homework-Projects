function findRotationCount(arr) {
  let leftSide = 0;
  let righSide = arr.length - 1;
  if (righSide < leftSide) return 0;
  if (righSide === leftSide) return leftSide;
  let mid = Math.floor((leftSide + righSide) / 2);

  if (mid < righSide && arr[mid + 1] < arr[mid]) return mid + 1;
  if (mid > leftSide && arr[mid] < arr[mid - 1]) {
    return mid;
  }

  if (arr[righSide] > arr[mid]) {
    return findRotationCount(arr, leftSide, mid - 1);
  }
  return findRotationCount(arr, mid + 1, righSide);
}

module.exports = findRotationCount;
