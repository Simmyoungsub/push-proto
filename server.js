const app = require('express');
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const socket_client = require('socket.io-client');
const clientSocket = socket_client.connect('ws://localhost:3001');

server.listen(3000, () => {
    console.log('Socket IO Server listening');
});

io.on('connection', (socket) => {
    socket.on('login', () => {
        console.log(`Connect ${socket.id}`);
        socket.emit('login', 'connect!!!');
    });

    socket.on('disconnect', () => {
        console.log(`Disconnect ${socket.id}`);
    })
})

clientSocket.on('message', (cb) => {
    console.log(cb);
    io.emit('message', cb);
});

export default server;