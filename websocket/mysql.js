const mysql = require('mysql');

// 连接池
let db = mysql.createPool({host: 'localhost', user: 'root', password: '123456', database: 'websocket'});

db.query('SELECT * FROM tb1', (err, data)=>{
	if (err) {
		console.log(err);
	} else {
		console.log(data);
	}
});