// Return an array with the indexes of two values in the given array
// that add up to the sum
// Assumptions: no negatives, no duplicates, not always a solution
const array1 = [1, 2, 4, 7, 8] // should return [2, 3]
const array2 = [1] // should return null
const array3 = [1, 22, 3, 6] // should return null
const sum = 11

// Bad brute force solution with O(n^2)
const twoSumIndexes = (array) => {
  let solution = null
  if (array.length < 2) {
    return solution
  }
  array.forEach((num, i1) => {
    const complimentNum = sum - num
    for (i2 = i1; i2 < array.length - 1; i2++) {
      if (array[i2] === complimentNum) {
        solution = [i1, i2]
      }
    }
  })
  return solution
}

console.log(twoSumIndexes(array1)) // returns [2,3]
console.log(twoSumIndexes(array2)) // returns null (faster)
console.log(twoSumIndexes(array3)) // returns null