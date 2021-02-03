# Simple WebSocket Server Tutorial

## About
This is a simple demonstration of a WebSocket server that receives messages from clients, reverses them and sends them back to the clients.

## Directory Structure
```
simple-websocket-server
|- node_modules
|- public
|  |- index.html    // simple client code
|---- index.js      // simple server code
|---- package.json
```

## Instructions
-   Install the dependencies using `npm install` or `yarn install`
-   Run the server using `node index.js`

## Interacting with the Server
### On browser console
With the server running, crack open your browser dev tools and enter the following:

```javascript
// creates the WebSocket Object and opens the connection with the server
const ws = new WebSocket("ws://localhost:8080");

// listens for message events on the WebSocket object and print it to the console.
ws.addEventListener("message", function(event){
	// the contents of the message are in the data property
    // of the MessageEvent object
	const data = event.data;
	console.log(data);
})
```

and then send a message like so:

```javascript
// send a message to the WebSocket server!
ws.send("Risky risky wiggy wiggy this is an emergency.");
```

### With simple client
With the server running, open the simple client at http://localhost:8080 and enter your message into the chat box!
