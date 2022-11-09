const array = ['plort']

function findPlort(array) {
  let t0 = performance.now();
  for (const item of array) {
    if (item === 'plort') {
      console.log(item);
    }
  }
  let t1 = performance.now();
  console.log(`call to find plort took ${t1 - t0} milliseconds`);
}

findPlort(array);