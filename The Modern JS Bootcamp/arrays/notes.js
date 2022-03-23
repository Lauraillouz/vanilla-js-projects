const notes = [
  {
    title: 'My next trip',
    body: 'I would like to go to Mars',
  },
  {
    title: 'Habbits to work on',
    body: 'Conquer the world, smile more at doors',
  },
  {
    title: 'Office modification',
    body: 'Become the boss',
  },
];

const index = notes.findIndex((note) => {
  console.log(note);
  // findIndex will stop the first time the condition returns true. In this case, it will not return the 3rd object (position 2) of the array
  return note.title === 'Habbits to work on';
});
console.log(index);

// Find an object in an array: the tricky thing is that you can't compare 2 similar objects, cause it will always return false. This is because from the moment you create an object, it will be saved in a different memory space. So to be able to find an object, we have to enter inside of it and compare one of the values of this object.

const findNote = (notes, noteTitle) => {
  return notes.find((note) => {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};
const note = findNote(notes, 'office modification');
console.log(note);

const findNotes = (notes, query) => {
  return notes.filter((note) => {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
    return isBodyMatch || isTitleMatch;
  });
};

console.log(findNotes(notes, 'ne'));

const sortNotes = (notes) => {
  return notes.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1; // a should come before b
    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1; // b should come before a
    } else {
      return; // if they're equal, it does not matter
    }
  });
};
sortNotes(notes);
console.log(sortNotes(notes));
