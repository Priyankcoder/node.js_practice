const { Console } = require('console');

require('http').createServer((req, res)=>{
    res.writeHead(200, {})  //you can use httpStatus.OK in place 0f 200
    res.end('Hello World') //or you can use res.write to write the body and then res.end() to kill http connection. 

}).listen(8000, ()=>console.log("Server is up and running"));