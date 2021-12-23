// FIRST METHOD: USING SELECTORS INSIDE THE ELEMENT

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn"); // this allows us to select all buttons in the questions div

  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== question) {
        // this condition means: if the clicked questions div is different from the one that corresponds to the clicked button, remove "show-text" class (meaning hiding the text)
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

// SECOND METHOD: TRAVERSING THE DOM

// We start by selecting all buttons that we want to listen to the click of
/* const questionBtns = document.querySelectorAll(".question-btn");

// Then we loop over them to spot what specific button has been clicked
questionBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const question = e.currentTarget.parentElement.parentElement; // This allows us to traverse the DOM and get to the parent's parent element
    question.classList.toggle("show-text");
  });
}); */
