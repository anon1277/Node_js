const dbConnect = require('./mongoDbConnect');


const deleteData = async ()=>{
    let db = await dbConnect();
    let result = await db.deleteOne({name : 'Samsun'})

    console.log(result);
}
deleteData();
