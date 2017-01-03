// var obj = {
//   name: "Akin",
//   lastName: "Sowemimo",
//   Age: 26,
// }
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

const fs = require('fs');

let originalNote = {
  title: 'Some title',
  body: 'Some body',
};
let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString)


let noteString = fs.readFileSync('notes.json');

let note = JSON.parse(noteString)
console.log(typeof note);
console.log(note.title);
