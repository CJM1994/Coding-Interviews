// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

const array = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1] // solution should be 6

// Steps:
// From left to right go through array
// If value < prev value some water will be trapped
// When next value is eual to or greater than value from last step evaluate how much water is trapped in that section
// Value of water trapped will be the lower (elevation * width) - sum of middle elevations
// Repeat until end of array

const trappedRainwater = (elevations) => {
  let startTrapIndex = 0
  let endTrapIndex = 0
  
  elevations.forEach(e => {
    if (e > startTrapIndex) {
      startTrapIndex = e
    }
  })
}