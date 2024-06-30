import express from "express";
const app = express();
export default app;

app.use(express.json());

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello'})
})

const port = 3000;
app.listen(port);