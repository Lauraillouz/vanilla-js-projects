// items
const menu = [
  {
    id: 1,
    title: "Super food",
    category: "chef",
    price: 88,
    img: "./images/food2.jpeg",
    desc: "qertfgkhbjsdnkls qlsdjfhqzeimfjqsnfghj<qzk:fjhsdfsnf ze,fnzEILFH :nfJEBzu feNF zfz; UF Hzken f:eJF:zkehfoziGH jkfn",
  },
  {
    id: 2,
    title: "Great food",
    category: "god",
    price: 666,
    img: "./images/food3.jpeg",
    desc: "qertfgkhbjsdnkls qlsdjfhqzeimfqegeq tertrhs rthjqsnfghj<qzk:fjhsdfsnf ze,fnzEILFH :nfJEBzu feNF zfz; UF Hzken f:eJF:zkehfoziGH jkfn",
  },
  {
    id: 3,
    title: "Amazing food",
    category: "chef",
    price: 5.68,
    img: "./images/food4.jpeg",
    desc: "Nfnzertfgkhbjsdnkls qlsdjfhqff ze,fnzEILFH :nfJEBzu feNF zfz; UF Hzken f:eJF:zkehfoziGH jkfn",
  },
  {
    id: 4,
    title: "Top food",
    category: "god",
    price: 65,
    img: "./images/food5.jpeg",
    desc: "NOthing to sayz; UF Hzken f:eJF:zkehfoziGH jkfn",
  },
  {
    id: 5,
    title: "Very good food",
    category: "chef",
    price: 45,
    img: "./images/food6.jpeg",
    desc: "sthsrthsrthsthstrhrd",
  },
  {
    id: 6,
    title: "Best food",
    category: "laura",
    price: 63,
    img: "./images/food7.jpeg.crdownload",
    desc: "qertz; UF Hzken f:eJF:zkehfoziGH jkfn",
  },
  {
    id: 7,
    title: "Unbelievable food",
    category: "laura",
    price: 881,
    img: "./images/food8.jpeg",
    desc: ";SJHFHJEZF;BJHZEFByou have no ideaoziGH jkfn",
  },
  {
    id: 8,
    title: "Wow food",
    category: "laura",
    price: 777,
    img: "./images/food9.jpeg",
    desc: "bliavlakzkjzBEF:eJF:zkehfoziGH jkfn",
  },
];

const sectionCenter = document.querySelector(".section-center-menu");
const btnContainer = document.querySelector(".btn-container");

// Displays items as soon as the page is fullt loaded
window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
  displayCategoryButtons();
});

// This function creates the filter buttons dynamically
const displayCategoryButtons = () => {
  const categories = menu.reduce(
    (values, item) => {
      //first argument will be the new array that we want to return. 2nd argument is individual element of existing array
      if (!values.includes(item.category)) {
        // we are checking here if the values contain the inital value set up in the dependency array
        values.push(item.category); // if they don't already exist, you push them in the new array
      }
      return values; // you always return the first arg using reduce
    },
    ["all"] // dependency array: reduce needs an initial value. We set it up with the all button
  );

  const categoryBtns = categories
    .map((category) => {
      return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`;
    })
    .join(""); // prevents from having comas in between each element ;
  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");

  // Filter items
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id; // dataset allows to set an id (or other stuff) to certain elements. add data-stuff as an attribbute in the htmlattribute

      const menuCategory = menu.filter((item) => {
        // this filters items depending on the category
        if (item.category === category) {
          return item;
        }
      });

      // this condition says that if the category is all, then use the displayMenuItems function using the whole array. But otherwise, use it with the filtered array. Again, all that is already done compared to the id of the clicked button (sdataset)
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
};

// Getting this function out of the event listener to avoid too much nesting and make code clearer and more readable
const displayMenuItems = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<article class="menu-item">
          <img src="${item.img}" class="photo" alt="${item.title}" />
          <div class="item-info">
            <header class="is-flex justify-content-space-between">
              <h3>${item.title}</h3>
              <h3 class="item-price">$${item.price}</h3>
            </header>
            <p class="item-text border-section border-section-menu">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join(""); // to avoid having comas in between each item
  sectionCenter.innerHTML = displayMenu; // this will spread our displayMenu function in the HTML of our selected div (section-center-menu)
};
