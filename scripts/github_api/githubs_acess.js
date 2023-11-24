

async function acessaArquivo() {

    // Personal Acess Token
    const token = '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'

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

    const erro = await api

}