export function geraArrayDeURLs(arraylinks) {
    // loop para cada { chave: valor }
    // Object.values: pega o objeto e retorna somente o valor em arry
    // objeto -> [valor]
    return arraylinks.map(objetoLink => Object.values(objetoLink).join())
}

export default function validaURLs(arraylinks) {
    return geraArrayDeURLs(arraylinks);
}

