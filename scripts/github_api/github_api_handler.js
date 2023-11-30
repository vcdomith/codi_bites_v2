
function getUrlAtual() {

    const urlAtual = window.location.href
    return urlAtual
    
}

async function acessaRepo() {

    const url = getUrlAtual()
    
    // Get Repository url data
    let owner, repo
    const path = '_projetos/projetos.txt'

    if (url.includes('github')) {
 
        const urlTratado = new URL(url)

        owner = urlTratado.hostname.slice(0, urlTratado.hostname.indexOf('.'))
        repo = urlTratado.pathname.replaceAll('/', '')
        
    
    } else {
    
        owner = 'vcdomith'
        repo = 'codi_bites_v2'
        
    }

    // GitHub API endpoint to get the contents of a repository's path
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

    try {

        const response = await fetch(apiUrl)

        // if (!response.ok) {
        //     throw new Error(`HTTP Error. Status: ${response.status}`)
        // }

        const responseJSON = await response.json()

        return responseJSON;

    } catch(error) {

        console.error(error)

    }

}

async function teste() {

    try {

        const projetosAPI = await acessaRepo()
        
        const decodedContent = atob(projetosAPI.content)
        const trimmed = decodedContent.slice(1, decodedContent.length-2);

        const parsedData = await JSON.parse(trimmed) 

        projetos = parsedData;

    } catch (error) {
        
        console.error(error);

    }


}


async function atualizaLocalStorageAPI() {

    try {

        const projetosAPI = await acessaRepo()
        const pDecoded = atob(projetosAPI.content)
        const parsedProjetos = JSON.parse(pDecoded);

        let arquivos = {}

        // Object.keys(parsedProjetos).forEach((key) => {
        //     arquivos[key] = JSON.stringify(parsedProjetos[key])
        // })

        // return arquivos

        Object.keys(parsedProjetos).forEach((key) => {
            localStorage[key] = JSON.stringify(parsedProjetos[key])
        })


    } catch (error) {
        
        console.error(error.message)

    }

}

// let arquivos = atualizaLocalStorage().then(res => arquivos = res)

// Design pattern IIFE(Instantly Invoked Funcion Expression), comumente utilizada para lidar com retorno de Promises
(async () => {

    try {

        return arquivosRepo = await teste() 
        
    } catch (error) {
        
        console.error(error.message)
        
    }
    
})();


// let projetosJson = {}
// Object.keys(localStorage).forEach( (key) => {

//     projetosJson[key] = (JSON.parse(localStorage[key]));

// })

let projetosJson = Object.fromEntries(
    Object.keys(localStorage).map((key) => [key, JSON.parse(localStorage[key])])
  );

const a = JSON.stringify(projetosJson);

function exportToJsonFile(objectData, filename) {
    const blob = new Blob([JSON.stringify(objectData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || 'data.json';
    
    const clickHandler = () => {
        setTimeout(() => {
            URL.revokeObjectURL(url);
            a.removeEventListener('click', clickHandler);
        }, 150);
    };
    
    a.addEventListener('click', clickHandler, false);
    a.click();
}

let b = {}
Object.keys(localStorage).forEach(key => {

    b[key] = (localStorage[key])

})


