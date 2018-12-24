// Create a function squares(x,n) that starts with a number (x) and returns an array of length (n) with squares of the
// previous number. If n is negative or zero, return an empty array/list.
//
// Examples
// squares(2,5)=[2,4,16,256,65536]
// squares(3,3)=[3,9,81]

function squares(x, n) {
  const result = [];
  if (n <= 0) {
    return result;
  } else {
    result.push(x);
    for (let i = 0; i < n - 1; i++) {
      result.push(result[i] * result[i]);
    }
    return result;
  }
}

console.log(squares(2,5));
console.log(squares(3,3));
console.log(squares(5, 3));
console.log(squares(10,4));
console.log(squares(2, 0));
console.log(squares(2, -5));
