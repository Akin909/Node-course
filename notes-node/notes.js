console.log('starting notes.js')

let addNote = (title, body) => {
  console.log('adding note', title, body);
};

let getAll = () =>{
  console.log('getting all notes');
};

let remove = (note) => {
  console.log('removing note');
};

module.exports  = {
  addNote,
  getAll,
  remove,
};
