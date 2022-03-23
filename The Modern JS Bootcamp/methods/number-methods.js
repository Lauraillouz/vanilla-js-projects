const num = 103.941;

// Method that determines the number of decimal we want to keep
console.log(num.toFixed(2));

// Rounds number
console.log(Math.round(num));
// Rounds down
console.log(Math.floor(num));
// Rounds up
console.log(Math.ceil(num));

// Get random number
const min = 10;
const max = 20;
const randomNum = Math.floor(Math.random() * (max - min - 1)) + min;
console.log(randomNum);

const guess = 2;

const makeGuess = (guess) => {
  const min = 1;
  const max = 5;
  return guess === Math.floor(Math.random() * (max - min - 1)) + min;
};

console.log(makeGuess(1));
