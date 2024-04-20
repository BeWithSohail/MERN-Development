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
const unifiedTop = {
  useNewUrlParser: true,
  useUnifiedTopology: true
  }

// Connect Mongoose here
mongoose.connect(mongoURI,unifiedTop).then(() => {
    console.log("MongoDB Connection established Successfully");
}).catch((err) => { 
    console.log("MongoDB Connection error", err.message);
    process.exit(1); // Exit with failure
})

//SCHEMA 

const dataSchema = new mongoose.Schema(
  {
  name: String,
  email: String,
  mobile:Number
  }
)

// MODAL 
const user = mongoose.model("Data", dataSchema);

app.post('/user', async (req, res) => {
  // Create a new user based on request body
  try {
      // res.send("abc");
      const newUser = await user.create(req.body);
      res.status(201).json(newUser);
  } catch (err) { 
      res.status(400).json({ message: err.message });
  }
});


app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
