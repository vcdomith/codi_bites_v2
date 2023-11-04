
function criaBotaoheader(tipoBotao) {

    const buttonMap = {

        retornar: {

            tipo: 'retornar',
            svg: `
            <svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z"/></svg>
            `,
            texto: 'Retornar para o feed'

        },

        excluir: {

            tipo: 'excluir',
            svg: `
            <svg viewBox="-5 -5 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -360.000000)" fill="#000000">
                        <g id="icons" transform="translate(56.000000, 160.000000)">
                            <path d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z" id="delete-[#1487]"></path>
                        </g>
                    </g>
                </g>
            </svg>
            `,
            texto: 'Excluir projetos'

        },

        editar: {

            tipo: 'editar',
            svg: `
            <svg viewBox="-3 -2 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.50959 2C4.01895 2 1.99988 4.01907 1.99988 6.50971V17.4903C1.99988 19.9809 4.01895 22 6.50959 22H11.8499C12.3191 22 12.6994 21.6197 12.6994 21.1505C12.6994 20.6813 12.3191 20.301 11.8499 20.301H6.50959C4.9573 20.301 3.69892 19.0426 3.69892 17.4903V6.50971C3.69892 4.95742 4.9573 3.69904 6.50959 3.69904H17.1902C18.7425 3.69904 20.0008 4.95742 20.0008 6.50971V12C20.0008 12.4692 20.3812 12.8495 20.8504 12.8495C21.3195 12.8495 21.6999 12.4692 21.6999 12V6.50971C21.6999 4.01907 19.6808 2 17.1902 2H6.50959ZM7.00245 11.1503C6.53327 11.1503 6.15293 11.5306 6.15293 11.9998C6.15293 12.469 6.53327 12.8493 7.00245 12.8493H10.0016C10.4708 12.8493 10.8511 12.469 10.8511 11.9998C10.8511 11.5306 10.4708 11.1503 10.0016 11.1503H7.00245ZM6.15293 8.00201C6.15293 7.53283 6.53327 7.15248 7.00245 7.15248H12.9991C13.4683 7.15248 13.8486 7.53283 13.8486 8.00201C13.8486 8.47119 13.4683 8.85153 12.9991 8.85153H7.00245C6.53327 8.85153 6.15293 8.47119 6.15293 8.00201ZM19.4325 13.2912C18.9054 12.7553 18.0508 12.7553 17.5237 13.2912L13.7673 17.1101C13.4779 17.4044 13.3355 17.8162 13.38 18.2297L13.5949 20.2252C13.6508 20.7447 14.0542 21.1549 14.5652 21.2117L16.528 21.4301C16.9348 21.4754 17.3398 21.3306 17.6292 21.0364L21.3856 17.2174C21.9126 16.6815 21.9126 15.8127 21.3856 15.2768L19.4325 13.2912ZM15.0725 18.2059L18.4781 14.7435L19.9571 16.2471L16.5515 19.7095L15.2184 19.5612L15.0725 18.2059Z" fill="#1C1C1C"/>
            </svg>
            `,
            texto: 'Editar projetos'

        }
    }

    const botao = buttonMap[tipoBotao]

    //<1_buttonRetornar  <button type="button" class="retornar">
    const buttonCriado = createNewElement('button', 'retornar')
    buttonCriado.setAttribute('type', 'button')
    
        //*2_svgRetornar
        const svgRetornar = botao.svg

        //*2_pRetornar <p>Retornar para o feed</p>
        const pRetornar = createNewElement('p', null, botao.texto)

    //1_buttonRetornar>
    buttonCriado.innerHTML = svgRetornar
    buttonCriado.appendChild(pRetornar)

    eval(`${botao.tipo}(buttonCriado)`)

    return buttonCriado
}

function retornar(button, check = true) {

    button.addEventListener('click', () => {
            
        const elements = document.querySelectorAll('.param-objeto');

        const vazios = []

        elements.forEach((element) => {
            
            if (element.value === '' || element.value === null || (element.value === undefined && element.getAttribute('data-value') === null)) {

                vazios.push(element)
            }
        })

        // Condição para testar se algum elemento possui o atibuto disabled, significa que está sendo chamado na página de post detalhado
        if (Array.from(elements).some((element) => element.disabled === true) || elements.length === 0) {
            
            limpaPagina()
            mostraPaginaProjetos()
            return

        }

        // Condição que testa se há campos preenchidos, para que informações nao sejam perdidas. É emitido uma notificação para que o usuário confirme a saida da página
        if (vazios.length !== (elements.length - 1)) {
            
            const listaNotificacoes = document.getElementById('notificacoes')

            console.log('Existem campos preenchidos')
            const notificacaoAlerta = criaNotificacao('alerta', 'Se você sair agora seu conteúdo não será salvo, confirme:', true)
            listaNotificacoes.appendChild(notificacaoAlerta)

            const listaNotificacaoAlerta = notificacaoAlerta.querySelector('.wrapper-botoes')

            const botaoSair = createNewElement('button', 'botao-sair', 'Sair da Página')
            botaoSair.addEventListener('click', () => {

                // Funcionalidade que volta para a página projetos
                limpaPagina()
                mostraPaginaProjetos()

                // Bloco que transiciona a notificação e remove ela
                notificacaoAlerta.style.opacity = '0'
                notificacaoAlerta.addEventListener('transitionend', () => notificacaoAlerta.remove())

            })

            listaNotificacaoAlerta.prepend(botaoSair)

        } else {

            limpaPagina()
            mostraPaginaProjetos()

        }

    })

}

function excluir(button) {
    
    button.addEventListener('click', () => {

        criaPaginaExcluir()

    })

}

function editar(button) {
    return
}

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

function criaHeaderPagina(tipoPagina, contextoPagina = null, botoesUsados = null, parent = null) {

    const paginaMap = {

        editor: {
            svg:`
            <svg viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="icone-header">
                        <title>code</title>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="icon" fill="#000000" transform="translate(37.333333, 128.141872)">
                                <path d="M111.084954,16.7215774 L141.254831,46.8914721 L60.356556,127.806522 L141.254831,208.721577 L111.084954,238.891472 L7.10542736e-15,127.806522 L111.084954,16.7215774 Z M326.063211,16.758697 L295.893333,46.9285921 L376.791607,127.843642 L295.893333,208.758697 L326.063211,238.928592 L437.148163,127.843642 L326.063211,16.758697 Z M231.145356,3.69482223e-12 L272.358192,11.0429459 L206.100516,258.319957 L164.887681,247.277012 L231.145356,3.69482223e-12 Z" id="Combined-Shape">
                                </path>
                            </g>
                        </g>
                    </svg>
            `,
            nome: 'Editor de Códigos',
            contexto: contextoPagina !== null ? contextoPagina : 'Não Definido',
            botoes: botoesUsados !== null ? botoesUsados : 'retornar'
        },

        projetos: {

            svg: `
            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" class="icone-header"><path d="M553.89 875.24c0.15-0.02 0.29-0.05 0.44-0.07l-0.19-0.19-0.25 0.26z" fill="#fff"/><path d="M877.72 658.29V109.71H292.58v109.71h-146.3v438.86H73.14v256h877.71v-256h-73.13z m-73.14-475.43v475.43H637.99c-25.34 43.54-71.99 73.14-126 73.14s-100.66-29.6-126-73.14h-20.28V182.86h438.87zM219.43 292.57h73.14v365.71h-73.14V292.57z m658.28 548.57H146.28V731.43h202.97c41.2 45.9 100.38 73.14 162.75 73.14 62.36 0 121.55-27.24 162.75-73.14h202.97v109.71z" fill="#fff" /><path d="M402.28 292.57h365.71v73.14H402.28zM402.28 438.86h365.71V512H402.28z" fill="#fff" /></svg>
            `,
            nome: 'Projetos Salvos',
            contexto: contextoPagina !== null ? contextoPagina : 'Projetos localStorage',
            botoes: botoesUsados !== null ? botoesUsados : 'editar excluir'
        }
        
    }

    const pagina = paginaMap[tipoPagina]

    //<1_divWrapperHeader  <div class="header-editor">
    const divWrapperHeader = createNewElement('div', 'header-editor')

        //<2_divHeaderInfo  <div class="header-wrapper">
        const divHeaderInfo = createNewElement('div', 'header-wrapper')

            //*3_svgHeader
            const svgHeader = pagina.svg

            //*3_pPagina  <p>Editor de Códigos</p>
            const pPagina = createNewElement('p', null, pagina.nome)

            //*3_pPagina  <p>Editor de Códigos</p>
            const pContexto = createNewElement('p', null, pagina.contexto)
            pContexto.setAttribute('style', 'width: 56px')

        //2_divHeaderInfo>  
        divHeaderInfo.innerHTML = svgHeader
        divHeaderInfo.appendChild(pPagina)
        divHeaderInfo.appendChild(pContexto)


        //<2_buttonRetornar  <button type="button" class="retornar">
        const listaBotoes = pagina.botoes.split(' ')
        const buttons = listaBotoes.map((button) => criaBotaoheader(button))
        // Usar o Function() como o eval para exetuar funções conforme os items listados no pagina.botoes     
        // Ficaria assim: buttons.listaBotoes.map((button) => Function(`criaBotaoHeader${button}()`))
        // Para funcionar teria que ser implementado com uma função criadora para cada botaoHeader, internamente seriam atribuidas suas funções e eventlisteners

    //1_divWrapperHeader> 
    divWrapperHeader.appendChild(divHeaderInfo)
    // divWrapperHeader.appendChild(buttonRetornar)
    buttons.forEach((button) => {

        // button.addEventListener('click', () => {
            
        //     const elements = document.querySelectorAll('.param-objeto');

        //     const vazios = []

        //     elements.forEach((element) => {
                
        //         if (element.value === '' || element.value === null || (element.value === undefined && element.getAttribute('data-value') === null)) {

        //             vazios.push(element)
        //         }
        //     })

        //     // Condição para testar se algum elemento possui o atibuto disabled, significa que está sendo chamado na página de post detalhado
        //     if (Array.from(elements).some((element) => element.disabled === true)) {
                
        //         limpaPagina()
        //         mostraPaginaProjetos()
        //         return

        //     }

        //     // Condição que testa se há campos preenchidos, para que informações nao sejam perdidas. É emitido uma notificação para que o usuário confirme a saida da página
        //     if (vazios.length !== (elements.length - 1)) {
                
        //         const listaNotificacoes = document.getElementById('notificacoes')

        //         console.log('Existem campos preenchidos')
        //         const notificacaoAlerta = criaNotificacao('alerta', 'Se você sair agora seu conteúdo não será salvo, confirme:', true)
        //         listaNotificacoes.appendChild(notificacaoAlerta)

        //         const listaNotificacaoAlerta = notificacaoAlerta.querySelector('.wrapper-botoes')

        //         const botaoSair = createNewElement('button', 'botao-sair', 'Sair da Página')
        //         botaoSair.addEventListener('click', () => {

        //             // Funcionalidade que volta para a página projetos
        //             limpaPagina()
        //             mostraPaginaProjetos()

        //             // Bloco que transiciona a notificação e remove ela
        //             notificacaoAlerta.style.opacity = '0'
        //             notificacaoAlerta.addEventListener('transitionend', () => notificacaoAlerta.remove())

        //         })

        //         listaNotificacaoAlerta.prepend(botaoSair)

        //     } else {

        //         limpaPagina()
        //         mostraPaginaProjetos()

        //     }

        // })

        divWrapperHeader.appendChild(button)
    })

    if (parent !== null) {
        parent.appendChild(divWrapperHeader)
    }

    return divWrapperHeader
    
}
