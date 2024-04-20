
// Step3
// or as an es module:
// import { MongoClient } from 'mongodb'
const { MongoClient } = require('mongodb');

// Connection URL
const url = "mongodb://127.0.0.1:27017/";
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
const client = new MongoClient(url, options);

// Database Name
const dbName = "Node_Tutorials";

async function dbConnection()
{
      // Used connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('Data');
    return { client, collection };
}


module.exports = dbConnection;
