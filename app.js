var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

app.get('/', function(req, res){
  res.sendFile(__dirname +'/index.html');
});

app.get('/other', function(req, res){
  res.sendFile(__dirname + '/other.html');
});



io.on('connection', function(socket){
  console.log('Someone is on!');
  socket.on('disconnect', function(){
    console.log('Annnnd... gone :(')
  });
  socket.on('clicked',function(command){
     io.emit('command issued', command);
  });
});



server.listen(3000);

