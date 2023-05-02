//curl 127.0.0.1:4000
const net = require('net')
const readln = require('readline')

const rl = readln.createInterface({
    input: process.stdin,
    output: process.stdout
})


const conn = socket => {

    socket.on('data', data =>{

        console.log("Recebido em: ", new Date())
        console.log(data.toString())
        //socket.write("Recebido...")
        console.log(socket)
    })

    socket.on('close',() =>{
        console.log("Conexão encerada em: ", new Date())
    })

    rl.addListener('line', line=>{
        socket.write(line)
    })
}

const server = net.createServer(conn)
server.listen(4000, '127.0.0.1')