// Simple enough this one - you will be given an array. The values in the array will either be numbers or strings,
// or a mix of both. You will not get an empty array, nor a sparse one.
//
// Your job is to return a single array that has first the numbers sorted in ascending order, followed by the
// strings sorted in alphabetic order. The values must maintain their original type.
//
// Note that numbers written as strings are strings and must be sorted with the other strings.

function dbSort(a){
  const numbers = a.filter(i => typeof i === 'number').sort((a, b) => a - b);
  const strings = a.filter(i => typeof i === 'string').sort();
  return numbers.concat(strings);
}

console.log(dbSort([6, 2, 3, 4, 5])); // [2, 3, 4, 5, 6]
console.log(dbSort([14, 32, 3, 5, 5])); // [3, 5, 5, 14, 32]
console.log(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2])); // [0,2,2,"Apple","Banana","Mango","Orange"]