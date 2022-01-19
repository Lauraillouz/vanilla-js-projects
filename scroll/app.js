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
  /* console.log(navHeight); */

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

/* Creating a smooth scroll through anchors in page and enable to arrive at the title and not after it */
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Prevent default behiaviour that makes the click go past the targeted title
    e.preventDefault();

    // Enable to navigate to navigate to targeted title via anchors
    const id = e.currentTarget.getAttribute("href").slice(1); // slicing the hashtag
    const element = document.getElementById(id); // getting the element
    /* console.log(id) */
    // calculate the heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const isFixedNav = navbar.classList.contains("fixed-nav");
    // offsetTop = a number representing the top position of the element in pixels
    let position = element.offsetTop - navHeight; // will give us the position value without the navbar so that the navbar doesn't cover our element
    if (!isFixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      // adding the menu dropdown height when mobile version
      position = position + containerHeight;
    }
    /* console.log(position); */
    window.scrollTo({
      left: 0,
      top: position, // scrolls dynamically to the position poof the targeted element
    });
    linksContainer.style.height = 0; // closes the navbar toggle when we target an element from the menu
  });
});
