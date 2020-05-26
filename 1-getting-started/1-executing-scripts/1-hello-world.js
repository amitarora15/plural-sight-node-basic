const http = require('http');

let port = 4242;
const server = http.createServer((req, res) => {
  res.end('Hello World\n How are you \t Now new thing <br/> Hi Hi');
});

server.listen(port, () => {
  console.log('Server is running at...' + port);
});

