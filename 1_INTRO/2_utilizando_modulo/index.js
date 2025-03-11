const fs = require('fs'); //aqui a gente está importanto o módulo File System

fs.readFile('arquivo.txt', 'utf8', (err, data) => { //o readFile é um método do módulo fs que permite ler arquivos;

    if (err){
        console.log(err)
        return
    }

    console.log(data);

});