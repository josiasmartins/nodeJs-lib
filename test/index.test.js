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
    it("deve retornar a message 'não há links'", async () => {
        const resultado = await pegaArquivo('./arquivos/texto1-semlink.md');
        expect(resultado).toBe('não há links')
    })
})