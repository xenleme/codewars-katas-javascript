// The goal of this exercise is to convert a string to a new string where each character in the new string is
// '(' if that character appears only once in the original string, or ')' if that character appears more than
// once in the original string. Ignore capitalization when determining if a character is a duplicate.
//
// Examples:
//
// "din" => "((("
//
// "recede" => "()()()"
//
// "Success" => ")())())"
//
// "(( @" => "))(("
//
//
// Notes:
//
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX",
// the "XXX" is actually the expected result, not the input! (these languages are locked so that's not possible to correct it).

function duplicateEncode(word){
  let arr = word.toLowerCase().split('');
  let newStr = '';

  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      newStr += '(';
    } else {
      newStr += ')';
    }
  }

  return newStr;
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));