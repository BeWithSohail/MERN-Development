const express = require("express");
    const path = require("path");
    const app = express();
    const port = 4000;
    const router = require("./userRouter")
    // const bodyParser = require('body-parser');
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/api/v1", router);

    app.get('/', (req, res) => {
        // res.send("<h1> welocome to express js tutorials  </h1> <h1> welcome to Home Page </h1>");
        console.log("path file ", path.join(__dirname,"./index.html"))
        res.sendFile(path.join(__dirname + "/index.html"))
    });

        app.get('/api/v1/userdata', (req, res) => {
            res.json({
                name: "sohail",
                email: "sohail@gmail.com",
                password:"encrypted"       
            })
        });

    // app.post("/api/v1/register", (req, res) => {
    //     const userName = req.body.name;
    //     const userEmail = req.body.email;
    //     const userPassword = req.body.password;

    //     res.json({
    //         success: true,
    //         // name: userName,
    //         // email: userEmail,
    //         // password:userPassword
    //     })
// });
    

    app.get("/style.css", (req, res) => { 
         console.log("path css file ", path.join(__dirname,"/style.css"))
        res.sendFile(path.join(__dirname , "/style.css"))    
    })

    app.get('/about', (req, res) => {
        res.send("<h1> welcome to About Page </h1>")
    });
    app.get('/contact', (req, res) => {
        res.send("<h1> welcome to Contact  Page </h1>")
    });

    // app.post('/app/v2/api', (req, res) => { 
    //     res.send(`<h1> Done</h1>  <br />  <h1> Hello ${req.body.name} <br> Your email is ${req.body.email} and your password is ${req.body.password} </h1>`);
    //     // console.log(req.body)
    // })
    app.listen(port, () => {
        console.log(`srver is working on ${port}`);
    });


    // CRUD (CREATE, REACT, UPDATE, DELETE);
    // C: - CREATE (POST HTTP METHOD) 
    // R: - READ  (GET HTTP METHODS)
    // U: - UPDATE (PUT HTTP METHODS)
    // D:-  DELETE (DELETE HTTP METHODS)