// Make a function that returns the value multiplied by 50 and increased by 6.
// If the value entered is a string it should return "Error".
//
// Note: in C#, you'll always get the input as a string, so the above applies if
// the string isn't representing a double value.

function problem(x){
  return typeof x === 'string' ? 'Error' : (x * 50) + 6;
}

console.log(problem("hello"));
console.log(problem(1));
console.log(problem(5));
console.log(problem(0));
console.log(problem(1.2);
console.log(problem(-3));
