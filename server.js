var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);

app.locals.pretty = true;
app.set('views', './views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index.html');
});

io.on('connection', function(socket){
	console.log('A user connected');

	socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('chat message', function(msg){
  	console.log('message: ' + msg);
  	io.emit('chat message', msg);
  });
});

server.listen(3000, function(){
	console.log('Connected 3000');
});