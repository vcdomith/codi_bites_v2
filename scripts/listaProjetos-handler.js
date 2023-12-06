
let listaProjetos, projetosKeys, listaProjetosInicialAPI


async function recebeProjetosAPI() {

    try {

        await assignData()
        listaProjetosInicialAPI = {...listaProjetos}
        projetosKeys = Object.keys(listaProjetos)
        console.log('Projetos importados com sucesso da API');
        
        
    } catch (error) {
        
        return

    }
    

}

function atualizaListaProjetos() {

    listaProjetos = {}
    localStorageKeys.forEach(key => {

        listaProjetos[key] = JSON.parse(localStorage[key])

    })

}

function checaEstadoProjetos() {

    let projetosComparados = [listaProjetos, listaProjetosInicialAPI]

    return isEqual(...projetosComparados)

}