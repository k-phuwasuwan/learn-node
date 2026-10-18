import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('welcome to express server');
});

app.get('/about', (req, res) => {
    res.send('welcome to about page');
});

app.use((req, res) => {
    res.statusCode = 404;
    res.send('Page not found');
});

app.listen(3000, '127.0.0.1', () => {
    console.log('')
})