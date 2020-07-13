const qs = require("querystring");
const encoded = qs.encode({ data: 1, value: 2});
//value should be string, boolean or number otherwise key will be printed without any value assigned.
console.log(encoded);
