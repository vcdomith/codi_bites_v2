
// const localStorageKeys =  Object.keys(localStorage).sort().reverse()

// const projetos = localStorageKeys.map((id) => JSON.parse(localStorage[id]))

// window.addEventListener('beforeunload', function (e) {
//     // Check if there are unsaved changes
    
//     // if (true) {
//     //     // Standard for most browsers
//     //     e.returnValue = 'Se você sair agora você perderá seus dados não salvos, clique em sincronizar para salvá-los';

//     //     // For some older browsers
//     //     return 'Are you sure you want to leave without saving your changes?';
//     // }
// });

window.onbeforeunload = () => {

    if (localStorage['projetosImportados']) localStorage.removeItem('projetosImportados')
    localStorageKeys?.forEach( key => localStorage.removeItem(key) )
    // enviarDadosAPI()

    // criaNotificacao('alerta', 'Você possuí conteúdo não salvo. Clique no botão "sincronizar" para salva-lo.', false, document.querySelector('#notificacoes'))

    // return ''
}

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

    if (!checaEstadoProjetos()) criaSincronizarProjetos(listaPosts)
    
    listaPosts.style.listStyle = 'none'
    container.appendChild(listaPosts)
    //}

    // criaPostNovo(listaPosts)

    // const rangeLocalStorage = range(localStorage.length, startAt = 1).reverse()

    if (localStorage.length > 0) {
        
        // rangeLocalStorage.forEach((index) => criaPost(JSON.parse(localStorage[index]), listaPosts))
        criaPostNovo(listaPosts)

        atualizaLocalStorageKeys()

        localStorageKeys.forEach((id) => criaPost(JSON.parse(localStorage[id]), listaPosts))

    }

}

function projetosForamImportados() {

    if (localStorage['projetosImportados'] && localStorage['projetosImportados'] === 'true') return true
    return false

}

window.onload = async function() {
    
    //Lógica que confere se o token está salvo no localStorage. Se não estiver mostra um elemento que tem um input/prompt que pede o token e explica como será o uso se

    if (!projetosForamImportados()) {

        try {
            
            await recebeProjetosAPI()
            atualizaLocalStorage()

        } catch (error) {
            
            console.error(error);

        }

    }

    mostraPaginaProjetos()
    
}
