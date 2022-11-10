const array = ['plort', 'glorp', 'glip', 'glop'];
const largeArray = new Array(1000).fill('plort');

// The Big O of this function is O(n) because it contains one loop
// that scales linearly based on the size of the array
function findPlort(array) {
  let t0 = performance.now();
  for (const item of array) {
    if (item === 'plort') {
      console.log(item);
    }
  }
  let t1 = performance.now();
  // performance.now() can be used to measure the amount of time
  // that a process takes to complete
  console.log(`call to find plort took ${t1 - t0} milliseconds`);
}

findPlort(array);
findPlort(largeArray);