import getNotes from './notes.js';
// const validator = require('validator');
// const chalk = require('chalk');

import chalk from 'chalk';

const notes = getNotes();
console.log(chalk.yellow.bgRed(notes));
console.log(chalk.magenta.italic('magenta text'));
console.log(chalk.green.underline.bold('green text'));
