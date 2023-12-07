
function criaSincronizarProjetos (parent) {

    const buttonSincronizar = createNewElement('button', 'button-sincronizar')

        const svgSincronizar = `
        <svg version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
            viewBox="0 0 32 32" xml:space="preserve">
        <path class="sharpcorners_een" d="M29,8h-4c1.735,1.999,2.497,4.328,2.497,7.001c-0.001,2.94-1.145,5.701-3.222,7.778
            c-2.145,2.145-4.963,3.217-7.78,3.217H16V22h0.495c1.793,0,3.587-0.685,4.952-2.05c1.322-1.322,2.05-3.08,2.05-4.95
            c0.001-1.569-0.551-2.78-1.497-4v4h-4l0.033-11H29V8z M15.505,9.996H16V6h-0.495c-2.818,0-5.635,1.072-7.78,3.217
            c-2.077,2.077-3.221,4.839-3.222,7.778c0,2.672,0.762,5.002,2.497,7.001H3v4h11V17h-4v3.996c-0.946-1.22-1.497-2.431-1.497-4
            c0-1.87,0.729-3.629,2.05-4.95C11.918,10.68,13.712,9.995,15.505,9.996z"/>
        </svg>
        `

        const h2TextoSincronizar = createNewElement('h2', 'texto-sincronizar', 'Você possuí projetos não sincronizados, clique aqui para enviar seus projetos.')

    buttonSincronizar.innerHTML = svgSincronizar
    buttonSincronizar.appendChild(h2TextoSincronizar)

    buttonSincronizar.addEventListener('click', () => sincronizarProjetos())

    if (parent) parent.appendChild(buttonSincronizar)
    return buttonSincronizar

}

function sincronizarProjetos() {

    enviarDadosAPI()

    listaProjetosInicialAPI = {...listaProjetos}

    limpaPagina()
    mostraPaginaProjetos()

}