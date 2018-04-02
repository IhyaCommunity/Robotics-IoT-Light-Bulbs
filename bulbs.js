var io = require('socket.io')(8082);
var five = require('johnny-five');
var raspi = require('raspi-io');

var bulb1, bulb2, bulb3, bulb4;

var board = five.Board({
    io: new raspi()
});

board.on('ready', function () {

    bulb1 = five.Led('GPIO16');
    bulb2 = five.Led('GPIO12');
    bulb3 = five.Led('GPIO22');
    bulb4 = five.Led('GPIO27');

});

io.on('connection', function (socket) {
    console.log('User connected');

    socket.on('bulb1', function (data) {

        if (data == 1) bulb1.on();
        else bulb1.off();

    });

    socket.on('bulb2', function (data) {

        if (data == 1) bulb2.on();
        else bulb2.off();

    });

    socket.on('bulb3', function (data) {

        if (data == 1) bulb3.on();
        else bulb3.off();

    });

    socket.on('bulb4', function (data) {

        if (data == 1) bulb4.on();
        else bulb4.off();

    });
});