const net = require('net')
const readln = require('readline')

const rl = readln.createInterface({
    input: process.stdin,
    output: process.stdout
})

const conn = {
    port:4000,
    host:'127.0.0.1'
}

const client = new net.Socket()

client.connect(conn,() =>{
    console.log("Conectado...")

    rl.addListener('line', line =>{
        client.write(line)
    })

    client.on('data',(data) =>{
        console.log("Recebido em: ", new Date())
        console.log(data.toString())
    })

})