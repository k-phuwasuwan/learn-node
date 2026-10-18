import { createServer } from 'node:http';

const server = createServer((req, res) => {
    console.log('ได้รับตำขอ', req.url, req.method);
    res.setHeader('content-type', 'text/plain; charset=utf-8')

    if(req.url === '/') {
        res.statusCode = 200;
        res.end('home page')
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('about page')
    } else {
        res.statusCode = 404;
        res.end('not found')
    }
});


server.listen(3000, '127.0.0.1', () => {
    console.log('เปิด http://127.0.0.1:3000');
});