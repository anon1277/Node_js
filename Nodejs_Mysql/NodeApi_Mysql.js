const express = require('express');
const con = require('./config'); // Import the database connection
const app = express();

// Define a GET endpoint '/orders'

app.use(express.json())
app.get('/orders', (req, res) => {
    // Execute a query to select all records from the 'orders' table
    con.query("select * from orders", (err, result) => {
        if (err) {
            // Send the error response if the query fails
            res.send(err);
        } else {
            // Send the query result as the response
            res.send(result);
        }
    });
});


// Define a GET endpoint '/orders'
app.post('/orders', (req, res) => {
    let data = req.body;
    // Execute a query to select all records from the 'orders' table
    con.query('insert into  orders SET ?',data , (err, result ,fields) => {
        if (err) {
            // Send the error response if the query fails
            res.send(err);
        } else {
            // Send the query result as the response
            res.send(result);
        }
    });
});

// Start the server and listen on port 9090
app.listen(9090, () => {
    console.log('Server is running on port 9090');
});
