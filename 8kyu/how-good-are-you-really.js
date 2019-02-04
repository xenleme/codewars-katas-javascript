// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average 
// student in your class.
// You got an array with your colleges' points. Now calculate the average to your points!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your classes points. 
// For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, v) => a + v) / classPoints.length;
}

console.log(betterThanAverage([2, 3], 5));
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69))