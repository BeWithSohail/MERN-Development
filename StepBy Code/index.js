
const fs = require("fs").promises;
var colors = require('colors');
import('chalk').then(module => {
    const chalk = module.default;
    
    // Now you can use chalk here
    console.log(chalk.blue('Hello, world!'));
  }).catch(error => {
    // Handle errors if the module cannot be imported
    console.error('Error importing chalk:', error);
  });
  

console.log("directory name", __dirname);


// function dataWritten() { 
//     console.log("data written")
// }
fs.writeFile("demo2.txt", "abcdefgh");

// console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('OMG Rainbows!'.rainbow.red); // rainbow
