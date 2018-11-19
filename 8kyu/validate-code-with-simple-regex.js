// Basic regex tasks. Write a function that takes in a numeric code of any length.
// The function should check if the code begins with 1, 2, or 3 and return true if so.
// Return false otherwise.
//
// You can assume the input will always be a number.

function validateCode (code) {
  return String(code)[0].match(/[0-3]/) ? true : false;
}

console.log(validateCode(123));
console.log(validateCode(248));
console.log(validateCode(8));
