const fs = require("fs");
const path = require("path");

module.exports = (paths, extension,callback) => {

  fs.readdir(paths, (err, files) => {
    if (err) {
        console.log(err)
        return callback(err);
    }
    const filteredFiles = files.filter(
      (file) => path.extname(file) === "." + extension
    );
    callback(null, filteredFiles);
  });
};

