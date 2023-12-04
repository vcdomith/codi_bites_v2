
let listaProjetos, projetosKeys, listaProjetosAPI


async function recebeProjetosAPI() {

    try {

        await assignData()
        listaProjetosAPI = {...listaProjetos}
        projetosKeys = Object.keys(listaProjetos)
        
        
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

    const keys = Object.keys(listaProjetos)

    for (const key of keys) if (listaProjetos[key] !== listaProjetosAPI[key]) return false

    return true

}