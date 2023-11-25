
function getUrlAtual() {

    const urlAtual = window.location.href
    return urlAtual
    

}


async function acessaRepo() {

    const url = getUrlAtual()
    
    // Get Repository url data
    let owner, repo, path

    if (url.includes('github')) {
 
        const urlTratado = new URL(url)

        owner = urlTratado.hostname.slice(0, urlTratado.hostname.indexOf('.'))
        repo = urlTratado.pathname.replaceAll('/', '')
        path = '_projetos/'
        
    
    } else {
    
        owner = 'vcdomith'
        repo = 'codi_bites'
        path = '_projetos/projetos.txt'
        
    }

    // GitHub API endpoint to get the contents of a repository's path
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

    try {

        const response = await fetch(apiUrl)

        if (!response.ok) {
            throw new Error(`HTTP Error. Status: ${response.status}`)
        }

        const data = await response.json()

        console.log(data)

    }   catch(error) {

        console.error(error)

    }

}
acessaRepo()
