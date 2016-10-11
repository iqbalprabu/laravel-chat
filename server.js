var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var redis = require('redis');

var user = {};

io.on('connection', function(socket){

	console.log('socket: ', socket.handshake.query.id);
	user[socket.handshake.query.id] = socket;

	//console.log('new user connected: ', user[socket.handshake.query.id]);
	user[socket.handshake.query.id].emit('Welcome', 'Welcome to message');

	//console.log('user: ', user);


	socket.on('register', function(data){		
		
	});

	socket.on('disconnect', function(data) {
		console.log('client - disconnect: ', socket.handshake.query.id);
		delete user[socket.handshake.query.id];
		//console.log('user: ', user);
  	});
})


var redisClient = redis.createClient();
	redisClient.subscribe('message');
 
	redisClient.on("message", function(channel, message) {
    console.log("mew message in queue "+ message + "channel");

    message = JSON.parse(message);
    //console.log('send message to: ', message.data);
    //socket.broadcast.to(message.data.message.messageTo_id).emit('message', message.data);
    user[message.data.message.messageTo_id].emit('message', message.data);
});

http.listen(9090, function(){
    console.log('Listening on Port 9090');
});