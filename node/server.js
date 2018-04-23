const http = require('http');

let server = http.createServer(function (req, res) {
	// console.log('有人来请求');
	console.log(req.url);
	console.log(req.method);
	if (req.url === '/aaa') {
		res.write('aaaaaa');
	} else if (req.url === '/index.html') {
		res.write('inex.html');
	} else {
		res.write('404');
	}
	res.end();
});

server.listen(8080);
console.log('连接成功');