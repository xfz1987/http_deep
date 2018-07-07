const http = require('http')

http.createServer(function (request, response){
	console.log('[request-from]' + request.url)
	//允许多个域实现跨域
	const origin = request.headers.origin
	if(origin === 'http://127.0.0.1:8888' || origin === 'a.com' || origin === 'b.com'){
		response.writeHead(200, {
			'Access-Control-Allow-Origin': origin,
			'Access-Control-Allow-Headers': 'X-Test-Cors',
			'Access-Control-Allow-Methods': 'POST, PUT, DELETE',
			'Access-Control-Max-Age': '1000'
		})
		response.end('hello http')
	}else{
		//伪代码
		//response.status = 403
	} 
	
}).listen(8887)