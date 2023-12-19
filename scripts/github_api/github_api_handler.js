function getUrlAtual() {
    const urlAtual = window.location.href;
    return urlAtual;
}

function getUrlAPI(modo) {

    const url = getUrlAtual();

    // Get Repository url data
    let owner, repo;
    const path = "_projetos/projetos.txt";

    if (url.includes("github")) {
        const urlTratado = new URL(url);

        owner = urlTratado.hostname.slice(0, urlTratado.hostname.indexOf("."));
        repo = urlTratado.pathname.replaceAll("/", "");
    } else {
        owner = "vcdomith";
        repo = "codi_bites_v2";
    }

	if (modo === 'branch') return `https://api.github.com/repos/${owner}/${repo}`

	return `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=data`
	
}

function tratarDadosProjetosParaEnvio() {
    atualizaListaProjetos();

    return JSON.stringify(listaProjetos);
}

function getToken() {
    if (!localStorage["token"]) {
        let tokenPrompt = prompt(
            "Favor insira seu token para salvar seus projetos no seu repositório"
        );
        localStorage["token"] = btoa(tokenPrompt);
    }

    return atob(localStorage["token"]);
}

async function receberDadosAPI() {

    const apiUrl = getUrlAPI();

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP Error. Status: ${response.status}`);
        }

        const responseJSON = await response.json();

        return responseJSON;

    } catch (error) {

        console.error(error);
        
    }

}

async function assignData() {

    try {

        const projetosAPI = await receberDadosAPI();

        if (atob(projetosAPI.content) === '/n') {
            
            return

        }

        const decodedContent = decodeURIComponent(atob(projetosAPI.content));
        // const trimmed = decodedContent.slice(1, decodedContent.length-2);

        const parsedData = await JSON.parse(decodedContent);

        listaProjetos = parsedData;

    } catch (error) {

        console.error(error)
        console.log('Erro ao ler os dados...');
        return

    }

}

async function enviarDadosAPI() {
	
    const apiUrl = getUrlAPI();
    // Branch onde será escrito os dados novos
    // const branch = 'branch'

    let text = tratarDadosProjetosParaEnvio();

    const token = getToken();

    // Fetch the current file content to get its SHA
    //                           await fetch(`${apiUrl}?ref=${branch}`
    const existingFileResponse = await fetch(apiUrl, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github.v3+json",
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
        message: "Update file via API",
        content: content,
        branch: "data",
        //  branch: branch
    };

    // If the file exists, include the SHA in the payload
    if (fileSha) {
        payload.sha = fileSha;
    }

    // header de branch para funcionar
    // Make the request to create/update the file
    const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/vnd.github.v3+json",
        },
        body: JSON.stringify(payload),
    });

    if (response.ok) {
        console.log(`Text written to projetos.txt .`);
        criaNotificacao(
            "sucesso",
            "Projetos salvos no repositório com sucesso!"
        );
    } else {
        console.error(
            `Failed to write text to projetos.txt . Status code: ${response.status}`
        );
        const errorData = await response.json();
        console.error(errorData);
        criaNotificacao(
            "erro",
            "Não foi possível salvar seus projetos no repositório!"
        );
    }
}

async function branchExists(branch) {

    try {

        const baseUrl = getUrlAPI('branch');
        // Get the reference for the branch
        //                                 `https://api.github.com/repos/${owner}/${repo}/git/refs/heads/${branch}`
        const branchResponse = await fetch(
            `${baseUrl}/git/refs/heads/${branch}`
        );

        // Check if the branch exists based on the HTTP status code
        if (branchResponse.ok) {

            console.log(`Branch '${branch}' exists.`);
            return true;

        } else if (branchResponse.status === 404) {

            console.log(`Branch '${branch}' does not exist.`);
            return false;

        } else {

            // Handle other HTTP status codes
            console.log(
                "Failed to check branch existence:",
                await branchResponse.json()
            );
            return false;

        }

    } catch (error) {

        console.log("Error checking branch existence:", error.message);
        return false;

    }
}

async function fileExists() {

    try {
        
        const baseUrl = getUrlAPI()
        
        const resposta = await fetch(baseUrl)
        
        if (resposta.ok) {
            
            return true

        } else if (resposta.status === 404) {

            console.log('Arquivo não existe');
            return false

        } else {

            console.log('Falha na checkagem da existência do arquivo');
            return false

        }


    } catch (error) {

        console.log(error);
        
    }

}

async function establishBranch() {
	
    if (!(await branchExists("data"))) {
        
        await createBranch('data')

    } 

    // if (!(await fileExists())) {
        
    //     await createFilePath()

    //     console.log('Caminho estabelecido com sucesso!');
    //     return 
    // }

    // console.log('Caminho já existe!');

}

// Function to create a new branch
async function createBranch(branch) {

    const token = getToken();
	const baseUrl = getUrlAPI('branch')

    try {
        // Get the SHA of the existing branch
        const baseBranchResponse = await fetch(
            `${baseUrl}/git/refs/heads/main`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: "application/vnd.github.v3+json",
                },
            }
        );

        const baseBranchData = await baseBranchResponse.json();
        const baseBranchSha = baseBranchData.object.sha;

        // Create a new branch using the obtained SHA
        const createBranchResponse = await fetch(
            `${baseUrl}/git/refs`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: "application/vnd.github.v3+json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ref: `refs/heads/${branch}`,
                    sha: baseBranchSha,
                }),
            }
        );

        if (createBranchResponse.ok) {

            console.log(`Branch '${branch}' created successfully.`);

        } else {

            console.error(
                "Failed to create branch:",
                await createBranchResponse.json()
            );

        }
    } catch (error) {

        console.error("Error creating branch:", error.message);
		
    }
}

async function createFilePath() {

    try {
        
        const baseUrl = getUrlAPI('branch')
        const token = getToken()

        const conteudo = btoa('')

        const data = {
            message: 'Create projetos.txt',
            data: conteudo,
            branch: 'data'
        }

        const response = await fetch(

            `${baseUrl}/contents/projetos.txt`, 
            {

            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),

        })
    

    } catch (error) {
        
        console.error(error);
        console.log(await response.json());

    }    
    
}

/// lógica para criar caminho válido para os projetos serem lidos e escritos

async function getLatestCommitSHA() {

    const baseUrl = getUrlAPI('branch')    

    const url = `${baseUrl}/git/refs/heads/data`;
    const response = await fetch(url);
    const data = await response.json();
    return data.object.sha;

}

async function getCommitTreeSHA(commitSHA) {

    const baseUrl = getUrlAPI('branch')

    const url = `${baseUrl}/git/commits/${commitSHA}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.tree.sha;

}

async function createTree(baseTreeSHA) {

    const baseUrl = getUrlAPI('branch')

    const content = btoa('Seus projetos serão salvos aqui')

    const tree = {
        base_tree: baseTreeSHA,
        tree: [
        {
            path: 'projetos.txt',
            mode: '100644',
            type: 'blob',
            content: content,
        },
        ],
    };

    const url = `${baseUrl}/git/trees`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(tree),
    });

    const data = await response.json();
    return data.sha;
}


async function createCommit(treeSHA, parentCommitSHA) {

    const baseUrl = getUrlAPI('branch')

    const commit = {
        message: 'Criando arquivos projetos.txt',
        tree: treeSHA,
        parents: [parentCommitSHA],
    };

    const url = `${baseUrl}/git/commits`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(commit),
    });

    const data = await response.json();
    return data.sha;

}

async function updateBranchReference(newCommitSHA) {

    const baseUrl = getUrlAPI('branch')

    const url = `${baseUrl}/git/refs/heads/data`;

    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sha: newCommitSHA,
      }),
    });
  
    const data = await response.json();
    return data.object.sha;

}

async function createTxtFileInBranch() {
    // Step 1: Get the SHA of the latest commit in the branch
    const latestCommitSHA = await getLatestCommitSHA();
  
    // Step 2: Get the tree SHA of the latest commit
    const commitTreeSHA = await getCommitTreeSHA(latestCommitSHA);
  
    // Step 3: Create a new tree with the additional file
    const newTreeSHA = await createTree(commitTreeSHA);
  
    // Step 4: Create a new commit
    const newCommitSHA = await createCommit(newTreeSHA, latestCommitSHA);
  
    // Step 5: Update the branch reference
    await updateBranchReference(newCommitSHA);
  
    console.log(`.txt file created successfully in data branch.`);
  }

