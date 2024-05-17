// load Modules
const express = require('express');

// Import Config File
require('./config');

const Shops1 = require('./product');


// App
const app = express();

// get data from request
app.use(express.json())

// Create API endpoint
app.post('/create-product', async (req, res) => {
    try {
        let data = new Shops1(req.body);
        let result = await data.save();
        res.send({ message: 'Data inserted successfully', result });
    } catch (error) {
        res.status(500).send({ message: 'Error inserting data', error });
    }
});

// List Api Endpoint
app.get('/product-list', async (req, res) => {
    try {
        let data = await Shops1.find();
        // let result = await data.save();
        res.send(data);
    } catch (error) {
        res.status(500).send({ message: 'Error Listing  data', error });
    }
});

// Delete Api Endpoint
app.delete('/product-delete/:_id', async (req, res) => {
    try {
        let data = req.params;
        let result = await Shops1.deleteOne({ _id: data });
        if (result.deletedCount > 0) {
            res.send({ message: 'Product deleted successfully', result });
        } else {
            res.status(404).send({ message: 'Product not found', result });
        }
    } catch (error) {
        res.status(500).send({ message: 'Error deleting product', error });
    }

});


// update Api Endpoint
app.put('/product-update/:_id', async (req, res) => {
    try {
        let data = req.params;
        let result = await Shops1.updateOne(
            data,
            {
                $set: req.body
            }
        );
        if (result.deletedCount > 0) {
            res.send({ message: 'Product Updated successfully', result });
        } else {
            res.status(404).send({ message: 'Product not found', result });
        }
    } catch (error) {
        res.status(500).send({ message: 'Error Updating product', error });
    }

});

// Server Port
app.listen(9090, () => {
    console.log('Server is running on port 9090');
});


