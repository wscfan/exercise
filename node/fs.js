let fs = require('fs');

/*fs.readFile('data/1.txt', (error, data)=>{
	if (error) {
		console.log('读取文件失败');
	} else {
		console.log('读取文件成功');
	}
})*/

fs.writeFile('data/1.txt', '写入的内容', err=>{
	if (err) {
		console.log('写入有错');
	} else {
		console.log('写入成功');
	}
})