#!/usr/bin/node
const http = require('http')
const fs = require('fs').promises

const host = 'localhost'
const port = 8080

const requestListener = (req, res) => {
  fs.readFile(__dirname + '/index.html').then(contents => {
    res.setHeader('content-type', 'text/html')
    res.writeHead(200)
    res.end(contents)
  })
}

const server = http.createServer(requestListener)
server.listen(port, host, () => {
  console.log('Server is running on ' + host + ':' + port)
})
