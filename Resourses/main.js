/**
 * Main js file
 * The server runs from here
 */
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

//The file router.js construct the paths from which the server works
const router = require('./router');
const server = http.createServer(router);

server.listen(port, hostname, () => {
  console.log(`Hocus Pocus, there is the sitetus http://${hostname}:${port}/home.html`);  
});