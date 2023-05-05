// Usarei os métodos da biliboteca net do nodeJS para criar o websocket
const net = require('net')
// Usarei o método readline para pode escrever menssagens
const readln = require('readline')

let msmRecebida = false

// Crei a interface do do readline
const rl = readln.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Parâmetros para conexão com servidor
const conn = {
    port:4000, // número da porta
    host: "localhost" // '127.0.0.1'
}

// Usando estanciando a classe para estabelecer a conexão com o server
const client = new net.Socket()

// Estabelecendo conexão com o servidor
client.connect(conn,() =>{
    console.log("Conectado...")

// Usando método para ler linha e enviar a linha lida para o servidor
    rl.addListener('line', line =>{
        client.write(line)
    })

// Utilizando método para quando receber alguma informaçao do servidor
// imprimir na tela o que foi enviado
    client.on('data',(data) =>{
        msmRecebida = true
        console.log("Recebido em: ", new Date())
        console.log(data.toString())
        if(msmRecebida == true){
            client.write("Menssagem recebida...")
            msmRecebida = false
        }
    })
})