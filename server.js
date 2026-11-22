const http = require("http");
const PORT = process.env.PORT || 4173;
http
  .createServer((req, res) => {
    res.writeHead(404, {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Length": "10",
      "x-content-type-options": "nosniff",
      "x-render-routing": "no-server",
    });
    res.end("Not Found\n");
  })
  .listen(PORT, () => {
    console.log(`http://127.0.0.1:${PORT}/`);
  });
