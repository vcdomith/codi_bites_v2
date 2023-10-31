

function listaProjetosExcluir(projeto, indice, parent) {

    //<1_buttonWrapperProjeto  <button type="button" class="botao-card" id="botao-projeto">
    const buttonWrapperCard = createNewElement('button', 'botao-card')
    buttonWrapperCard.setAttribute('type', 'button')
    buttonWrapperCard.setAttribute('id', 'botao-card')

        //<2_divWrapperIndice  <div class="wrapper-indice"
        const divWrapperIndice = createNewElement('div', 'wrapper-indice')

            //*3_h2IndiceProjeto  <h2>1<h2>
            const h2IndiceProjeto = createNewElement('h2', 'indice-projeto', indice)

            //*3_svgDeletar
            const svgExcluir = `
            <svg fill="#000000" viewBox="-1 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z"/></svg>
            `
        //2_divWrapperIndice>
        divWrapperIndice.innerHTML = svgExcluir
        divWrapperIndice.prepend(h2IndiceProjeto)

        //<2_divWrapperDetalhes  <div class="wrapper-detalhes">
        const divWrapperDetalhes = createNewElement('div', 'card-detalhes')

            //*3_textareaTitulo  <textarea name="" id="" class="projeto-titulo" rows="2">Pesquisa Binária em Python</textarea>
            const textareaTitulo = createNewElement('textarea', 'card-nome', projeto.titulo)
            textareaTitulo.setAttribute('rows', '2')
            textareaTitulo.setAttribute('spellcheck', 'false')
            textareaTitulo.setAttribute('disabled', 'true')
            textareaTitulo.style.pointerEvents="none"

            //*3_textareaDescricao  <textarea name="" id="" class="projeto-titulo" rows="2">Pesquisa Binária em Python</textarea>
            const textareaDescricao = createNewElement('textarea', 'card-descricao', projeto.descricao)
            textareaDescricao.setAttribute('rows', '3')
            textareaDescricao.setAttribute('spellcheck', 'false')
            textareaDescricao.setAttribute('disabled', 'true')
            textareaDescricao.style.pointerEvents="none"

            //*3_h5Data  <h5>15 Out 2023</h5>
            const data = projeto.data === undefined ? 's/ data' : projeto.data
            const h5Data = createNewElement('h5', null, projeto.data)

        //2_divWrapperDetalhes> 
        divWrapperDetalhes.appendChild(textareaTitulo)
        divWrapperDetalhes.appendChild(textareaDescricao)
        divWrapperDetalhes.appendChild(h5Data)

    //1_buttonWrapperProjeto>  
    buttonWrapperCard.appendChild(divWrapperIndice)
    buttonWrapperCard.appendChild(divWrapperDetalhes)

    // Preencher com função que chama notificação para confirmar, exclui o projeto do localStorage, chama notificação de sucesso e então atualiza a página
    buttonWrapperCard.addEventListener('click', () => {})

    parent.appendChild(buttonWrapperCard)

}