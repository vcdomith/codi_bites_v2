
function criaSincronizarProjetos (parent) {

    const divWrapperSincronizar = createNewElement('div', 'wrapper-sincronizar')

        const h2TextoSincronizar = createNewElement('h2', 'texto-sincronizar', 'Você possuí projetos não sincronizados, clique no botão ao lado para enviar seus projetos.')

        const buttonSincronizar = createNewElement('button', 'botao-sincronizar')

            const svgSincronizar = ''

            const pButton = createNewElement('p', 'texto-botao-sincronizar', 'Sincronizar')

        buttonSincronizar.innerHTML = svgSincronizar
        buttonSincronizar.appendChild(pButton)

    divWrapperSincronizar.appendChild(h2TextoSincronizar)
    divWrapperSincronizar.appendChild(buttonSincronizar)

    if (parent) parent.appendChild(divWrapperSincronizar)
    return divWrapperSincronizar

}