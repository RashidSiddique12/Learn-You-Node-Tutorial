const http = require("http");
const { parse } = require("path");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const query = parsedUrl.query;

  res.writeHead(200, {"Content-Type" : "application/json"})

  // console.log("parsed : ", parsedUrl);
  // console.log("path", path)
  // console.log("query", query);
  const date = new Date(query.iso);

  if (path === "/api/parsetime") {
    const time = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    };

    res.end(JSON.stringify(time));
  }
  
   else if (path === "/api/unixtime") {
    const timeInMilliSecond = {
      unixtime: date.getTime(),
    };
    res.end(JSON.stringify(timeInMilliSecond));

  }
});
server.listen(process.argv[2], () => {
  console.log(`server is on....`);
});
