
let localStorageKeys = []

function atualizaLocalStorage() {

    // if (localStorage['projetosImportados'] && localStorage['projetosImportados'] === 'true') return 

    projetosKeys.forEach(key => localStorage[key] = JSON.stringify(listaProjetos[key]))
    localStorage['projetosImportados'] = 'true'

}

function atualizaLocalStorageKeys() {

    // Primeiro obtem as keys do localStorage > filtra apenas as keys que podem virar Int > Ordena de mais novo para mais velho
    localStorageKeys = Object.keys(localStorage)
    .filter(key => parseInt(key))
    .sort((a, b) => b - a);

}