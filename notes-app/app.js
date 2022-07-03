import chalk from 'chalk';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

// yargs.version('1.1.0');

// console.log(process.argv);
// const argv = yargs(hideBin(process.argv)).argv;
// console.log(argv);
// console.log(chalk.red(argv['title']));
// console.log(chalk.blue(argv.title));
// console.log(chalk.green.italic.bold.bgGray(argv._));

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
      //   console.log('Adding a new note...', JSON.stringify(argv));
      console.log(chalk.bold.underline('Add Note'));
      console.log('Title:', argv.title);
      console.log('Body:', argv.body);
    },
  })
  .command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
      console.log(chalk.red('Removind a note...'));
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
