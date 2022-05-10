import fetch from 'node-fetch'

async function checaStatus(arrayURLs) {
    // promises async await
    const arrayStatus = await Promise.all(arrayURLs.map(async url => {
        const res = await fetch(url);
        return res.status;
    }))

    return arrayStatus;
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
    return statusLinks;
}

