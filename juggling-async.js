const http = require("http");

let result = [];
let count = 0;
let urls = process.argv.slice(2);

urls.forEach((url, i) => {
  http
    .get(url, (res) => {
      res.setEncoding("utf8");
      let ans = "";

      res.on("data", (chunk) => {
        ans += chunk;
      });

      res.on("end", () => {
        result[i] = ans;
        count++;
        
        if (count === urls.length) {
          result.forEach((r) => {
            console.log(r);
          });
        }
      });
    })
    .on("error", (err) => {
      console.error(err);
    });
});
