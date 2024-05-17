// Load modules 
const express = require('express');
const multer = require('multer');

// Initialize the Express app
const app = express();

// Configure multer for file uploads
const upload = multer({
    storage: multer.diskStorage({
        // Set the destination folder for uploaded files
        destination: function (req, file, cb) {
            cb(null, "uplods")
        },
        // Set the filename for uploaded files
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".png")
        }
    })
}).single('file_name'); // Specify the name of the form field that will hold the file

// File upload route 
app.post('/upload', upload, (req, res) => {
    res.send("file uploade Sucess");
})

// Start the server on port 9090
app.listen(9090, () => {
    console.log('Server is running on port 9090');
});
