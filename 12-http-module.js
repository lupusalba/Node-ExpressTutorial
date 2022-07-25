const http = require('http');

const server = http.createServer((req,res) => {
  if (req.url === '/') {
    res.end('Welcome to home page')
  } else if (req.url === '/about') {
    res.end('about page')
  } else {
    res.end(`
    <h1>wrong adress!</h1>
    `)
  }
})

server.listen(5000)