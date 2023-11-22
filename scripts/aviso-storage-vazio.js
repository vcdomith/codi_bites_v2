function criaAvisoStorageVazio(parent = null) {

    const divContainerAviso = createNewElement('div', 'container-aviso')

        const svgAviso = `
        
        `

        const h3Aviso = createNewElement('h3', 'aviso-vazio', 'Não exitem projetos no localStorage, crie um para eles começem aparecerem por aqui!')

    divContainerAviso.innerHTML = svgAviso
    divContainerAviso.appendChild(h3Aviso)

    if (parent !== null) {
        
        parent.appendChild(divContainerAviso)
        return 

    }

    return divContainerAviso


}
