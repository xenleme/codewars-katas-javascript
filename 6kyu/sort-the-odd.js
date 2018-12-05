// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.
//
// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.
//
// Example
//
// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

function sortArray(array) {
  const odd = array.map((v, i) => [v, i]).filter(v => v[0] % 2).sort((a, b) => a[0] - b[0]);
  const inx = odd.map(v => v[1]);
  const result = Array.from(array);
  
  for (let i = 0; i < result.length; i++) {
    if (inx.includes(i)) {
      result[i] = odd.shift()[0];
    }
  }

  return result;
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
console.log(sortArray([5, 3, 1, 8, 0]));
console.log(sortArray([]));