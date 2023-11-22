const http = require("http");
// const bl = require("bl");
// const concatStream = require('concat-stream')

http
  .get(process.argv[2], (res) => {
    res.setEncoding("utf8");
    let result = "";
    res.on("data", (chunk) => {
      result += chunk;
    });

    res.on("end", () => {
      console.log(result.length);
      console.log(result);
    });
  })
  .on("error", (err) => {
    console.log(err);
  });

//   response.pipe(
//     bl((err, data) => {
//       if (err) {
//         console.log(err);
//       }

//       const res = data.toString();
//       console.log(res.length);
//       console.log(res);
//     })
//   );
