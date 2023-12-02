
let listaProjetos, projetosKeys


async function recebeProjetosAPI() {

    try {

        await assignData()
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