const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', function connection(ws) {
    console.log('New client connected.');

    ws.on('message', function incoming(message) {
        console.log('Received message:', message);

        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', function () {
        console.log('Client disconnected.');
    });
});

console.log('Server started on port 3000.');
