import chalk from 'chalk';
// fs(file system): biblioteca nativa do nodejs
import fs from 'fs';

function extraiLinks(texto) {
    // gm: global e multlinha
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while ((temp = regex.exec(texto)) !== null) {
        arrayResultados.push({ [temp[1]]: temp[2] })
    }
    // /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    // const linksExtraidos = texto.match(regex);
    // const linksExtraidos = regex.exec(texto)
    return arrayResultados;
}

// console.log(chalk.blue("vamos começar!"));

const paragrafo = "Texto retornado por uma função";

function texto(string) {
    return string;  
}

function trataErro(erro) {
    // throw: jogar/lançar;
    throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'))
}

// async await
async function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    // try: tentar;
    try {
        // await: esperar a resposta
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        console.log(extraiLinks(texto));
        // catch: pega o erro
    } catch(erro) {
        trataErro(erro);
    }
}

// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     // fs.promise: espera receber a resposta
//     fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     // then: então faça alguma coisa
//     // recebe o produto da promesa
//     .then((texto) => chalk.green(console.log(texto)))
//     // catch: pega um erro, caso ocorra
//     .catch((erro) => trataErro(erro))
// }

// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8'
//     // _: o javascript ignora o parametro do método
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//         if (erro) {
//             trataErro(erro);
//         }
//         console.log(chalk.green(texto));
//     });
// }

// console.log(texto(paragrafo));
pegaArquivo('./arquivos/texto1.md')
// console.log(pegaArquivo('./arquivos/texto1.md'));

