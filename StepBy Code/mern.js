const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const hostName = "localhost";
// const data = require("./data/data.json");
const path = require("path");
const dataPath = path.join(__dirname, "data", "data.json");
const jsonData = require(dataPath);
console.log("data path", dataPath);
app.use(express.static(dataPath));
app.set('view engine', 'ejs');

app.get("/",((request, response) => {
    response.send('Hello World');
}));

app.get("/about",((request, response) => {
    // response.send(dataPath);
    response.json(jsonData);
}));

app.get('/profile', (req, res) => {
    const user = {
        name: "sohail",
        email: "sohailalam@gmail.com",
        address:"new delhi"
    }
    res.render('profile', {user});
  });

app.listen(PORT,hostName, () => {
    console.log(`server is listening on https://${hostName}:${PORT}`);
});

// Template Engine 