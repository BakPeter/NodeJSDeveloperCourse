import fs from 'fs';
import chalk from 'chalk';

export const getNotes = function () {
  return 'Your notes...';
};

export const removeNote = function (title) {
  const notes = loadNotes();
  const filteredNotes = notes.filter((note) => note.title !== title);

  if (notes.length > filteredNotes.length) {
    saveNotes(filteredNotes);
    console.log(chalk.green('Note with title ' + title + ' removed'));
  } else {
    console.log(chalk.red('Note with title ' + title + " don't exists"));
  }
};

export const addNote = function (title, body) {
  const notes = loadNotes();

  const filteredNote = notes.filter((note) => note.title === title);
  if (filteredNote.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log('New note added');
  } else {
    console.log('New title taken');
  }
};

const saveNotes = function (notes) {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJson);
};
const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    return JSON.parse(dataBuffer.toString());
  } catch (error) {
    return [];
  }
};
