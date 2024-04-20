const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, "CRUD");
const filePath = `${dirPath}/apple.txt`; 

fs.writeFileSync(filePath, "this is an example of apple");

// CRUD (CREATE, READ, UPDATE, DELETE)
// CRUD OPERATION USING NODE  JS

// READ FILE ()
// fs.readFile(filePath, "utf8", (err, item) => {
//     console.log(item);
// });

// UPDATE FILE
// DELETE FILE

// CREATE FILE
fs.readFile(filePath, "utf8", (err, item) => {
    console.log(item);
});