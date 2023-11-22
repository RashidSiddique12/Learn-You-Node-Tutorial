const readFiles = require("./mymodule");

const dirPath = process.argv[2];
const extension = process.argv[3];

readFiles(dirPath, extension, (err, files) => {
  if (err) {
    console.log(err);
    return;
  } else {
    files.forEach((file) => {
      console.log(file);
    });
  }
});
