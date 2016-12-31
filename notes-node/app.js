console.log('starting app.js');
//3rd Party Modules
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

//Local Modules
const notes = require('./notes.js');

const argv = yargs.argv;
let command = process.argv[2];
console.log('command',process.argv,'Yargs',yargs.argv)

// console.log("command",command);

if(command === 'add'){
 notes.addNote(argv.title,argv.body);
} else if (command === 'list'){
  console.log('listing all notes');
} else if (command === 'read'){
  console.log('reading note(s)');
} else if (command === 'remove'){
  console.log('removing notes');
} else {
  console.log('command not recognised');
}
