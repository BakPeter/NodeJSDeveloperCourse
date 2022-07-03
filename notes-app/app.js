import chalk from 'chalk';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import { addNote, removeNote } from './notes.js';

yargs(hideBin(process.argv))
  .version('1.1.0')
  .command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string',
      },
      body: {
        describe: 'Note body',
        demandOption: true,
        type: 'string',
      },
    },
    handler: function (argv) {
      addNote(argv.title, argv.body);
    },
  })
  .command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
      title: {
        describe: 'title',
        demandOption: true,
        type: 'string',
      },
    },
    handler: function (argv) {
      removeNote(argv.title);
    },
  })
  .command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
      console.log(chalk.yellow('Reading a note...'));
    },
  })
  .command({
    command: 'list',
    describe: 'List a note',
    handler: function () {
      console.log(chalk.blue('Listing a note...'));
    },
  })
  .option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose looging',
  })
  .parse();

// console.log(yargs(hideBin(process.argv)).argv);
