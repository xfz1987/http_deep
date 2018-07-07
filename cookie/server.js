const http = require('http')
const fs = require('fs')

http.createServer(function (request, response) {
  console.log('request come', request.url)

  if (request.url === '/') {
    const html = fs.readFileSync('test.html', 'utf8')
    if(request.headers.host === 'test.html'){
    	response.writeHead(200, {
      		'Content-Type': 'text/html',
      		'Set-Cookie': ['id=123; max-age=2', 'abc=456;domain=test.com']
    	})
    }else{
    	response.writeHead(200, {
      		'Content-Type': 'text/html',
      		'Set-Cookie': 'http-only'
    	})
    }
    
    response.end(html)
  }

}).listen(8888)

console.log('server listening on 8888')