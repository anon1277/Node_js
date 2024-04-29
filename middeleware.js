// load modules
const express = require('express');
const route = express.Router();

const app = express();

const port = 8071;

// Middleware
const ReqFiletr = (req, res, next) => {
    if (!req.query.age) {
        res.send("Please Enter Age");
    }
    else if (req.query.age<18) {
        res.send("YOu are under age");
    }
    else {
        next();
    }
}

// use filter
// app.use(ReqFiletr);

route.use(ReqFiletr);

// Specific Route apply Middleware
app.get('/', ReqFiletr,(req, resp) => {
    resp.send("Welcome to Home page");
});


//Grup Route level  
route.get('/data', (req, resp) => {
    resp.send("Welcome to on data page");
});



route.get('/contact', (req, resp) => {
    resp.send("Welcome to on contact page");
});



app.get('/status', (req, resp) => {
    resp.send("Welcome to on status page");
});



app.get('/service', (req, resp) => {
    resp.send("Welcome to on service page");
});

// res.send("welcom to the about page");

app.use('/',route)

// server run on port
app.listen(port);

console.log("Server Runings at port ::", port)
