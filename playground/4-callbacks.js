console.log('4-callback');

setTimeout(() => {
  console.log('Two seconds up');
}, 2000);

const names = ['Jon', 'Dimitri', 'Jen', 'Jess'];
const shortNames = names.filter((name) => name.length <= 4);
console.log(shortNames);

const geocode = (adress, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 10,
      longtitude: 0,
    };

    callback(data);
  }, 2000);
};

geocode('Philadelphia', (data) => {
  console.log(data);
});
