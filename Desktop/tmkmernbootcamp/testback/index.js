const express = require("express");

const app = express();


const port = 4000

app.get('/signout', (req,res) => {
    return res.send("you are signed out from this site");
});

app.get('/signup', (req,res) => {
    return res.send("you are signed up to this site");
});

app.get('/hitesh', (req,res) => {
    return res.send("hitesh uses instagram");
});

app.get('/login', (req,res) => {
    return res.send("you are in the login page");
});



app.get('/', (req,res) => {
     return res.send("this is home page ");
});

app.listen(port, () => {
    console.log("Server is up and running...");
});

// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })