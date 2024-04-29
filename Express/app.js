const express  = require('express');

const path = require('path');

const app =  express();

app.use('/static' ,express.static('static'));
 
// set the template engine plug 
app.set('view engine' , 'pug');

//set the view directory 
app.set('views' , path.join(__dirname ,'views'));

//pug file route 


// ROUTES 

app.get('/index' , (req,res)=>{
    res.render('index.pug')
})


app.get('/demo', (req, res) => {
    res.status(200).render('demo', { title: 'Hey Anon', message: 'thank for using pug!' })
  })

app.get('/', (req ,res)=>{
    res.send("this is first expres app");
});

app.get('/about', (req ,res)=>{
    res.status(200).send("this is about page");
});

app.get('/404' , (req ,res)=>{
    res.status(400).send("not found")
})
app.post('/about'  ,(req ,res)=>{
    res.send("about using post request");
});

app.get('/contact', (req ,res)=>{
    res.send("this is contact page");
});

app.listen(8000 ,()=>{
    console.log("server started on port 80");
})