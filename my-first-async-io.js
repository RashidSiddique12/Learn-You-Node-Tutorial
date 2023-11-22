const fs = require('fs');
fs.readFile(process.argv[2], 'utf8', (err, data)=>{
    if(err){
       console.log(err);
       return;
      
    }
    console.log(data.split("\n").length - 1)
})
// console.log(stringdata);
// // const arr = stringdata.split("\n")
// // console.log(arr.length - 1);