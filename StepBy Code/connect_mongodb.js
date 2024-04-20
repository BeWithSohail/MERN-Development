
// Step1
// or as an es module:
// import { MongoClient } from 'mongodb'
// const { MongoClient } = require('mongodb');

// // Connection URL
// const url = "mongodb://127.0.0.1:27017/";
// const client = new MongoClient(url);

// // Database Name
// const dbName = "Node_Tutorials";

// Step1
// async function dbConnection()
// {
//       // Used connect method to connect to the server
//     await client.connect();
//     console.log('Connected successfully to server');
//     const db = client.db(dbName);
//     const collection = db.collection('Data');
//     const result =  await collection.find({}).toArray();
//     console.log(result);
//     return "Done";
// }


// main();
// Step 1
// dbConnection().then((response) => {
//     console.log(response);
// }).catch((err) => {
//     console.log("error message", err)
// }).finally(() => {
// client.close();
// })

//  Step 2
// async function dbConnection()
// {
//       // Used connect method to connect to the server
//     await client.connect();
//     console.log('Connected successfully to server');
//     const db = client.db(dbName);
//     const collection = db.collection('Data');
//     return collection;
// }

// Step 2
// dbConnection().then((response) => {
//     response.find().toArray()
//     .then((result) => {
//         console.log(result);
//     }).catch((err) => {
//         console.log("error message", err)
//     }).finally(() => {
//     client.close();
//     })
// })





// Step3 in mongodb.js putting all function and all that in separate file 
const dbConnection = require("./mongodb");

// Step 3
dbConnection().then(({ client, collection }) => {
    collection.find().toArray()
        .then((result) => {
            console.log(result);    
        })
        .catch((err) => {
            console.error("Error fetching documents:", err);
        })
        .finally(() => { 
            client.close();
            console.log('Connection closed successfully');
        });
})
.catch((err) => {
    console.error("Error connecting to the database:", err);
});