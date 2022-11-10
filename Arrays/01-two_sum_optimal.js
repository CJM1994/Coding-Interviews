const array = [1, 4, 7, 9]
const array2 = [3, 3]
// hashMap: {12: 0, 9: 1, 6: 2, 4: 3}
const total = 13
const total2 = 6

// Using a hashmap you can slightly increase the space complexity in
// order to reduce the time complexity from O(n^2) to O(n) which
// is much better (exponential time => polynomial time)
const twoSum = (array, total) => {
  const hashMap = {}
  let result = null
  array.forEach((number, index) => {
    if (hashMap[number] !== undefined) {
      result = [hashMap[number], index]
    }
    hashMap[total - number] = index
  })
  return result
}

console.log(twoSum(array, total))
console.log(twoSum(array2, total2))

// Space Complexity O(n)
// Time Complexity O(n)