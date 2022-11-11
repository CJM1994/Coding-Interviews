// You are given an integer array height of length n. There are n vertical 
// lines drawn such that the two endpoints of the i'th line are (i, 0) and 
// (i, height[i]).

// Find two lines that together with the x-axis form a container, such that // the container contains the most water.

// Return the maximum amount of water a container can store.

const heights = [7, 1, 2, 3, 9]
const heights2 = [5]
// should return 7 (max height) * 4 (width) = 28

// Steps:
// find max area for all number combinations
// if max area for combination is larger store that
// at end return largest max area

// This is a poor solution with high time complexity
const maxArea = heights => {
  let maxArea = 0
  for (let i1 = 0; i1 < heights.length -1; i1++) {
    for (let i2 = i1 +1; i2 < heights.length; i2++) {
      let thisMaxArea = Math.min(heights[i1], heights[i2]) * (i2 -i1)
      maxArea = Math.max(thisMaxArea, maxArea)
    }
  }
  return maxArea
}

console.log(maxArea(heights)) // should return 28
console.log(maxArea(heights2)) // should return 0

// Space Complexity O(1)
// Time Complexity O(n^2)