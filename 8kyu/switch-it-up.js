// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// Try using "Switch" statements.

// This kata is meant for beginners. Rank and upvote to bring it out of beta

function switchItUp(number){
  return [
    'Zero', 'One', 'Two', 'Three', 'Four', 
    'Five', 'Six', 'Seven', 'Eight', 
    'Nine', 'Ten'
  ][number];
}

console.log(switchItUp(1));
console.log(switchItUp(3));
console.log(switchItUp(5));