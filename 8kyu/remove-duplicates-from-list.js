// Define a function that removes duplicates from an array of numbers and returns it 
// as a result.

// The order of the sequence has to stay the same.

function distinct(a) {
  return a.filter((e, i, a) => a.indexOf(e) === i);
}

// Best practise
// function distinct(a) {
//   return [...new Set(a)];
// }

console.log(distinct([1]));
console.log(distinct([1,2]));
console.log(distinct([1,1,2]));