// import react as redux;
// REquire for NOde;;
// and import for React;;

var http =require('http');
http.createServer((req, res)=>{
    res.writeHead(200);
    res.end("Hello world");
})
.listen(8080);