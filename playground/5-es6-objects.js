const user = {
  firstName: 'Haim',
  age: 20,
  location: 'Tel Aviv',
  gender: undefined,
};

console.log(user);

const { firstName, location, address, rating = 5 } = user;
console.log(firstName);
console.log(location);
console.log(address);
console.log(rating);

const transcation = (type, { firstName, age }) => {
  console.log(type, firstName, age);
};

transcation('Person', user);
