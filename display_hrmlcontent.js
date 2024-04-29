const http = require('http');
const fs = require('fs');

const home = fs.readFileSync('home.html')

let data = fs.readFileSync('demo.html');


const server = http.createServer((req ,res) =>{
    res.writeHead(200, {'Content-type' : 'text/html'});
    res.end(data);
} )

server.listen(8000, '127.0.0.1', () => {
    console.log("Server is running on localhost");
});
