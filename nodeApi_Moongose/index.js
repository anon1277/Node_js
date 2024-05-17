// Load Modules
const express = require('express');

// Import Config File
require('./config');

// Import the Shops1 model
const Shops1 = require('./product');

// Initialize the Express app
const app = express();

// Middleware to parse JSON data from the request body
app.use(express.json())

// Create API endpoint to insert a new product
app.post('/create-product', async (req, res) => {
    try {
        let data = new Shops1(req.body);
        let result = await data.save();
        res.send({ message: 'Data inserted successfully', result });
    } catch (error) {
        res.status(500).send({ message: 'Error inserting data', error });
    }
});

// List API endpoint to get all products
app.get('/product-list', async (req, res) => {
    try {
        let data = await Shops1.find();
        res.send(data);
    } catch (error) {
        res.status(500).send({ message: 'Error listing data', error });
    }
});

// Delete API endpoint to delete a product by _id
app.delete('/product-delete/:_id', async (req, res) => {
    try {
        let data = req.params._id; // Corrected to get the _id value directly
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

// Update API endpoint to update a product by _id
app.put('/product-update/:_id', async (req, res) => {
    try {
        let data = req.params._id; // Corrected to get the _id value directly
        let result = await Shops1.updateOne(
            { _id: data },
            {
                $set: req.body
            }
        );
        if (result.nModified > 0) { // Corrected to check the number of modified documents
            res.send({ message: 'Product updated successfully', result });
        } else {
            res.status(404).send({ message: 'Product not found', result });
        }
    } catch (error) {
        res.status(500).send({ message: 'Error updating product', error });
    }
});


// Search API endpoint to find products by a search key
app.get('/product-search/:key', async (req, res) => {
    try {
        // Log the request body for debugging purposes
        console.log(req.body);

        // Extract the search key from the request parameters
        let searchKey = req.params.key;

        // Create a query object with conditions for string fields
        let query = {
            "$or": [
                { "name": { $regex: searchKey } },
                { "country": { $regex: searchKey } },
                { "model": { $regex: searchKey } }
            ]
        };

        // If the search key is a number, add a condition for the price field
        if (!isNaN(searchKey)) {
            query["$or"].push({ "price": searchKey });
        }

        // Search for products using the query object
        let data = await Shops1.find(query);

        // Send the search results back to the client
        res.send(data);
    } catch (error) {
        // Handle any errors that occur during the search
        res.status(500).send({ message: 'Error searching products', error });
    }
});


// Start the server on port 9090
app.listen(9090, () => {
    console.log('Server is running on port 9090');
});
