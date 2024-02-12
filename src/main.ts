import { createServer } from "http";

const server = createServer((req, res) => {
    res.end("ok")
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

