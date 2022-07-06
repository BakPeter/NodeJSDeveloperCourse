import request from 'request';

const url =
  'http://api.weatherstack.com/current?access_key=62b79179d0e843e6f70dfbfc7ef40ca5&query=37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {
  //   console.log(response);
  //   const data = JSON.parse(response.body);
  //   console.log(data);
  console.log(response.body.current);
});
