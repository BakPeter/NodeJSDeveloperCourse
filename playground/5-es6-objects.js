const user = {
  firstName: 'Haim',
  age: 20,
  location: 'Tel Aviv',
  gender: undefined,
};

console.log(user);

const { firstName, location, address } = user;
console.log(firstName);
console.log(location);
console.log(address);
