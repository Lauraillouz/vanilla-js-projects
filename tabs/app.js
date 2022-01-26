const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', (e) => {
  // We are targetting the about element and checking  which data-id in this parent we are clicking on
  const id = e.target.dataset.id;

  if (id) {
    // I remove the active class from other buttons
    btns.forEach((btn) => {
      btn.classList.remove('tab-active');
      // I add the active class only for the clicked button
      e.target.classList.add('tab-active');
    });

    // hide other articles content
    articles.forEach((article) => {
      article.classList.remove('tab-active');
    });
    const targettedArticle = document.getElementById(id);
    targettedArticle.classList.add('tab-active');
  }
});
