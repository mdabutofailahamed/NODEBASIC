const http = require('http');
const port=3000;
const hostname = '127.0.0.1'
const myServer=http.createServer((req, res)=>{
    res.writeHead(202,{'content-Type': 'text/html'})
    res.write("<h1>I am Tofail</h1>")
    res.end;
});
myServer.listen(port,hostname,()=>{
console.log( 'http://${hostname}:${port} '); 
});