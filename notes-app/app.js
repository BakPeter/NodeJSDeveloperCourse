const add = require('./utils.js');
const getNotes = require('./notes.js');

console.log('app.js');
const sum = add(-4, -6);
console.log(sum);

const notes = getNotes();
console.log(notes);
