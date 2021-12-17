// local reviews data

const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "./profile.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "./profile.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "./profile.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

// select items
const img = document.getElementById("profile-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-button");
const nextBtn = document.querySelector(".next-button");
const randomBtn = document.querySelector(".random-button");

// set starting item
let currentItem = 0;

// event fires when the window has been completely loaded
window.addEventListener("DOMContentLoaded", () => {
  showProfile();
});

// show person based on item
const showProfile = () => {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};

// show next person
nextBtn.addEventListener("click", () => {
  currentItem++;
  // this condition makes the next button go back to 0 when it reached the end of the array
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showProfile();
});

// show previous person
prevBtn.addEventListener("click", () => {
  currentItem--;
  // this condition makes the previous button go back to last item in array when it reached the first element
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showProfile();
});

// show random person
randomBtn.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  showProfile();
});
