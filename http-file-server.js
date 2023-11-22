const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const reader = fs.createReadStream(process.argv[3]);
  reader.pipe(res);

});

server.listen(process.argv[2], () => {
  console.log("Server is on......");
});
