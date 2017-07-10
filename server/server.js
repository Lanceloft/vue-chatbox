var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function (socket) {
  console.log('新连接已创建 !');

  socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
    console.log(msg);
  });
});

http.listen(3000, function () {
  console.log('监听端口:3000');
});
