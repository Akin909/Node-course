console.log('starting app.js');
//3rd Party Modules
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

//Local Modules
const notes = require('./notes.js');

const argv = yargs.argv;
let command = argv._[0];
// console.log('command',process.argv)
console.log('Yargs',yargs.argv)


if(command === 'add'){
 notes.addNote(argv.title,argv.body);
} else if (command === 'list'){
  notes.getAll();
} else if (command === 'read'){
  notes.getNote(argv.title);
} else if (command === 'remove'){
  notes.removeNote(argv.title);
} else {
  console.log('command not recognised');
}
