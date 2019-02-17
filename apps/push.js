const express = require('express');
const app = express();
import db from './db/db';
const socket = require('socket.io');
const http = require('http');
const HTTP_STATUS = require('http-status');
const server = http.createServer(app);
const io = socket(server);

app.get('/apis/list', (req, res, next) => {
    console.log('call apis/list')
    db.count++;
    return res.status(HTTP_STATUS.OK).end();
});

io.on('connection', (client) => {
    let timer = null;

    if (!timer) {
        timer = setInterval(() => {
            if (client) {
                console.log(db);
                client.emit('message', db.count);
            }
        }, 5000);
    }

    client.on('disconnect', (cb) => {
        console.log(`${client.id} disconnect`);
    })
});

server.listen(3001, () => {
    console.log('Run Server');
});