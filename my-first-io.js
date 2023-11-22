const fs = require("fs");
const buf = fs.readFileSync(process.argv[2]);
const arr = buf.toString().split("\n");
console.log(arr.length - 1);
