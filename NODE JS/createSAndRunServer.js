const fs = require('fs');
const http = require('http');
const path = require('path');
const PORT = 3000;
const hostName = 'localhost';
console.log('Host Name:', hostName);
console.log('PORT:', PORT);

// Object to store the content of each HTML page
const pages = {};

// Function to read HTML files asynchronously
function readHTMLFile(filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) { 
            throw err;
        }
        // Store the content of the HTML page in the pages object
        pages[filename] = data;
        console.log(`${filename} loaded`);
    });
}

// Read each HTML file asynchronously
readHTMLFile('./index.html');
readHTMLFile('./about.html');
readHTMLFile('./contact.html');

// Create the HTTP server
const server = http.createServer((req, res) => {
    // Set the Content-Type header to HTML
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Serve the requested page based on the URL
    if (req.url === '/') {
        res.end(pages['./index.html']);
    } else if (req.url === '/about') {
        res.end(pages['./about.html']);
    } else if (req.url === '/contact') {
        res.end(pages['./contact.html']);
    } else {
        // Handle 404 Not Found
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

console.log("pages", pages)

// Start the server
server.listen(PORT, hostName, () => {
    console.log(`Server listening on http://${hostName}:${PORT}`);
});


// console.log("Directory Name", __dirname)
// console.log("File Name", filename)