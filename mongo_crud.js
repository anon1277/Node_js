
// // module

const  dbConnect = require('./mongoDbConnect')
// const { MongoClient } = require('mongodb');
// const databse = "warehouse";

// //MOngo Path 
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);


// // Function for getdata
// async function dbConnect() {
//     let result = await client.connect();
//     let db = result.db(databse);
//     return db.collection('shops1');

// }

// call Function 
// dbConnect().then((resp) => {

//     resp.find({}).toArray().then((data) => {
//         console.log("data", data);
//     })
// })


const main = async ()=>{
    console.log("------------------Main Function Called---------------")
    let data =  await dbConnect();
    data = await data.find().toArray();
    console.log("Data : " ,data);

}


main();