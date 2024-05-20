const mysql = require('mysql');

// Create a connection to the MySQL database
const con = mysql.createConnection({
    host: "localhost",       // Database host
    user: "root",            // Database user
    password: "password",    // Database password
    database: "laravel_e_com_test" // Database name
});

// Connect to the database
con.connect((err) => {
    if (err) {
        // Log the error if the connection fails
        console.log(err);
    } else {
        // Log 'Connected' if the connection is successful
        console.log("Connected");
    }
});

// Export the database connection
module.exports = con;
