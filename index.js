const express = require('express');
const loggingMiddleware = require('./loggingMiddleware');
const log = require('./logger');

const app = express();
const PORT = 3000;

app.use(loggingMiddleware);

app.get('/', (req, res) => {
  log('RouteHandler', 'info', 'express-app', 'Processing GET / request');
  res.send('Hello World!');
});

app.post('/submit', (req, res) => {
  log('RouteHandler', 'info', 'express-app', 'Processing POST /submit request');
  res.status(201).send('Submit successful');
});

app.listen(PORT, () => {
  log('Server', 'info', 'express-app', `Server started on port ${PORT}`);
  console.log(`Server listening on port ${PORT}`);
});
