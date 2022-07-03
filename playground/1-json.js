const fs = require('fs');

// const book = {
//   title: 'book title',
//   author: 'some auther',
// };

// console.log(book);

// var bookJson = JSON.stringify(book);
// console.log(bookJson);

// var parsedData = JSON.parse(bookJson);
// console.log(parsedData);
// console.log(parsedData.title);
// console.log(parsedData['author']);

// fs.writeFileSync('1-json.json', bookJson);

// const buffer = fs.readFileSync('1-json.json');
// const dataJson = buffer.toString();
// const data = JSON.parse(dataJson)
// console.log(data);
// console.log(data.titl);

const buffer = fs.readFileSync('1-json.json');
const data = JSON.parse(buffer.toString());

data.name = 'peter bbbbb';
data.age = 394;

const dataJson = JSON.stringify(data);
fs.writeFileSync('1-json.json', dataJson);
