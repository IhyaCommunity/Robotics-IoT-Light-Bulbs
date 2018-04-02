var socket = io('http://192.168.10.200:8082');


var button = document.getElementsByClassName('btn');

button[0].addEventListener('change', function () {
    socket.emit('bulb1', Number(this.checked));
});
button[1].addEventListener('change', function () {
    socket.emit('bulb2', Number(this.checked));
});

button[2].addEventListener('change', function () {
    socket.emit('bulb3', Number(this.checked));
});

button[3].addEventListener('change', function () {
    socket.emit('bulb4', Number(this.checked));
});