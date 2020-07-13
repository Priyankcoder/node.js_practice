const http = require('http');
const url = require('url');
const parsedUrl = url.parse("https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/"); 
//You can pass true as a second parameter to parse the query
console.log(parsedUrl)