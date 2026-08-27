const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log('Visit: http://localhost:' + PORT + req.url);

  if (req.url === '/') {
    console.log('Response: Welcome to Node Server');
    res.write('Welcome to Node Server');
    res.end();
  } else if (req.url === '/about') {
    console.log('Response: About Page');
    res.write('About Page');
    res.end();
  } else if (req.url === '/contact') {
    console.log('Response: Contact Page');
    res.write('Contact Page');
    res.end();
  } else {
    res.statusCode = 404;
    console.log('Response: 404 Error Message');
    res.write('404 Error Message');
    res.end();
  }
});

server.listen(PORT, () => {
  console.log('Run: node server.js');
});
