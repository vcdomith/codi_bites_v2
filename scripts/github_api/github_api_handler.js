
function getUrlAtual() {

    const urlAtual = window.location.href
    return urlAtual
    
}

function getUrlAPI() {

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
    //     `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=data`;
    return `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

}

function tratarDadosProjetosParaEnvio() {

    atualizaListaProjetos()
    
    return JSON.stringify(listaProjetos)

}

function getToken() {

    if (!localStorage['token']) {
        
        let tokenPrompt = prompt('Favor insira seu token para salvar seus projetos no seu repositório')
        localStorage['token'] = btoa(tokenPrompt)
        
    }

    return atob(localStorage['token'])

}

async function receberDadosAPI() {

    const apiUrl = getUrlAPI()

    try {

        const response = await fetch(apiUrl)

        if (!response.ok) {
            throw new Error(`HTTP Error. Status: ${response.status}`)
        }

        const responseJSON = await response.json()

        return responseJSON;

    } catch(error) {

        console.error(error)

    }

}

async function assignData() {

    try {

        const projetosAPI = await receberDadosAPI()
        
        const decodedContent = decodeURIComponent(atob(projetosAPI.content))
        // const trimmed = decodedContent.slice(1, decodedContent.length-2);

        const parsedData = await JSON.parse(decodedContent) 

        listaProjetos = parsedData;

    } catch (error) {
        
        console.error(error);

    }

}

async function enviarDadosAPI() {

    const apiUrl = getUrlAPI()
    // Branch onde será escrito os dados novos
    // const branch = 'branch'

    let text = tratarDadosProjetosParaEnvio()

    const token = getToken()
    
    // Fetch the current file content to get its SHA
    //                           await fetch(`${apiUrl}?ref=${branch}`
    const existingFileResponse = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/vnd.github.v3+json',
        },
    });

    let fileSha = null;

    if (existingFileResponse.ok) {
        const existingFileData = await existingFileResponse.json();
        fileSha = existingFileData.sha;
    }

    // Encode the new file content to base64
    const content = btoa(encodeURIComponent(text));

    // Create the request payload
    const payload = {
        message: 'Update file via API',
        content: content,
        branch: 'main',
    //  branch: branch
    };

    // If the file exists, include the SHA in the payload
    if (fileSha) {
        payload.sha = fileSha;
    }

    // Make the request to create/update the file
    const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            Accept: 'application/vnd.github.v3+json',
        },
        body: JSON.stringify(payload),
    });

    if (response.ok) {

        console.log(`Text written to projetos.txt .`);
        criaNotificacao('sucesso', 'Projetos salvos no repositório com sucesso!')
        
    } else {
        
        console.error(`Failed to write text to projetos.txt . Status code: ${response.status}`);
        const errorData = await response.json();
        console.error(errorData);
        criaNotificacao('erro', 'Não foi possível salvar seus projetos no repositório!')
        
    }
}

// Function to create a new branch
async function createBranch() {

    const token = getToken()

                            //              `https://api.github.com/repos/${owner}/${repo}/contents/${path}`
  try {
    // Get the SHA of the existing branch
    const baseBranchResponse = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/git/refs/heads/${baseBranch}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });

    const baseBranchData = await baseBranchResponse.json();
    const baseBranchSha = baseBranchData.object.sha;

    // Create a new branch using the obtained SHA
    const createBranchResponse = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/git/refs`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ref: `refs/heads/${newBranch}`,
        sha: baseBranchSha,
      }),
    });

    if (createBranchResponse.ok) {
      console.log(`Branch '${newBranch}' created successfully.`);
    } else {
      console.error('Failed to create branch:', await createBranchResponse.json());
    }
  } catch (error) {
    console.error('Error creating branch:', error.message);
  }
}

// Call the function to create the branch
//createBranch();

// let arquivos = atualizaLocalStorage().then(res => arquivos = res)

// Design pattern IIFE(Instantly Invoked Funcion Expression), comumente utilizada para lidar com retorno de Promises
// (async () => {

//     try {

//         return arquivosRepo = await teste() 
        
//     } catch (error) {
        
//         console.error(error.message)
        
//     }
    
// })();


// let projetosJson = {}
// Object.keys(localStorage).forEach( (key) => {

//     projetosJson[key] = (JSON.parse(localStorage[key]));

// })

// let projetosJson = Object.fromEntries(
//     Object.keys(localStorage).map((key) => [key, JSON.parse(localStorage[key])])
//   );

// const a = JSON.stringify(projetosJson);

// function exportToJsonFile(objectData, filename) {
//     const blob = new Blob([JSON.stringify(objectData, null, 2)], { type: 'application/json' });
//     const url = URL.createObjectURL(blob);
    
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = filename || 'data.json';
    
//     const clickHandler = () => {
//         setTimeout(() => {
//             URL.revokeObjectURL(url);
//             a.removeEventListener('click', clickHandler);
//         }, 150);
//     };
    
//     a.addEventListener('click', clickHandler, false);
//     a.click();
// }

// let b = {}
// Object.keys(localStorage).forEach(key => {

//     b[key] = (localStorage[key])

// })


