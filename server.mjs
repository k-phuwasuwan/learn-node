import { createServer } from 'node:http';

const server = createServer((req, res) => {
    console.log('ได้รับตำขอ', req.url, req.method);

    res.statusCode = 200;
    res.setHeader('content-type', 'text/plain; charset=utf-8')
    res.end('สวัสดีจาก Node.js Server');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('เปิด http://127.0.0.1:3000');
});