const http = require('http')

const requestManager = require('./requestManager')
const PORT = 8080

const server = http.createServer(requestManager)

server.listen(PORT, (err) => {
    if (err)
        return console.log(`[Server] Server couldn't launch due to a critical error: ${err}`)
    console.log(`[Server] Server is listening on port ${PORT}`)
});