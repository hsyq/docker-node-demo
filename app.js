const http = require('http');

http.createServer(function(request,response){
	
	response.statusCode = 200;  
	response.setHeader("Content-type","text/html;charset=utf-8");
	response.setHeader('name','nodejs');
	
	response.write("Hello,NodeJS!"); 
	response.end(); 
	
}).listen(8888,"localhost");

const http = require('http');

http.createServer(function(request,response){
	
	response.statusCode = 200;  
	response.setHeader("Content-type","text/html;charset=utf-8");
	response.setHeader('name','nodejs');
	
	response.write("Hello,NodeJS!"); 
	response.end(); 
	
}).listen(80,"172.17.199.10:4");
console.log("Server is running");

