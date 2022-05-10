import fetch from 'node-fetch'

function manejaErros(erro) {
    throw new Error(erro.message);
}

async function checaStatus(arrayURLs) {
    // promises async await
    try {
        const arrayStatus = await Promise.all(arrayURLs.map(async url => {
            const res = await fetch(url);
            return res.status;
        }))
    
        return arrayStatus;
    } catch (erro) {
        manejaErros(erro)
    }
}

export function geraArrayDeURLs(arraylinks) {
    // loop para cada { chave: valor }
    // Object.values: pega o objeto e retorna somente o valor em arry
    // objeto -> [valor]
    return arraylinks.map(objetoLink => Object.values(objetoLink).join())
}

export default async function validaURLs(arraylinks) {
    const links = geraArrayDeURLs(arraylinks);
    const statusLinks = await checaStatus(links);
    // spread operators
    const resultados = arraylinks.map((objeto, indice) => ({
         ...objeto, 
         status: statusLinks[indice] 
    }))

    return resultados;
}

