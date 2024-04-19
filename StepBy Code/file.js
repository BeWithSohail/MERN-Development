const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "files");
console.log("directory path", dirPath)
// for (let i = 0; i < 5; i++) {
//         fs.writeFileSync(dirPath + `/demo${i}.txt`, `this is demo${i} file`)
// };

fs.readdir(dirPath, (err, data) => {
    console.log(data);
    data.forEach(file => console.log("this is",file));
});