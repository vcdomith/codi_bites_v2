
const localStorageKeys =  Object.keys(localStorage).sort().reverse()

const projetos = localStorageKeys.map((id) => JSON.parse(localStorage[id]))


function mostraPaginaProjetos() {

    // Seleciona todos os elementos code-input
    // const listaProjetos = Object.keys(localStorage)
    // listaProjetos.forEach((projeto) => criaPost(JSON.parse(localStorage[projeto])))

    //{ Cria a ul para ser alimentada de posts para elemento dentro do localStorage
    const container = document.querySelector('.container')

    criaHeaderPagina('projetos', null, null, container)

    const listaPosts = createNewElement('ul', 'lista-posts')
    listaPosts.style.listStyle = 'none'
    container.appendChild(listaPosts)
    //}

    criaPostNovo(listaPosts)

    // const rangeLocalStorage = range(localStorage.length, startAt = 1).reverse()

    if (localStorage) {
        
        // rangeLocalStorage.forEach((index) => criaPost(JSON.parse(localStorage[index]), listaPosts))

        const localStorageKeys = Object.keys(localStorage).sort().reverse()

        localStorageKeys.forEach((id) => criaPost(JSON.parse(localStorage[id]), listaPosts))


    }

}


window.onload = function() {
    
    mostraPaginaProjetos()

}