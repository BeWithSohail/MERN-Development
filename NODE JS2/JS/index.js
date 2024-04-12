console.log("Welcome to Node JS ");

// NPM is a package manager for the js library

// let a = 200;

const a = {
    addition: (a, b) => {
        return a + b;
    },
    substraction: (a, b)=>{
        return a - b;
    },
    multiplication: (a, b) => { 
        return a * b;
    }
}

module.exports = a;


const fs = require('fs');
const pathFile = require("path");
const http = require("http");
const hostName = "localhost";
const PORT = 4000;


//  By Default this is a asynchrous function

//ReadFile
fs.readFile("./sample.txt", "utf-8", (err, data) => {
    if (err) {
        throw err;
    } else {
        console.log(data);
    }
});

//WriteFile
let text = "this is another sample file";
fs.writeFile("./sample2.txt", text, () => {
    console.log("File Iitialized");
});

// Path Extension Name
// const anchor = pathFile.extname("../../NODE JS2/JS/index.js");
// console.log("Path File", anchor);

// https methods
let pages = {};
console.log("pages", pages)
let readHtmlFile = (fileName) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
        if (err) throw err;
        pages[fileName] = data;
        console.log("pages", pages)
        console.log(`${fileName} loaded`)
    })
}
readHtmlFile('../index.html');
readHtmlFile('../about.html');
readHtmlFile('../404.html');

// const home = fs.readFile("../index.html", "utf8", () => {
    
// });

// CREATING A SERVER
const server = http.createServer((request,response) => {
    // response.end("working");
    response.writeHead(200, { 'Content-Type': 'text/html' });    
    if (request.url === "/") {
        response.end(pages['../index.html']);
    } else if(request.url === "/about"){
        response.end(pages['../about.html']);
    } else {
        response.end(pages['../404.html']);
    }

})


// listen() method look like this [ server.listen(port[, hostname][, backlog][, callback]) ]

server.listen(PORT, hostName, (err, result) => {
    if (err) {
        console.log("something went wrong")
    } else {
        console.log("Result is ", result)
    }
    console.log(`Server is working on http://${hostName}:${PORT}`);
});


