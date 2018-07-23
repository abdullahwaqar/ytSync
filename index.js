var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//Setting Up routes
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

//Setting up sockets
io.on('connection', function(socket) {
    console.log('user connected');

    //Play Video all clients
    socket.on('play', function() {
        io.emit('play');
    });

    //Pause Video all clients
    socket.on('pause', function() {
        io.emit('pause');
    });
});

//Setting up server for listening
http.listen(3000, function() {
  console.log('listening on *:3000');
});