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

    // GitHub API endpoint to get the contents of a repository's path
    //     `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=data`;

	if (modo === 'branch') return `https://api.github.com/repos/${owner}/${repo}`

	return `https://api.github.com/repos/${owner}/${repo}/contents/${path}`
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

        const decodedContent = decodeURIComponent(atob(projetosAPI.content));
        // const trimmed = decodedContent.slice(1, decodedContent.length-2);

        const parsedData = await JSON.parse(decodedContent);

        listaProjetos = parsedData;

    } catch (error) {

        console.error(error);

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
        branch: "main",
        //  branch: branch
    };

    // If the file exists, include the SHA in the payload
    if (fileSha) {
        payload.sha = fileSha;
    }

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

async function doSomething() {
	
    if (!(await branchExists("data"))) createEmptyBranch('data')

	

}

// async function createEmptyBranch(branch) {
//     const token = getToken();
//     const baseUrl = getUrlAPI('branch');

//     try {
//         // Create an empty file
//         const createFileResponse = await fetch(
//             `${baseUrl}/contents/projetos.txt`,
//             {
//                 method: "PUT",
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                     Accept: "application/vnd.github.v3+json",
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     message: "Criando a branch pela primeira vez",
//                     content: "", 
//                     branch: branch,
//                 }),
//             }
//         );

//         if (createFileResponse.ok) {
//             console.log(`Empty branch '${branch}' created successfully.`);
//         } else {
//             console.error(
//                 "Failed to create empty branch:",
//                 await createFileResponse.json()
//             );
//         }
//     } catch (error) {
//         console.error("Error creating empty branch:", error.message);
//     }
// }

async function createEmptyBranch(branch) {
    const token = getToken();
    const baseUrl = getUrlAPI('branch');
    const emptyCommitSHA = "4b825dc642cb6eb9a060e54bf8d69288fbee4904";

    try {
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
                    sha: emptyCommitSHA,
                }),
            }
        );

        if (createBranchResponse.ok) {
            console.log(`Empty branch '${branch}' created successfully.`);
        } else {
            console.error(
                "Failed to create empty branch:",
                await createBranchResponse.json()
            );
        }
    } catch (error) {
        console.error("Error creating empty branch:", error.message);
    }
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
