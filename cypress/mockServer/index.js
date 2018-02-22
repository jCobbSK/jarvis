const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const WEBPACK_EVENTS = require('../fixture/webpack-events');

io.on('connection', function (socket) {
    socket.emit('project', WEBPACK_EVENTS.PROJECT);
    socket.emit('stats', WEBPACK_EVENTS.STATS);
    socket.emit('progress', WEBPACK_EVENTS.PROGRESS);
});

http.listen(6969, function () {
    console.log('ws listening on *:6969');
});