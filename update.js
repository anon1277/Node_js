const dbConnect = require('./mongoDbConnect');


const UpdateData = async () => {
    let db = await dbConnect();
    let result = db.updateMany(
        { name: 'lava' }, {
            $set: {
                name: 'test lava',
                country: 'india test',
                model: 'lava test',
                price: 33332

            }
    });
}

//call delete data
UpdateData();