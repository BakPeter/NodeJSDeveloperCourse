import chalk from "chalk";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { addNote, removeNote, getNotes, readNote } from "./notes.js";

yargs(hideBin(process.argv))
  .version("1.1.0")
  .command({
    command: "add",
    describe: "Add a new note",
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string",
      },
      body: {
        describe: "Note body",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      addNote(argv.title, argv.body);
    },
  })
  .command({
    command: "remove",
    describe: "Remove a note",
    builder: {
      title: {
        describe: "title",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      removeNote(argv.title);
    },
  })
  .command({
    command: "read",
    describe: "Read a note",
    builder: {
      title: {
        describe: "title",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      const note = readNote(argv.title);
      if (note) {
        console.log(chalk.green.italic.bold.underline(note.title));
        console.log(note.body);
      } else {
        console.log(chalk.red("Note title not find"));
      }
    },
  })
  .command({
    command: "list",
    describe: "List a note",
    handler() {
      console.log(chalk.bold.underline("Your notes"));
      getNotes().forEach((note) => console.log(note.title + " : " + note.body));
    },
  })
  .option("verbose", {
    alias: "v",
    type: "boolean",
    description: "Run with verbose looging",
  })
  .parse();

// console.log(yargs(hideBin(process.argv)).argv);
