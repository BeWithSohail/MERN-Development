// Using Mongoose 

/* 
 This line imports the Express.js framework,
 allowing us to create and configure an Express application.  (Line : 06)
*/

const express = require('express');

/* 
  It creates an instance of the Express application, which we
 can use to define routes, middleware, and configure other settings.  (Line : 13)
*/

const app = express();
/*
This line defines the port number that the
Express application will listen to for incoming 
HTTP requests.In this case, the application will listen on port 4000.  (Line : 20)
*/

const port = 5000;

/*
This line sets up middleware in the Express application to parse JSON request bodies.
 It enables the application to automatically parse incoming request bodies with JSON 
 payloads and populate the req.body property with the parsed JSON data. (Line : 27)
*/
app.use(express.json());

/*
This line sets up middleware in the Express application to parse URL-encoded 
request bodies. It enables the application to parse incoming request bodies with 
URL-encoded payloads and populate the req.body property with the parsed data. (Line : 35)
*/

app.use(express.urlencoded(
    { extended: true }
));

/* 
This line imports the Mongoose library, which provides a way to interact
with MongoDB databases using object modeling and schema validation. (Line : 43)
*/
const mongoose = require('mongoose');

/*
This line defines the MongoDB connection URI. 
It specifies the address (127.0.0.1) and port (27017) of the MongoDB server,
as well as the name of the database (Node_Tutorials) to connect to.  (Line : 51)
*/

const mongoURI = 'mongodb://127.0.0.1:27017/Node_Tutorials';

/* 
This block of code establishes a connection to the MongoDB database specified by the mongoURI.
It uses Mongoose's connect() method, passing in the connection URI and options object. 
If the connection is successful, it logs a success message and calls the checkCollectionData() function.
(Line : 59)
*/  
mongoose.connect(mongoURI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log("MongoDB Connection established Successfully");
    checkCollectionData();
}).catch((err) => { 
    console.log("MongoDB Connection error", err.message);
    process.exit(1); // Exit with failure
})


/* 
This line defines a Mongoose schema for the data stored in the MongoDB collection named "Data". 
The schema specifies the structure of the documents in the collection,
including the fields name, email, and age, along with their respective data types.  (Line : 78)
*/

const DataSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
}, { collection: "Data" });


/* 
This line defines a Mongoose model for interacting with the "Data" collection in the MongoDB database. 
The mongoose.model() function takes two arguments: the name of the model (Data) and the schema (DataSchema)
defining the structure of the documents. (Line : 91)
*/

const Data = mongoose.model("Data", DataSchema);

/*
This block of code defines an asynchronous function checkCollectionData() to retrieve and log 
data from the "Data" collection. It uses Data.find() to query all documents from the collection
and then logs the retrieved data to the console. If an error occurs during the data
retrieval process, it logs an error message. (Line : 101)
*/

const checkCollectionData = async () => {
    try {
        const data = await Data.find();
        console.log("Data is", data);
    } catch (err) { 
        console.error('Error retrieving data from collection:', err.message);
    }
}

/* 
This block of code defines a route handler for handling GET requests to the /todos endpoint.
When a GET request is received at /todos, it queries all documents from the
"Data" collection using Data.find() and sends the retrieved data as a JSON response to the client.
If an error occurs during the data retrieval process, it sends a 500 Internal Server Error response
with an error message.
*/

app.get('/todos', async (req, res) => {
    try {
        const data = await Data.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


/* */

// POST request to create a new user
app.post('/todos', async (req, res) => {
    // Create a new todo based on request body
    const newData = new Data({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    });
    try {
        const newDataSaved = await newData.save();
        res.status(201).json(newDataSaved);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT request to update data by ID
app.put('/todos/:id', async (req, res) => {
    try {
      const updatedData = await Data.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (updatedData) {
        res.json(updatedData);
      } else {
        res.status(404).json({ message: 'Data not found' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});
  
  // DELETE request to delete data by ID
app.delete('/todos/:id', async (req, res) => {
try {
    const deletedData = await Data.findByIdAndDelete(req.params.id);
    if (deletedData) {
    res.json({ message: 'Data deleted successfully' });
    } else {
    res.status(404).json({ message: 'Data not found' });
    }
} catch (err) {
    res.status(500).json({ message: err.message });
}
});

// For CREATING  Multiple GET,POST Request 
// For CREATING  Multiple GET,POST Request 
// For CREATING  Multiple GET,POST Request 
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model('User', userSchema);

module.exports = User;
// GET request to fetch all users
app.get('/', async (req, res) => { 
res.send("hello")
})

app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST request to create a new user
app.post('/users', async (req, res) => {
    // Create a new user based on request body
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


app.listen(port, () => {
    console.log(`Server is listening at https://localhost:${port}`);
});
  
/* */
/* */
/* */
/* */
/* */
/* */