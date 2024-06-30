import express from 'express';
const app = express();

app.use(express.json());

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello' });
});

const port = 3000;
const server = app.listen(port);

export { app, server };