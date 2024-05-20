const express = require('express');
const EventEmitter = require('events');

// Initialize an instance of EventEmitter
const events = new EventEmitter();

// Create an instance of Express
const app = express();

// Initialize a counter variable
let count = 0;

// Listen for the 'Apicall' event and increment the counter each time the event is emitted
events.on('Apicall', () => {
    count++;
    console.log('Apicall Called', count);
});

// Define a GET endpoint '/test'
app.get('/test', (req, res) => {
    console.log('Test Api Called');
    res.send('test Api Call');
    // Emit the 'Apicall' event
    events.emit('Apicall');
});

// Start the server and listen on port 9090
app.listen(9090, () => {
    console.log('Server is running on port 9090');
});
