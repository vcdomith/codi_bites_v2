

function criaPaginaExcluir() {

    limpaPagina()

    const container = document.querySelector('.container')

    criaHeaderPagina('projetos', 'Excluir Projetos', 'retornar editar', container)

    
    const listaCards = createNewElement('ul', 'lista-cards')
    listaCards.style.listStyle = 'none'
    container.appendChild(listaCards)
    
    const localStorageKeys = Object.keys(localStorage).sort().reverse()
    
    localStorageKeys.forEach((id, i) => {

        listaProjetosExcluir(JSON.parse(localStorage[id]), (i + 1), listaCards)
        i++

    })

}

function listaProjetosExcluir(projeto, indice, parent) {

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
                const svgExcluir = `
                <svg fill="#000000" viewBox="-1 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z"/></svg>
                `
            //3_divWrapperIndice>
            divWrapperIndice.innerHTML = svgExcluir
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

    botaoCardProjetoExcluir(buttonWrapperCard, projeto, divContainerProjeto)

}

function botaoCardProjetoExcluir(button, projeto, parent) {

    button.addEventListener('click', () => {

        const titulo = button.querySelector('.card-nome').value

        parent.style.backgroundColor = '#181715'
        parent.innerHTML = ""

        if (document.querySelector('.container-excluir')) {
            
            criaPaginaExcluir()
        
        } else {

            criaCardEstadoExcluir(projeto, titulo, parent)

        }
    })
}

function criaCardEstadoExcluir(projeto, titulo, parent) {

    //<1_divContainerCardExcluir  <div class="container-excluir"
    const divContainerCardExcluir = createNewElement('div', 'container-excluir')

        //*2_svgCardExcluir  
        const svgCardExcluir = `
        <svg fill="#000000" viewBox="5 2 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z"/></svg>
        `

        //<2_divWrapperCardExcluir <div class="card-excluir"
        const divWrapperCardExcluir = createNewElement('div', 'card-excluir')

            //*3_textareaTextoCardExcluir  <textarea rows="2" spellcheck="false" disabled>Deseja excluir o projeto: <textarea>
            const textareaTextoCardExcluir = createNewElement('textarea', null, 'Deseja excluir o projeto?')
            textareaTextoCardExcluir.setAttribute('rows', '1')
            textareaTextoCardExcluir.setAttribute('spellcheck', 'false')
            textareaTextoCardExcluir.setAttribute('disabled', 'true')

            //*3_textareaProjetoCardExcluir <textarea rows="3" spellcheck="false" disabled>Criador de 'Post Novo' ?<textarea>
            const textareaProjetoCardExcluir = createNewElement('textarea', null, `" ${titulo} "`)
            textareaProjetoCardExcluir.setAttribute('rows', '1')
            textareaProjetoCardExcluir.setAttribute('spellcheck', 'false')
            textareaProjetoCardExcluir.setAttribute('disabled', 'true')

            checkOverflow(textareaProjetoCardExcluir)

            //<3_divWrapperBotoesCard  <div class="wrapper-botoes-card"
            const divWrapperBotoesCard = createNewElement('div', 'wrapper-botoes-card')

                //*4_buttonConfirmaExcluir  <button type="button" id="confirma-excluir" class="confirma-excluir">Excluir</button>
                const buttonConfirmaExcluir = createNewElement('button', 'confirma-excluir')
                buttonConfirmaExcluir.setAttribute('type', 'button')
                buttonConfirmaExcluir.setAttribute('id', 'confirma-excluir')

                    //*5_svgConfirmaExcluir
                    const svgConfirmaExcluir = `
                    <svg viewBox="-5 -6 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -360.000000)" fill="#000000">
                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                    <path d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z" id="delete-[#1487]"></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                    `

                    //*5_pConfirmaExcluir <p>Excluir</p>
                    const pConfirmaExcluir = createNewElement('p', null, 'Excluir')

                //4_buttonConfirmaExcluir>
                buttonConfirmaExcluir.innerHTML = svgConfirmaExcluir
                buttonConfirmaExcluir.appendChild(pConfirmaExcluir)

                buttonConfirmaExcluir.addEventListener('click', () => {

                    criaNotificacao('sucesso', `O projeto "${projeto.titulo}" foi excluído com sucesso!`)

                    localStorage.removeItem(projeto.id)
                    console.log(localStorage.length === 0)

                    if (localStorage.length === 0) {
                        
                        console.log('inside')

                        limpaPagina()
                        mostraPaginaProjetos()

                    } else {

                        criaPaginaExcluir()

                    }


                })

                //<4_buttonCancelaExcluir  <button type="button" id="cancela-excluir" class="cancela-excluir">Cancelar</button>
                const buttonCancelaExcluir = createNewElement('button', 'cancela-excluir')
                buttonCancelaExcluir.setAttribute('type', 'button')
                buttonCancelaExcluir.setAttribute('id', 'cancela-excluir')

                    //*5_svgCancelaExcluir
                    const svgCancelaExcluir = `
                    <svg fill="#000000" viewBox="-4 0 34 34" xmlns="http://www.w3.org/2000/svg"><path d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z"/></svg>
                    `

                    //*5_pConfirmaExcluir <p>Excluir</p>
                    const pCancelaExcluir = createNewElement('p', null, 'Cancelar')

                //4_buttonCancelaExcluir>
                buttonCancelaExcluir.innerHTML = svgCancelaExcluir
                // buttonCancelaExcluir.prepend(pCancelaExcluir)
                buttonCancelaExcluir.appendChild(pCancelaExcluir)

                // Funcionalidade botao cancelar
                buttonCancelaExcluir.addEventListener('click', () => {

                    criaPaginaExcluir()

                })

                //*4_divLinha  <div class="linha">    
                const divLinha = createNewElement('div', 'linha')

            //3_divWrapperBotoesCard>
            divWrapperBotoesCard.appendChild(buttonConfirmaExcluir)
            divWrapperBotoesCard.appendChild(buttonCancelaExcluir)
            divWrapperBotoesCard.appendChild(divLinha)

        //2_divWrapperCardExcluir>
        divWrapperCardExcluir.appendChild(textareaTextoCardExcluir)
        divWrapperCardExcluir.appendChild(textareaProjetoCardExcluir)
        divWrapperCardExcluir.appendChild(divWrapperBotoesCard)

    //1_divContainerCardExcluir>
    divContainerCardExcluir.innerHTML = svgCardExcluir
    divContainerCardExcluir.appendChild(divWrapperCardExcluir)

    divContainerCardExcluir.style.filter = 'none'

    parent.appendChild(divContainerCardExcluir)

}

function checkOverflow(textarea) {

    window.addEventListener('resize', () => {
            
        textarea.rows = 1
    
        const tamanhoPadraoTextarea = textarea.clientHeight;
    
        const overflowing = textarea.scrollHeight > tamanhoPadraoTextarea
    
        if (overflowing) {
            
            textarea.rows = 2
    
        }

    })

}


// function clickForaCard(button, id) {

//     button.addEventListener('click', function (event) {
//         event.stopPropagation(); // Prevent the click event from propagating to the window
//         console.log(event.target, button)

//         if (event.target !== button && id !== button.classList[0]) {

//             console.log(id, button.classList[0])
//             // Click occurred outside of the target element
//             // Call your function here
//             criaPaginaExcluir();
//         }
//       });

//     // window.addEventListener('click', function (event) {
//     // if (event.target !== button && id !== button.classList[0]) {

//     //     console.log(id, button.classList[0])
//     //     // Click occurred outside of the target element
//     //     // Call your function here
//     //     criaPaginaExcluir();
//     // }
//     // });

// }

// window.addEventListener('click', (e) => {

//     console.log(e.target)

// })