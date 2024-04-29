const http = require('http');
const fs = require('fs');


const home = fs.readFileSync('home.html')
const dashboard = fs.readFileSync('dashboard.html')
const shortcuts = fs.readFileSync('home.html')
const overview = fs.readFileSync('home.html')
const contact = fs.readFileSync('contact.html')
const about = fs.readFileSync('about1.html')
const hostname = '127.0.0.1';
const port = 8080;
const server = http.createServer((req, res) => {
    url = req.url;
    res.writeHead(200, { 'Content-type': 'text/html' });
    if (url == '/') {
        res.end(home);
    }
   else if (url == '/dashboard') {
        res.end(dashboard);
    }
    else if (url == '/shortcuts') {
        res.end(shortcuts);
    }
    else if (url == '/overview') {
        res.end(overview);
    }
    else if (url == '/contact') {
        res.end(contact);
    }
    else if (url == '/about') {
        res.end(about);
    }
    else{
        res.end('not found ');
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);

});
