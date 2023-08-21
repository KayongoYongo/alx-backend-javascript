const http = require('http');
const host = '127.0.0.1';
const PORT = 1245;

const app = http.createServer((req, res) => {
  // Set the response headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Hello Holberton School!\n');
  });

app.listen(port, host, () => {});

module.exports = app;
