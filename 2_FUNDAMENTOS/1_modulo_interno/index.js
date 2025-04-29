const meuModulo = require("./meu_modulo"); //aqui eu estou importanto meu módulo interno para reutilizar

//aqui passo a função de soma e subtração do meu módulo para uma variável simples, para não ter que ficar usando o <meuModulo.soma>, ao invés disso, posso usar simplesmente <soma> ou <subtracao>
const soma = meuModulo.soma 
const subtracao = meuModulo.subtracao

soma(5, 7)
soma(10, 40)

subtracao(30, 10)
subtracao(5, 1)