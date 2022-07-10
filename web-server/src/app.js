import express from 'express';
import { logger } from './logger/logger.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// logger.info('dir name: {dirName}', { dirName: __dirname });
// logger.info('file name: {fileName}', { fileName: __filename });

const app = express();

const publicDirPath = path.join(__dirname, '../public');
logger.info('publicDirPath: {publicDirPath}', { publicDirPath });
app.use(express.static(publicDirPath));

// app.get('', (req, res) => {
//   const html = '<h1>Weather</h1>';
//   logger.info('[{route}] - {bodyHtml}', { route: '/', bodyHtml: html });
//   res.send(html);
// });

app.get('/help', (req, res) => {
  logger.info('[{route}]', { route: '/help' });
  res.send('Help page');
});

app.get('/about', (req, res) => {
  logger.info('[{route}]', { route: '/about' });
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

const port = 3000;
app.listen(port, () => {
  logger.info('{app} is up on port {port}', {
    app: 'wev-server',
    port: port,
  });
});
