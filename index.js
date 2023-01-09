const http = require('http');
const fs = require('fs')
const port = 8080;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile('index.html', (error, data) => {
            if (error) throw error;
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data);
            return res.end; 
        })
    }
    else if (req.url === "/about") {
        fs.readFile('about.html', (error, data) => {
            if (error) throw error;
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data);
            return res.end; 
        })
    }
    else if (req.url === "/contact-me") {
        fs.readFile('contact-me.html', (error, data) => {
            if (error) throw error;
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data);
            return res.end; 
        })
    }
    else {
        fs.readFile('404.html', (error, data) => {
            if (error) throw error;
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data);
            return res.end; 
        })
    }
})

server.listen(port, (error) => {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log(`Server running at http://localhost:${port}/`)
    }
})
