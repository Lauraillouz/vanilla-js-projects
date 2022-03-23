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

const filters = {
  searchText: '',
};

const renderNotes = (notes, filters) => {
  // limit the notes to those that pass the filters
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  //Clear the content of notes container to replace them with the filtered ones
  document.querySelector('#notes').innerHTML = '';

  filteredNotes.forEach((note) => {
    const noteElement = document.createElement('p');
    noteElement.textContent = note.title;
    document.querySelector('#notes').appendChild(noteElement);
  });
};

// initial rendering before the user interacts with the page
renderNotes(notes, filters);

document.querySelector('#createNoteButton').addEventListener('click', (e) => {
  e.target.textContent = 'Created!';
});

document.querySelector('#removeAllButton').addEventListener('click', () => {
  document.querySelectorAll('.note').forEach((note) => {
    note.remove();
  });
});

// Difference between input and change event : change event will fire when you get out of the focus, as the input will fire every time what's inside changes
document.querySelector('#searchText').addEventListener('input', (e) => {
  filters.searchText = e.target.value;
  //re renders when the input changes
  renderNotes(notes, filters);
});
