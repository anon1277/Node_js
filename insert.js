const dbConnect = require('./mongoDbConnect');

const insertdata = async () => {
    const db = await dbConnect();
    const result = await db.insertMany(
        // Single data insert
        // name: 'lava',
        // country: 'india',
        // model: 'lava',
        // price: 33332


        // multiple data Insert
        [
            {
                name: 'lava',
                country: 'india',
                model: 'lava',
                price: 33332
            }
            ,
            {
                name: 'lava 2',
                country: 'india',
                model: 'lava',
                price: 33332
            }
            ,
            {
                name: 'lava 3',
                country: 'india',
                model: 'lava',
                price: 33332
            }
        ]

    )

    if (result.acknowledged) {
        console.log("data Inserted Success")
    }
    else {
        console.log("data Inserte Error")
    }
}


insertdata();       