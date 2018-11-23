// In this kata you should simply determine, whether a given year is a leap year or not.
// In case you don't know the rules, here they are:
//
// years divisible by 4 are leap years
// but years divisible by 100 are no leap years
// but years divisible by 400 are leap years
// Additional Notes:
//
// Only valid years (positive integers) will be tested, so you don't have
// to validate them
// Examples can be found in the test fixture.

function isLeapYear(year) {
  if (year < 1000) {
    return year % 4 === 0;
  } else if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

console.log(isLeapYear(1234));
console.log(isLeapYear(1984));
console.log(isLeapYear(2000));
console.log(isLeapYear(1000));
