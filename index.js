const http = require('http');
const fs = require('fs');
const path = require('path');

const app = http.createServer((request, response) => {
  let { url } = request;
  if (request.url == '/') {
    url = '/index.html';
  }
  response.writeHead(200);
  response.end(fs.readFileSync(path.join(__dirname, url)));
});

app.listen(3000);
