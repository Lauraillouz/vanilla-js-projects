const randomDinner = [
  "salmon",
  "caviar",
  "mango",
  "parsnip",
  "oyster",
  "blue cheese",
  "curry",
  "cranberry",
  "lamb",
  "mulled wine",
  "pana cotta",
  "eggnog",
  "rum cocktail",
  "chocolate",
  "pecans",
  "pumpkin",
  "jokes",
];

const annoySomeoneWithDinner = () => {
  let thisIsDinner = [];

  for (i = 0; i < randomDinner.length; i++) {
    if (thisIsDinner.length < 4) {
      thisIsDinner.push(Math.floor(Math.random() * randomDinner.length));
    }
  }

  let menuSelection = [];

  for (let i = 0; i < thisIsDinner.length; i++) {
    menuSelection.push(randomDinner[thisIsDinner[i]]);
  }
  console.log(menuSelection);
};
annoySomeoneWithDinner();
