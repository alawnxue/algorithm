function selectionSort(array) {
  let temp;
  let length = array.length;

  for (let i = 0; i < length - 1; i++) {
    for (let j = i+1; j < length; j++) {
      if (array[i] > array[j]) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  return array;
}

console.error(selectionSort([1, 2, 3, 56, 4, 6, 8, 10, 20, 9]));
