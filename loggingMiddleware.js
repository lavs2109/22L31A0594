
const log = require('./logger');

const loggingMiddleware = (req, res, next) => {
  const { method, originalUrl } = req;
  const stack = 'RequestMiddleware';
  const level = 'info';
  const packageName = 'express-app';
  const message = `Incoming request: ${method} ${originalUrl}`;

  log(stack, level, packageName, message);

  
  res.on('finish', () => {
    const responseMessage = `Response sent with status ${res.statusCode} for ${method} ${originalUrl}`;
    log(stack, level, packageName, responseMessage);
  });

  next();
};

module.exports = loggingMiddleware;