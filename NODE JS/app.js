// const a = require("./index")
// const final = require("./index");
// console.log(a);

// const object = require("./index");

// object.addition(2, 5);
// object.average(10, 12);

// Local Modules: These are custom modules created by users and stored locally in the project directory. They can be imported using relative paths (./ or ../) or absolute paths.
// this is called file based module

// Types of Module in Node
// 1) Local Module
// 1) Third-party Modules
// 1) Built In Modules
// 1) Local Module

// 1) Built In Modules
// fs (File System): Provides functions for working with the file system, such as reading and writing files, creating directories, etc.



// example of fs file system
// which asynchronously reads the entire contents of a file

//  ReadFile 
const fs = require("fs");
fs.readFile("./sample.txt", 'utf8', (error, data) => {
    if (error) {
        throw error;
    }
    console.log(data);   
});

console.log("Run later");

//  Write File
const data = "Hello, Sohail I hope you are doing very well All Good";
const filePath = "./sample.txt"
const name = "sohail alam";
// fs.writeFile("./intro.txt", " hello " + name, () => {
//     console.log("file written  succesfully");
// });
fs.writeFile(filePath, data, () => {
    console.log("written succesfully");
});


// Path into Node JS 

const path = require("path");
// const fullPath = path.join(__dirname, 'folder', 'file.txt');
// console.log("Full Path is ", fullPath);
const fileName = path.basename('D:\MERN\NODE JS');
console.log("File Name is ", fileName);
// console.log("The Path is ", path);


const os = require("os");
const totalMemories = os.totalmem();
console.log("Total Memory is ", totalMemories);

console.log("nodemon runing");

// http module
// console.log("hhtps method", http)
// How to make a server in node

const PORT = 8000;
const hostName = "localhost";
const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("<h1> Welcome to Home Page </h1>")
    }
    else if (req.url === "/about") {
        res.end("<h1> About Page </h1>");
    } else if(req.url === "/services") {
        res.end("<h1> Service Page </h1>");
    } else if (req.url === "/contact") {
        res.end("<h1> Contact Page </h1>");
    } else {
        res.end("<h1> 404 Page Not Found  </h1>");
    }
});

server.listen(PORT, hostName, () => {
    console.log(`server listening on http://${hostName}:${PORT}`);
})





