console.log( 'starting app.js' );
//3rd Party Modules
const fs = require( 'fs' );
const _ = require( 'lodash' );
const yargs = require( 'yargs' );
//Local Modules
const notes = require( './notes.js' );
const argv = yargs.argv;
let command = argv._[0];
// console.log('command',process.argv)
console.log( 'Yargs', yargs.argv )
if ( command === 'add' ) {
    let note = notes.addNote( argv.title, argv.body );
    if ( note ) {
        console.log( `note created` );
        console.log( '---' )
        console.log( `title: ${ argv.title }` )
    } else if ( !note ) {
        console.log( 'title already exists' )
    }
} else if ( command === 'list' ) {
    let allNotes = notes.getAll( );
    console.log(`Printing ${allNotes.length} note(s)`)
    allNotes.forEach(( note ) => {
        notes.logNote( note )
    });
} else if ( command === 'read' ) {
    let toRead = notes.getNote( argv.title );
    if ( toRead ) {
        console.log('note found')
        notes.logNote( toRead );
    } else {
        console.log( 'The note could not be found' )
    }
} else if ( command === 'remove' ) {
    const noteRemoved = notes.removeNote( argv.title );
    console.log( noteRemoved );
    const message = noteRemoved
        ? `Note ${ argv.title } removed`
        : `Note not found`;
    console.log( message );
} else {
    console.log( 'command not recognised' );
}
