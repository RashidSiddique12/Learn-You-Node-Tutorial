
const net = require('net');

const date = new Date();
const year = date.getFullYear();
const month = (date.getMonth() + 1).toString().padStart(2, 0);
const d = (date.getDate()).toString().padStart(2, 0);
const hour = (date.getHours()).toString().padStart(2,0);
const minutes = date.getMinutes().toString().padStart(2,0);

const server = net.createServer((socket)=>{
    socket.write(`${year}-${month}-${d} ${hour}:${minutes}\n`);
    socket.end()

})
server.listen(process.argv[2],()=>{
    console.log("server is connected")
});