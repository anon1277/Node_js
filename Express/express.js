 const express = require('express');
 const app = express();

app.get('' ,(req, res)=>{
    console.log("request send by user:" , req.query.name)
    res.send("welcom to the home page " + req.query.name);
});

app.get('/about' ,(req, res)=>{
    res.send("welcom to the about page");
});

app.get('/help' ,(req, res)=>{
    res.send("welcom to the help page");
});

app.listen(5000);