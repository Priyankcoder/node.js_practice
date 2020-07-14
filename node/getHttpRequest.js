let http = require('http');
let req = http.get({host: "www.google.com", port: 80, path: '/'}, (res)=>{
    res.setEncoding('utf8');
    res.on('data', (data)=>console.log(data))
})