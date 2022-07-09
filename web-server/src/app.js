import express from 'express';
import { logger } from './logger/logger.js';

const app = express();

app.get('', (req, res) => {
  logger.log('info', 'url: /');
  res.send('Hello Express!');
});

app.get('/help', (req, res) => {
  logger.log('info', 'url:  /help');

  res.send('Help page');
});

app.get('/about', (req, res) => {
  logger.log('info', 'url:  /about');
  res.send('About page');
});

app.get('/weather', (req, res) => {
  const retVal = {
    message: 'Weather page',
    location: 'Tel aviv',
    person: {
      age: 10,
      name: 'Eli',
    },
    flag: true,
    arr: [1, 2, 3, 4],
  };
  res.send(retVal);
  logger.info('[{route}] - {returnValue}', {
    route: '/weather',
    returnValue: retVal,
  });
});

try {
  logger.warn('try/catch error poc', {
    error,
    errorMessage: error.message,
  });
  throw 'POC Seq log error';
} catch (error) {
  logger.error("Error in app.js:get('/help'), {error}, {errorMessage}", {
    error: error,
    errorMessage: error.message,
  });
}

app.listen(4000, () => {
  logger.info('{app} is up on port {port}, {success}', {
    app: 'wev-server',
    port: 4000,
    success: true,
  });
});
