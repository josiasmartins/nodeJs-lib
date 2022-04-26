import chalk from 'chalk';
// fs(file system): biblioteca nativa do nodejs
import fs from 'fs';
import { text } from 'stream/consumers';

// console.log(chalk.blue("vamos começar!"));

const paragrafo = "Texto retornado por uma função";

function texto(string) {
    return string;  
}

function trataErro(erro) {
    // throw: jogar/lançar;
    throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'))
}

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    // fs.promise: espera receber a resposta
    fs.promises
    .readFile(caminhoDoArquivo, encoding)
    // then: então faça alguma coisa
    // recebe o produto da promesa
    .then((texto) => chalk.green(console.log(texto)))
    // catch: pega um erro, caso ocorra
    .catch((erro) => trataErro(erro))
}

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
pegaArquivo('./arquivos/')
// console.log(pegaArquivo('./arquivos/texto1.md'));