const qs = require('querystring');
const parsed = qs.parse("data=1&value=2");
console.log(parsed);
//value will be always string in the output.