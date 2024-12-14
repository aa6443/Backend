const http = require("http")

const hostname  = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) =>{
    if (req.url === '/') {
        res.statusCode = 200 
        res.setHeader('Content-type','text/plain')
        res.end('Hello Ice Tea')
    }
    else if (req.url === '/ice-tea') {
        res.statusCode = 200 
        res.setHeader('Content-type','text/plain')
        res.end('Thabks for choosing Ice Tea Its really hot outside')
    }
    else {
        res.statusCode = 404 
        res.setHeader('Content-type','text/plain')
        res.end('404 Page not found')
    }
})

server.listen(port,hostname,()=>{
    console.log(`Port is listening at http://${hostname}:${port}`)
})
