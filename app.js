const http = require('http');

http.createServer(function(request,response){
	
	response.statusCode = 200;  
	response.setHeader("Content-type","text/html;charset=utf-8");
	response.setHeader('name','nodejs');
	
	response.write("Hello,NodeJS!"); 
	response.end(); 
	
}).listen(8080,"localhost");
