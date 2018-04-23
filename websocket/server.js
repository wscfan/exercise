const http = require('http');
const io = require('socket.io');

// 1、创建http服务
let server = http.createServer();
server.listen(8080);

// 2、创建websocket服务
let wsServer = io.listen(server);
wsServer.on('connection', function (sock) {
	sock.on('a', function (num1, num2) {
		console.log('接到了浏览器发送的数据');

	});

	setInterval(function () {
		sock.emit('b', Math.random());
	}, 500);
})
