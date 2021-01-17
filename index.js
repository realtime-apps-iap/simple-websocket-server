// built in modules
const http = require('http');
const path = require('path');

// external dependencies
const WebSocket = require('ws');
const express = require('express');

// for serving static webpages with express
const app = express();
const server = http.createServer(app);
const root = path.resolve(__dirname);
app.use(express.static(root + '/public'));

// for our websocket server
const wss = new WebSocket.Server({ server });

// listens to connection event on the websocket server
// and calls a handler with a WebSocket object which
// represents the websocket connection between the client and the server
wss.on('connection', function (ws) {
    // listens to a message event on the websocket connection
    // and calls a handler with the contents of the message
    ws.on('message', function (message) {
        // because js strings don't have a built in reverse method
        const reversedMessage = message.split("").reverse().join("");

        // send reversed message back to client
        ws.send(reversedMessage);
    })
})

// listen on localhost port 8080 for requests
server.listen(8080, "127.0.0.1", () => {
    console.log(`Starting server on port 8080`);
});