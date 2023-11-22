const http = require("http");
const map = require("through2-map");

const server = http.createServer((req, res) => {
  if (req.method !== "POST") {
    return res.end("send me POST request \n");
  }
 
  req
    .pipe(
      map((chunk) => {
        return chunk.toString().toUpperCase();
      })
    )
    .pipe(res);
});

server.listen(process.argv[2], () => {
  console.log("server is on port 8000.....");
});
