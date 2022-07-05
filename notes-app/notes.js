import fs from "fs";
import chalk from "chalk";

export const readNote = (title) => {
  const notes = loadNotes();
  return notes.find((note) => note.title === title);
};

export const getNotes = () => loadNotes();

export const removeNote = (title) => {
  const notes = loadNotes();
  const filteredNotes = notes.filter((note) => note.title !== title);

  if (notes.length > filteredNotes.length) {
    saveNotes(filteredNotes);
    console.log(chalk.green("Note with title " + title + " removed"));
  } else {
    console.log(chalk.red("Note with title " + title + " don't exists"));
  }
};

export const addNote = (title, body) => {
  const notes = loadNotes();

  // const duplcateNote = notes.filter((note) => note.title === title);
  const duplcateNote = notes.find((note) => note.title === title);
  if (!duplcateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green("New note added"));
  } else {
    console.log(chalk.red("Note given title taken"));
  }
};

const saveNotes = (notes) => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    return JSON.parse(dataBuffer.toString());
  } catch (error) {
    return [];
  }
};
