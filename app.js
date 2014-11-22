var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	return res.send('Hello Sockets');
});


http.listen(3000, function(){
	console.log('Express server listening to port 3000');
});