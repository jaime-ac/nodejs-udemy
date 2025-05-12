// nome

console.log(process.argv)

const args = process.argv.slice(2) //aqui estou armazenando o meu array de argumentos, pegando apartir do índice onde começa meu argumento, sem os caminhos do node e do script

console.log(args) //aqui eu estou pegando apenas meu argumento 

//aqui eu tou dividindo meu string com o método .split
// o comando divide em duas partes o meu argumento quando tem igual, e me retorna o que está na posição 1 agora, que é apenas o nome
const nome = args[0].split("=")[1] 

console.log(nome)

const idade = args[1].split("=")[1] //aqui estou fazendo a mesma coisa que fiz com o nome, só que passando um segundo argumento de idade

console.log(idade)

console.log(`O meu nome é ${nome} e eu tenho ${idade} anos.`)