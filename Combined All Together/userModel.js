const mongoose = require('mongoose');

// Define the schema for a user document
const studentSchema = new mongoose.Schema({
name: String,
  age: Number,
  email: String,
});

// Create a model from the schema
const Student  = mongoose.model('students', studentSchema);

module.exports = Student;
