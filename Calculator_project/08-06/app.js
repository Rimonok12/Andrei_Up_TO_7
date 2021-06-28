// REquire for NOde;;
// and import for React;;

// const { ok } = require('assert');
var http =require('http');
var module = require("./module");
http
.createServer((req, res)=>{
    res.writeHead(200);
    res.write(req.url);
    res.end("Hello world");
})
.listen(8074);


// response status : 
 

// 200  ok
// 404 not found
// 400 bad request
// 500 internal server error
// 401 forbidden
// 415 unsupported media type