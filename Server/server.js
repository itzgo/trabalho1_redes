// Usarei os métodos da biliboteca net do nodeJS para criar o websocket
const net = require('net')
// Usarei o método readline para pode escrever menssagens
const readln = require('readline')

// Crei a interface do do readline
const rl = readln.createInterface({
    input: process.stdin,
    output: process.stdout
})


const conn = socket => {
    console.log(socket.remoteAddress+":"+socket.remotePort+" Está on no server")

    // Utilizando o método para quando receber alguma informação oridunda do cliente
    // imprimir na tela o que foi envido
    socket.on('data', data =>{

        console.log("De: "+socket.remoteAddress+":"+socket.remotePort+" - Recebido em: ", new Date())
        console.log(data.toString())
    })
    
    // Utilizando método on para quando a conexão for finalizada, me retornar quando finalizou.
    socket.on('close',() =>{
        console.log(socket.remoteAddress+":"+socket.remotePort+" Encerou conexão em: ", new Date())
    })

    // Utilizando um método Listerner da classe readLine para "pegar" o que foi escrito
    // Utilizando um método write da classe server para enviar a linha captada do método Listener
    rl.addListener('line', line=>{
        socket.write(line)
    })
}

// Parâmetros para estabeler o servidor porta: 4000 - 127.0.0.1(localhost)
const server = net.createServer(conn)
//server.listen(4000, '127.0.0.1')
server.listen(4000, '0.0.0.0')