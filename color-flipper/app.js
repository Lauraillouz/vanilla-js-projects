const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color"); // returns the first Element in the document corresponding to the specified selector(s) or null if nothing has been found

btn.addEventListener("click", function () {
  //get random number between 0 - 3
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

// generate a random number for the length of the colors array
const getRandomNumber = () => {
  let roundNumber;
  // Creating a condition, to get number closest to Math.random. Meaning if we have over .5, it'll give the superior number beacause we're adding 0.5
  if (Math.random() * colors.length <= 2) {
    roundNumber = Math.floor(Math.random() * colors.length + 0.5);
    console.log(roundNumber, "in if");
  } else {
    roundNumber = Math.floor(Math.random() * colors.length);
    console.log(roundNumber, "in else");
  }
  return roundNumber;
};
