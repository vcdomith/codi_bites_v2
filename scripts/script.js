
// const localStorageKeys =  Object.keys(localStorage).sort().reverse()

// const projetos = localStorageKeys.map((id) => JSON.parse(localStorage[id]))

function clearLocalStorageOnUnload() {
    // Clear localStorage
    alert('sair')
    localStorage.clear();
  }
  
  // Add 'unload' event listener to the window
window.addEventListener('unload', clearLocalStorageOnUnload);

let projetos, projetosKeys

function mostraPaginaProjetos() {

    // Seleciona todos os elementos code-input
    // const listaProjetos = Object.keys(localStorage)
    // listaProjetos.forEach((projeto) => criaPost(JSON.parse(localStorage[projeto])))

    //{ Cria a ul para ser alimentada de posts para elemento dentro do localStorage
    const container = document.querySelector('.container')

    // Isso não é responsabilidade da função mostraPaginaProjetos, colocar no window.onload
    if (localStorage.length === 0) {
        
        const listaPosts = createNewElement('ul', 'lista-posts')
        listaPosts.style.listStyle = 'none'
        container.appendChild(listaPosts)

        criaAvisoStorageVazio(listaPosts)

        return

    }

    criaHeaderPagina('projetos', null, null, container)

    const listaPosts = createNewElement('ul', 'lista-posts')
    listaPosts.style.listStyle = 'none'
    container.appendChild(listaPosts)
    //}

    // criaPostNovo(listaPosts)

    // const rangeLocalStorage = range(localStorage.length, startAt = 1).reverse()

    if (localStorage.length > 0) {
        
        // rangeLocalStorage.forEach((index) => criaPost(JSON.parse(localStorage[index]), listaPosts))
        criaPostNovo(listaPosts)

        // let localStorageKeys = []
        // localStorageKeys = Object.keys(localStorage).sort().reverse()
        // localStorageKeys = localStorageKeys.filter(id => parseInt(id))

        // Primeiro obtem as keys do localStorage > filtra apenas as keys que podem virar Int > Ordena de mais novo para mais velho
        const localStorageKeys = Object.keys(localStorage)
            .filter(key => parseInt(key))
            .sort((a, b) => b - a);

        localStorageKeys.forEach((id) => criaPost(JSON.parse(localStorage[id]), listaPosts))


    }

}

async function atualizaLocalStorage() {

    await teste()
    
    projetosKeys = Object.keys(projetos)

    if (localStorage['projetosImportados']) if (localStorage['projetosImportados'] === 'true') return

    projetosKeys.forEach(key => localStorage[key] = JSON.stringify(projetos[key]))
}

window.onload = async function() {
    
    await atualizaLocalStorage()

    mostraPaginaProjetos()
    
    
}
