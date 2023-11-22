const { error } = require('console');
const http = require('http')

http.get(process.argv[2], (res)=>{
   
    res.setEncoding('utf8');
    let data = []
    res.on('data', (chunk)=>{
        data.push(chunk)
    })

    res.on('end',  ()=>{
        data.forEach((d)=>{
            console.log(d);
        });
    })
}).on('error', (err)=>{
    console.log(err);
})