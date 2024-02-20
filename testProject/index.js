var http = require('http');
/** 
//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
**/

http.createServer((req, res)=> {
    if(res.url === '/html'){
        res.end("Hello Vineet!!!");
    }else{
        res.end("You hit a wrong url");
    }
}).listen(8000);