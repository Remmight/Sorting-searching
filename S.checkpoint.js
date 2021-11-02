function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let x;

    for (x = i - 1; x >= 0 && arr[x] > current; x--) {
      arr[x + 1] = arr[x];
    }
    arr[x + 1] = current;
  }
  return arr;
}
console.log(insertionSort([9, 5, 6, 3, 1]));

function added(value) {
  let y = value > 30 ? "correct" : "very wrong";
  console.log(y);
}
console.log(added(20));
