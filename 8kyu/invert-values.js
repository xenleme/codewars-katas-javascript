// Given a set of numbers, return the additive inverse of each.
// Each positive becomes negatives, and the negatives become positives.
//
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
//
// You can assume that all values are integers.

function invert(array) {
  return array.map(function(i) {
    return i === -i ? i : -i
  })
}

// After refactoring
function invert(array) {
  return array.map(i => i === -i ? i : -i);
}

console.log(invert([1,2,3,4,5]));
console.log(invert([1,-2,3,-4,5]));
console.log(invert([]));
