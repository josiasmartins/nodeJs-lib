import pegaArquivo from '../index.js';

// test('deve ser uma função', () => {
//     expect(typeof pegaArquivo()).toBe('function');
// });

const arrayResult = [
    {
        FileList: `https://developer.mozilla.org/pt-BR/docs/Web/API/FileList`
    }
];

describe('pegaArquivo', () => {
    it('deve ser uma função', () => {
        expect(typeof pegaArquivo()).toBe('function');
    })

    it('deve retornar array com resultados', async () => {
        const resultado = await pegaArquivo("./arquivos/texto1.md").
        expect(resultado).toBe(arrayResult)
    })
})