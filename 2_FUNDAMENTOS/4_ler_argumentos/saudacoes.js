// saudacao.js

const args = process.argv.slice(2);
const dados = {}; //aqui é criado um objeto para armazenar os argumentos que serão digitados via comando;

//o .forEach é um método de array em JS que serve para executar uma função para cada item do array
args.forEach(arg => {

    // arg.replace('--', '') => nesse caso, estamos removendo os dois hífens (--) do ínicio da string => (ex.: --nome=Jaime vira 'nome=Jaime');
    // .split("=") => aqui estamos dividindo o argamento na parte do '=' e transformando em um array  => (ex.: 'nome=Jaime' vira ['nome', 'Jaime']);
    // [chave, valor] = [...] => aqui estamos usando a desestruturação de array para armazenar a chave/variável e o valor digitado => (ex.: chave = 'nome'; valor = 'Jaime');
  const [chave, valor] = arg.replace('--', '').split('=');

    //dados[chave] = valor; => adiciona a chave e o valor ao objeto criado => dados = {} => ex.: dados=['nome'] = 'Jaime'; depois no segundo loop => dados['turno'] = 'manhã';
  dados[chave] = valor;

    //no final o objeto vai ficar assim:
    // dados = {
    //     nome: 'Jaime',
    //     turno: 'manhã'
    // }
});

const nome = dados.nome || 'visitante'; //aqui estou passando o valor da chave nome do meu objeto a variável nome, caso nada seja digitado deve mostrar visitante;
const turno = dados.turno || 'dia';

let saudacao = 'Olá';

//aqui faz-se a comparação do que foi digitado para passar o valor certo da saudação ao usuário;
if (turno === 'manhã' || turno === 'MANHÃ' | turno === 'Manhã') {
  saudacao = 'Bom dia';
} else if (turno === 'tarde' || turno === 'TARDE' | turno === 'Tarde') {
  saudacao = 'Boa tarde';
} else if (turno === 'noite' || turno === 'NOITE' | turno === 'Noite') {
  saudacao = 'Boa noite';
}

console.log(`${saudacao}, ${nome}!`); //e aqui se imprime a mensagem de saudação no terminal 





// OBSERVAÇÃO:
//     - usar o loop .forEach é melhor em situações em que há varios argumentos nomeados, ele é mais flexível e escalável. E também funciona independente da ordem dos argumentos e é fácil de expandir;
//     - o outro método args[0].split('=')[1] é mais simples e direto, mas ele é mais ideal quando só há argumentos fixos. Funciona bem se você sabe exatamente o que vai receber e em que ordem. E SE VOCÊ TIVER MAIS DE UM ARGUMENTO, VOCÊ TERIA QUE TRATAR CADA ÍNDICE MANUALMENTE, POIS NÃO É UM LOOP QUE NEM O .forEach.