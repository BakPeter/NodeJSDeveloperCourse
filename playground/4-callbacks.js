console.log('4-callback');

// setTimeout(() => {
//   console.log('Two seconds up');
// }, 2000);

// const names = ['Jon', 'Dimitri', 'Jen', 'Jess'];
// const shortNames = names.filter((name) => name.length <= 4);
// console.log(shortNames);

// const geocode = (adress, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 10,
//       longtitude: 0,
//     };

//     callback(data);
//   }, 2000);
// };

// geocode('Philadelphia', (data) => {
//   console.log(data);
// });

import { mathOperation } from './utils/math-utils.js';

const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);
// console.log('n1 = ' + n1);
// console.log('n2 = ' + n2);

mathOperation(
  num1,
  num2,
  (n1, n2) => {
    return n1 + n2;
  },
  (result) => {
    const str = num1 + '+' + num2 + '=' + result;
    console.log(str);
  }
);

mathOperation(
  num1,
  num2,
  (n1, n2) => n1 * n2,
  (result) => console.log(num1 + '*' + num2 + '=' + result)
);

mathOperation(
  num1,
  num2,
  (n1, n2) => n1 / n2,
  (result) => console.log(num1 + '/' + num2 + '=' + result)
);

mathOperation(
  num1,
  num2,
  (n1, n2) => n1 % n2,
  (result) => console.log(num1 + '%' + num2 + '=' + result)
);
