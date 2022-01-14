// setup date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// close links
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  // Element.getBoundingClientRect() => method that returns the size of an element and its position relative to the viewport
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  // this condition will display the links with a height automatically corresponding with the numbers of links no matter how many there are
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// fixed navbar
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", () => {
  //pageYOffset = read-only window property that returns the number of pixels the document has been scrolled vertically.
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  console.log(navHeight);

  // makes nav fixed after a certain nav height dynamically
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});
