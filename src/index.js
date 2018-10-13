import http from 'http';
import config from './config';

const server = http.createServer((req, res) => {
  const today = new Date().toISOString();
  res.end(`Today is ${today}`);
});

server.listen(config.port, config.hostname, () => {
  console.log(`Server running on http://${config.hostname}:${config.port}/`);
});