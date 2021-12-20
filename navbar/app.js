// classList : shows/gets all classes
// contains : checks classList for specific class
// add : add class
// remove : remove class
// toggle : toggle class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  //  console.log("clicked", links.classList);

  // This is how toggle works:
  /* if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  } else {
    links.classList.add("show-links");
  } */

  links.classList.toggle("show-links");
});
