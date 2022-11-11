// You are given an integer array height of length n. There are n vertical 
// lines drawn such that the two endpoints of the i'th line are (i, 0) and 
// (i, height[i]).

// Find two lines that together with the x-axis form a container, such that // the container contains the most water.

// Return the maximum amount of water a container can store.

const heights = [7, 1, 2, 3, 9]
// should return 7 (max height) * 4 (width) = 28

// Steps:
// Add a pointer on opposite ends of the array sliding inwards on the side with
// the smaller value. That way you start off optimizing for the width.
// The only way to further increase the area is for the smaller of the two numbers
// to increase. That way you can only run through each item in the array once, and
// achieve a time complexity of O(n).

const maxArea = heights => {
  let p1 = 0
  let p2 = heights.length - 1
  let maxArea = 0

  while ((p2 - p1) > 0) {
    const currentWidth = p2 - p1
    const currentHeight = Math.min(heights[p1], heights[p2])
    const currentArea = currentWidth * currentHeight
    maxArea = Math.max(maxArea, currentArea)

    if (heights[p1] < heights[p2]) {
      p1++
    } else {
      p2--
    }
  }

  return maxArea
}

console.log(maxArea(heights))

// Space Complexity O(1)
// Time Complexity O(n)