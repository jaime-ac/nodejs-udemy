//aqui estou importando um módulo chamado 'path' que verifica a extensão de um arquivo para nós
const path = require('path') //note que não preciso usar o ./ porque não é um módulo interno

const extensao = path.extname('arquivo.pdf') //.extname é um parâmetro do múdulo que serve apenas para nos dizer a extensão do arquivo, ele tem outros parâmetros.

console.log(extensao)