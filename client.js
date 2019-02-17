const io = require('socket.io-client');
const client = (() => {
    const socket = io.connect('ws://localhost:3000');

    socket.on('login', (cb) => {
        console.log(cb);
    });

    socket.on('message', (cb) => {
        console.log(cb);
    });

    socket.on('disconnect', (cb) => {
        console.log(cb);
        if (timer) {
            clearInterval(timer);
        }
    });

    // const timer = setInterval(() => {
    //     socket.emit('login');
    // }, 1000);

    document.getElementById('timerCacel').addEventListener('click', () => {
        if (timer) {
            clearInterval(timer);
        }
    });
})();
