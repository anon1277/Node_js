//MOdules
const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const port = 8070;

// set view engine
app.set('view engine' ,'ejs');

//construct Path 
const public_path = path.join(__dirname ,'public_test') 

console.log(public_path);

//access static files
app.use(express.static(public_path));

//routes
app.get('/home' ,(req ,res)=>{
    res.sendFile(`${public_path}/index.html`)
})


//routes
app.get('/profile' ,(req ,res)=>{
    const user = {
        name : "anon" ,
        email : "anon" ,
        city : ['unknown' ,'unknown2' ,'unknown3'] ,

    }
    res.render('profile' , {user});
})

app.get('*' ,(req ,res)=>{
    res.sendFile(`${public_path}/not_found.html`)
})

//listedn on port 
app.listen(port);
