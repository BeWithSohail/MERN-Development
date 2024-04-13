console.log("Testing success");
const express = require('express');
const app = express();
const port = 4001;
const server = "localhost";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mongoose 
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/MERN_Programming", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(() => {
    console.log("Congrats! You are Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is listening on http://${server}:${port}`);
    });
  })
  .catch((error) => { 
    console.log("Error: " + error);
  });


// This is how we insert data

const Student = require("./userModel");
// // Create a new user document
// const newStudents = new students({
//     name: 'John Doe',
//     email: 'john@example.com',
//     age: 30
// });
// // Save the new user to the database
// newStudents.save()
//   .then(savedUser => {
//     console.log('User saved:', savedUser);
//   })
//   .catch(error => {
//     console.error('Error saving user:', error);
//   });

// How can we find collection name and their value
// students.find()
//   .then((students) => {
//     console.log('All students:', students);
//   })
//   .catch((error) => {
//     console.error('Error finding students:', error);
//   });

// app.get('/', function (req, res) {
//   res.send('Hello World testing');
// });



// Student.find()
//   .then((students) => {
//     console.log('List of students:');
//     students.forEach((student, index) => {
//       console.log(`${index + 1}. ${student.name} - Age: ${student.age}, Email: ${student.email}`);
//     });
//   })
//   .catch((error) => {
//     console.error('Error finding students:', error);
// });

Student.find({ age: { $gt: 30 } })
  .then((students) => {
    console.log('Students with age greater than 30:', students);
  })
  .catch((error) => {
    console.error('Error finding students:', error);
  });

const documents = [
    { name: 'Alice', age: 25, email: 'alice@example.com' },
    { name: 'Bob', age: 35, email: 'bob@example.com' },
    { name: 'Charlie', age: 40, email: 'charlie@example.com' }
];

async function insertDocuments() {
    try {
        const result = await Student.insertMany(documents);
        console.log('Documents inserted successfully:', result);
    } catch (error) {
        console.error('Error inserting documents:', error);
    }
}

insertDocuments();