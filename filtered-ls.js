const fs = require("fs");
const path = require("path");
const extention = process.argv[3];

fs.readdir(process.argv[2], (err, files) => {
  if (err) {
    console.log(err);
    return;
  }
  const filteredFiles = files.filter(
    (file) => path.extname(file) === "." + extention
  );

  filteredFiles.forEach((file, index) => {
    console.log(`${file}`);
  });
});

