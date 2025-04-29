// //a forma abaixo é quando quero exportar múltiplas funções para serem usadas em outro arquivo (index.mjs)
// export function soma (a, b){
//     console.log(`A soma de ${a} mais ${b} é igual a: ${a + b}`)
// }

// export function subtracao (x, y){
//     console.log(`${x} - ${y} = ${x - y}`);
// }

//para exportar um único arquivo posso usar a forma padrão de export default;
function soma(a, b){
    console.log(`${a} + ${b} = ${a + b}`);
}

export default soma;