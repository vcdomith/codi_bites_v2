

function criaPaginaEditar() {

    limpaPagina()

    const container = document.querySelector('.container')

    criaHeaderPagina('projetos', 'Editar Projeto Salvo', 'retornar excluir', container)

    const listaCards = createNewElement('ul', 'lista-cards')
    listaCards.style.listStyle = 'none'
    container.appendChild(listaCards)
    
    atualizaLocalStorageKeys()
    
    localStorageKeys.forEach((id, i) => {

        listaProjetosEditar(JSON.parse(localStorage[id]), (i + 1), listaCards)
        i++

    })

}

function listaProjetosEditar(projeto, indice, parent) {

    //<1_divContainerProjeto  <div class="container-projeto"
    const divContainerProjeto = createNewElement('div', `container-projeto`)

        //<2_buttonWrapperProjeto  <button type="button" class="botao-card" id="botao-projeto">
        const buttonWrapperCard = createNewElement('button', 'botao-card')
        buttonWrapperCard.setAttribute('type', 'button')
        buttonWrapperCard.setAttribute('id', 'botao-card')

            //<3_divWrapperIndice  <div class="wrapper-indice"
            const divWrapperIndice = createNewElement('div', 'wrapper-indice')

                //*4_h2IndiceProjeto  <h2>1<h2>
                const h2IndiceProjeto = createNewElement('h2', 'indice-projeto', indice)

                //*4_svgDeletar
                const svgEditar = `
                <svg viewBox="-3 -2 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.50959 2C4.01895 2 1.99988 4.01907 1.99988 6.50971V17.4903C1.99988 19.9809 4.01895 22 6.50959 22H11.8499C12.3191 22 12.6994 21.6197 12.6994 21.1505C12.6994 20.6813 12.3191 20.301 11.8499 20.301H6.50959C4.9573 20.301 3.69892 19.0426 3.69892 17.4903V6.50971C3.69892 4.95742 4.9573 3.69904 6.50959 3.69904H17.1902C18.7425 3.69904 20.0008 4.95742 20.0008 6.50971V12C20.0008 12.4692 20.3812 12.8495 20.8504 12.8495C21.3195 12.8495 21.6999 12.4692 21.6999 12V6.50971C21.6999 4.01907 19.6808 2 17.1902 2H6.50959ZM7.00245 11.1503C6.53327 11.1503 6.15293 11.5306 6.15293 11.9998C6.15293 12.469 6.53327 12.8493 7.00245 12.8493H10.0016C10.4708 12.8493 10.8511 12.469 10.8511 11.9998C10.8511 11.5306 10.4708 11.1503 10.0016 11.1503H7.00245ZM6.15293 8.00201C6.15293 7.53283 6.53327 7.15248 7.00245 7.15248H12.9991C13.4683 7.15248 13.8486 7.53283 13.8486 8.00201C13.8486 8.47119 13.4683 8.85153 12.9991 8.85153H7.00245C6.53327 8.85153 6.15293 8.47119 6.15293 8.00201ZM19.4325 13.2912C18.9054 12.7553 18.0508 12.7553 17.5237 13.2912L13.7673 17.1101C13.4779 17.4044 13.3355 17.8162 13.38 18.2297L13.5949 20.2252C13.6508 20.7447 14.0542 21.1549 14.5652 21.2117L16.528 21.4301C16.9348 21.4754 17.3398 21.3306 17.6292 21.0364L21.3856 17.2174C21.9126 16.6815 21.9126 15.8127 21.3856 15.2768L19.4325 13.2912ZM15.0725 18.2059L18.4781 14.7435L19.9571 16.2471L16.5515 19.7095L15.2184 19.5612L15.0725 18.2059Z" fill="#1C1C1C"/>
                </svg>
                `
            //3_divWrapperIndice>
            divWrapperIndice.innerHTML = svgEditar
            divWrapperIndice.prepend(h2IndiceProjeto)

            //<3_divWrapperDetalhes  <div class="wrapper-detalhes">
            const divWrapperDetalhes = createNewElement('div', `${projeto.id} card-detalhes`)

                //*4_textareaTitulo  <textarea name="" id="" class="projeto-titulo" rows="2">Pesquisa Binária em Python</textarea>
                const textareaTitulo = createNewElement('textarea', 'card-nome', projeto.titulo)
                textareaTitulo.setAttribute('rows', '2')
                textareaTitulo.setAttribute('spellcheck', 'false')
                textareaTitulo.setAttribute('disabled', 'true')
                textareaTitulo.style.pointerEvents="none"

                //*4_textareaDescricao  <textarea name="" id="" class="projeto-titulo" rows="2">Pesquisa Binária em Python</textarea>
                const textareaDescricao = createNewElement('textarea', 'card-descricao', projeto.descricao)
                textareaDescricao.setAttribute('rows', '3')
                textareaDescricao.setAttribute('spellcheck', 'false')
                textareaDescricao.setAttribute('disabled', 'true')
                textareaDescricao.style.pointerEvents="none"

                //*4_h5Data  <h5>15 Out 2023</h5>
                const data = projeto.data === undefined ? 's/ data' : projeto.data
                const h5Data = createNewElement('h5', null, projeto.data)

            //3_divWrapperDetalhes> 
            divWrapperDetalhes.appendChild(textareaTitulo)
            divWrapperDetalhes.appendChild(textareaDescricao)
            divWrapperDetalhes.appendChild(h5Data)

        //2_buttonWrapperProjeto>  
        buttonWrapperCard.appendChild(divWrapperIndice)
        buttonWrapperCard.appendChild(divWrapperDetalhes)

    //1_divContainerProjeto>
    divContainerProjeto.appendChild(buttonWrapperCard)

    parent.appendChild(divContainerProjeto)

    botaoEditarProjeto(buttonWrapperCard, projeto)
    // botaoCardProjetoExcluir(buttonWrapperCard, projeto, divContainerProjeto)

}

function botaoEditarProjeto(button, projeto) {

    button.addEventListener('click', () => {

        limpaPagina()

        criaEditorProjeto(projeto)

    })

}