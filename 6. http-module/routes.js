const http = require('http');

const server = http.createServer((req, res)=>{
    const url = req.url;
    if(url === "/"){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("welcome to home page")
    }
    else if(url === "/projects"){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("welcome to projects page")
    }
    else{
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("page not found")
    }

});

const port = 3000;
server.listen(port, ()=>{
    console.log(`server is now listening to port ${port}`);
})