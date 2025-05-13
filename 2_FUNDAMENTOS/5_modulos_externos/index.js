const minimist = require("minimist") //o minimist é um módulo que facilita a leitura de argumentos

const args = minimist(process.argv.slice(2)) 

//com o minimist eu consigo chamar os argumentos agora pelas variáveis em que são armazenadas, então não preciso mais ficar dividindo meu array com o método .split() para pegar o valor pela posição que nem fizemos na seção 4_ler_argumentos
const nome = args['nome'] 
const profissao = args['profissao']
const idade = args['idade']

console.log(nome)
console.log(profissao)
console.log(`O meu nome é ${nome}, sou ${profissao} e tenho ${idade} anos de idade.`)