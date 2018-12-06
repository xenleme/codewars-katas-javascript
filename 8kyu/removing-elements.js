// Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.
//
// Example:
// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
  return arr.filter((_, i) => { return i % 2 === 0 });
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));