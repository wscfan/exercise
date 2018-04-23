let http = require('http');
let fs = require('fs');

let server = http.createServer((req, res)=>{
	console.log(req.url);
	fs.readFile(`data${req.url}`, (err, data)=>{
		if (err) {
			// res.writeHead(404);
			// res.write('404');
			fs.readFile('./http_errors/404.html', (err, data)=>{
				if (err) {
					res.writeHeader(404);
					res.write('页面找不到了');
				} else {
					res.writeHeader(404);
					res.write(data);
				}
				res.end();
			})
		} else {
			res.write(data);
			res.end();
		}
	})
});

server.listen(8080);