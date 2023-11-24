

async function acessaArquivo(token) {

    // Personal Repository data
    const owner = 'vcdomith'
    const repo = 'codi_bites'
    const path = '_projetos/'

    // GitHub API endpoint to get the contents of a repository's path
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

    const headers = new Headers({
    Authorization: `Bearer ${token}`
    })

    try {

        const response = await fetch(apiUrl, { headers })

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`)
        }

        const data = await response.json()

        console.log(data);

    } catch(error) {

        console.error(error)

    }

}

async function acessaRepo() {

    // Personal Repository data
    const owner = 'vcdomith'
    const repo = 'codi_bites'
    const path = '_projetos/'

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