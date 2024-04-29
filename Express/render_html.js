// const express = require('express');
// const path = require('path');

// const app  = express();

// const public_path = path.join(__dirname, 'public')

// console.log(public_path);


// // app.use(express.static(public_path))


// app.get('/index' , (req,res)=>{
//     res.sendFile(`${public_path}/index.html`)
// })



// app.get('*' , (req,res)=>{
//     res.send("page not found");
// })
// app.listen(5000);



const express = require('express')

const app = express();

const port = 8050
app.get('/test' , (req ,res  )=>
{
    res.send("This Is Site is Under Maintanace")
});

app.get('/about' , (req ,res  )=>
{
    res.send(`

    <br />
    <input type="text" placeholder="Email" value="${req.query.name}">
    <input type="tel" id="phone" name="phone" value="${req.query.phone}"  placeholder="123-45-678">
    <a href="/json">Json View</a>
    `)
});

app.get('/json' , (req ,res  )=>
{
    res.send(
        {
            name : "Hacker" ,
            msg : "Welcome to ther wordl of Hacking"
        }
    )
});

app.listen(port);