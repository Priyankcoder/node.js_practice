let http = require("http");
let req = http.request({host: 'www.google.com', port: 20, path: '/', method: 'POST'}, (res)=>{
    res.setEncoding('utf8');
    res.on('data', (data)=>console.log('Body:'+data));
})
req.write('Hello World');
req.write('How are you?');
req.end();
