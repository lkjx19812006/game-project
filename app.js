const http = require('http');
const app = require('./modules/index.js');
const internalIp = require('internal-ip');
const { logger, closeLog4js } = require('./common/log');

const host = internalIp.v4.sync();
const port = 3300;

const server = http.createServer(app);

server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error
  }
  switch (error.code) {
    case 'EACCES':
      logger.error('requires elevated privileges');
      closeLog4js('server error');
      break;
    case 'EADDRINUSE':
      logger.error('%s is already in use', error.port)
      closeLog4js('server error')
      break
    default:
      throw error
  }
})

server.on('close', () => {
  closeLog4js('server close')
})

server.on('listening', () => {
  let addr = server.address();
  logger.info('app startend: Listening on %s:%s', addr.address, addr.port);
})

server.listen(port, host);