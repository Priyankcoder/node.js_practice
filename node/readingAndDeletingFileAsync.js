const fs = require('fs');
fs.readFile('data.txt', (err, data)=>{
    console.log("war:" + data);
    fs.unlink('data.txt')
});