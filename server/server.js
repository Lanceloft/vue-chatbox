var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var userNum = 0;

io.on('connection', function (socket) {
  userNum++;
  io.emit('user in', userNum);

  socket.on('chat message', function(msg) {
    // io.emit('chat message', msg); // 向所有人发消息
    socket.broadcast.emit('chat message', msg); // 除自己发消息
  });

  socket.on('disconnect', function() {
    userNum--;
    io.emit('user in', userNum);
  });
});

http.listen(3000, function () {
  console.log('监听端口:3000');
});
