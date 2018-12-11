// You will be given an vector of string(s). You must sort it alphabetically (case-sensitive!!)
// and then return the first value.
//
// The returned value must be a string, and have "***" between each of its letters.
//
// You should not remove or add elements from/to the array.

function twoSort(s) {
  let firstValue = s.sort()[0];
  let formattedValue = '';

  for (let i = 0; i < firstValue.length; i++) {
    formattedValue += firstValue[i] + '***'
  }

  return formattedValue.substring(0, formattedValue.length - 3);
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));