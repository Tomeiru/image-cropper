const fs = require('fs')
const requestManager = (request, response) => {
    console.log(`[Request Manager] Request received for ${request.url}`)
    if (request.url === "/") {
        console.log("   Handling the request as the main page");
        return fs.readFile('src/upload/upload.html', (err, data) => {
            if (err) throw err;
            response.writeHead(200, {'Content-Type': 'text/html'});
            return (response.end(data));
        });
    }
    if (request.url === "/crop") {
        console.log("   Handling the request as the cropping page")
        return fs.readFile('src/crop/crop.html', (err, data) => {
            if (err) throw err;
            response.writeHead(200, {'Content-Type': 'text/html'});
            return (response.end(data));
        });
    }
    if (request.url.endsWith('.js')) {
        console.log("   Handling the request as a JS Script");
        return fs.readFile(`.${request.url}`, (err, data) => {
            if (err) throw err;
            response.writeHead(200, {'Content-Type': 'text/javascript'});
            return response.end(data);
        })
    }
    if (request.url === "/favicon.ico") {
        return console.log("   Handling the request as the website icon");
    }
    console.log("   Handling the request as an invalid request");
    return response.end('Invalid request');
}

module.exports = requestManager;