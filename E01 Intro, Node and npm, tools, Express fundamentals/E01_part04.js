import http from 'http';
import fs from 'fs';

const root =fs.readFileSync('./main.html')


const server = http.createServer(function (req, res) {
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(root)
        res.end()
    }
    else if (req.url =='/data'){
        const jsondata = {count: 35, message: 'Welcome' }
        res.writeHead(200, { 'content-type': 'application/json' }) 
        res.write(JSON.stringify(jsondata))


    }
    else 
    res.end('404 not found');
}
 
);
const port=5001;
server.listen(port)
console.log(`Server running on port ${port}`)
