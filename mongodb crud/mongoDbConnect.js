// module
const { MongoClient } = require('mongodb');
const databse = "warehouse";

//MOngo Path 
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);


// Function for getdata
async function dbConnect() {
    let result = await client.connect();
    let db = result.db(databse);
    return db.collection('shops1');

}


module.exports = dbConnect;