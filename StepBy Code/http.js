const http = require('http');
const { createServer } = require("node:http");
const fs = require("fs").promises;
const port = 3000;
const hostName = "localhost";

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("hello world")
})

server.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}/`);
});
