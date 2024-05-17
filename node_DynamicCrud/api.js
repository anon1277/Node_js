// Load Modules
const expres = require('express');
const dbConnect = require('./dbConnect');
const mongodb = require('mongodb');
const { name } = require('ejs');
// const { MongoClient } = require('mongodb');

// app for routes
const app = expres();

// Convert Postman Request data to Json
app.use(expres.json());

// Get API
app.get('/', async (req, res) => {
    let data = await dbConnect();

    data = await data.find().toArray();

    res.send(data);
});

// Post API
app.post('/', async (req, res) => {

    let data = await dbConnect(); // Establish Database Connection
    let result = await data.insertOne(req.body); // Extract data from the request and store it in the database 
    res.send(result); // Return the result

});

// Put API
app.put('/:name', async (req, res) => {

    let data = await dbConnect(); // Establish Database Connection
    let result = data.updateOne(
        { name: req.params.name },
        {
            $set: req.body
        }
    ); // Extract data from the request and update in the database 
    res.send(result); // Return the result

});

// Delete API
app.delete('/:id', async (req, res) => {

    let data = await dbConnect(); // Establish Database Connection
    let result = await data.deleteOne(
        { _id: new mongodb.ObjectId(req.params.id)}
    ); // Extract data from the request and update in the database 
    res.send(result); // Return the result

});

// Listen on Server port 8090 
app.listen(8090);
