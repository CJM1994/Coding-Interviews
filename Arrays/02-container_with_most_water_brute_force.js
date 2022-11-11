// You are given an integer array height of length n. There are n vertical 
// lines drawn such that the two endpoints of the i'th line are (i, 0) and 
// (i, height[i]).

// Find two lines that together with the x-axis form a container, such that // the container contains the most water.

// Return the maximum amount of water a container can store.

const array = [7, 1, 2, 3, 9]
// should return 7 (max height) * 4 (width) = 28

// Steps:
// find max area for all number combinations
// if max area for combination is larger store that
// at end return largest max area

// This is a poor solution with high time complexity
const maxArea = array => {
  let maxArea = 0
  for (let i1 = 0; i1 < array.length -1; i1++) {
    for (let i2 = i1 +1; i2 < array.length; i2++) {
      let thisMaxArea = Math.min(array[i1], array[i2]) * Math.abs(i1 - i2)
      if (thisMaxArea > maxArea) {
        maxArea = thisMaxArea
      }
    }
  }
  return maxArea
}

console.log(maxArea(array))

// Space Complexity O(1)
// Time Complexity O(n^2)