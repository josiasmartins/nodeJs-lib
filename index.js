import chalk from 'chalk';
// fs(file system): biblioteca nativa do nodejs
import fs from 'fs';

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
    const encoding = 'utf-8'
    // _: o javascript ignora o parametro do método
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        if (erro) {
            trataErro(erro);
        }
        console.log(chalk.green(texto));
    });
}

// console.log(texto(paragrafo));
pegaArquivo('./arquivos/texto1.md')
// console.log(pegaArquivo('./arquivos/texto1.md'));