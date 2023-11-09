
function criaNotificacao(tipo, conteudo, retornaElemento = false, parentElement = null) {

    const notificacoes = {

        sucesso: {
    
            tipo: 'sucesso',
            svg: '<svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="informacao-svg"><path d="M5 16.577l2.194-2.195 5.486 5.484L24.804 7.743 27 9.937l-14.32 14.32z"/></svg>',
            texto: conteudo,
    
        },
        
        erro: {
            
            tipo: 'erro',
            svg: '<svg fill="#000000" width="100%" height="100%" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="informacao-svg"><path d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z"/></svg>',    
            texto: conteudo,
            
        },
        
        alerta: {
            
            tipo: 'alerta',
            svg: '<svg viewBox="-4 0 34 34" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" class="informacao-svg"><defs><style>.cls-1{fill:none;stroke:#020202;stroke-miterlimit:10;stroke-width:1.91px;}</style></defs><line class="cls-1" x1="10.09" y1="10.09" x2="10.09" y2="16.77"/><path class="cls-1" d="M20.59,22.5H3.41A1.92,1.92,0,0,1,1.5,20.59V7.23H18.68V20.59A1.92,1.92,0,0,0,20.59,22.5Z"/><path class="cls-1" d="M22.5,3.41V20.59a1.91,1.91,0,0,1-3.82,0V7.23H5.32V1.5h9.54l1.87,1.91Z"/><line class="cls-1" x1="9.14" y1="18.68" x2="11.05" y2="18.68"/></svg>',
            texto: conteudo,
        },

        extra: {
            
            tipo: 'extra',
            svg: '<svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="informacao-svg"><path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"/></svg>',
            texto: conteudo,
        }
    }

    const notificacaoSelecionada = notificacoes[tipo]

    if (document.getElementById(`notificacao-${tipo}`)) {

        if (notificacaoSelecionada.tipo !== 'extra' && document.querySelector(`#notificacao-${tipo} > div > h3`).textContent === notificacaoSelecionada.texto) {

            return
        }

    }

    const notificacaoElemento = criaElementoNotificacao(notificacaoSelecionada)

    const tempoNotificacaoVisivel = 10000

    setTimeout(() => {
        
        if (notificacaoElemento) {
            notificacaoElemento.style.opacity = '0'
            notificacaoElemento.addEventListener('transitionend', () => notificacaoElemento.remove())
        }
    }, tempoNotificacaoVisivel)

    if (retornaElemento === true) {
        
        return notificacaoElemento
        
    }
    
    if (parentElement !== null) {
    
        parentElement.appendChild(notificacaoElemento)
        return 

    }

    const listaNotificacoes = document.getElementById('notificacoes')

    listaNotificacoes.appendChild(notificacaoElemento)
}

function criaElementoNotificacao(notificacao) {

    const notificacaoCriada = createNewElement('li', 'notificacao')
    notificacaoCriada.classList.add(`notificacao-${notificacao.tipo}`)
    notificacaoCriada.setAttribute('id', `notificacao-${notificacao.tipo}`)

        const wrapperInfo = createNewElement('div', 'wrapper-informacao')
        
            const svgInfo = notificacao.svg

            const h3Info = createNewElement('h3', 'informacao-h3', notificacao.texto)
            h3Info.classList.add(`informacao-h3-${notificacao.tipo}`)
        
        wrapperInfo.innerHTML = svgInfo
        wrapperInfo.appendChild(h3Info)

        const listaNotificacoesExtras = createNewElement('ul', 'lista-notificacao-extra')
        listaNotificacoesExtras.setAttribute('style', 'list-style: none;')

        const divWrapperBotoes = createNewElement('div', 'wrapper-botoes')

            const botaoDispensar = createNewElement('button', 'botao-dispensar', 'Dispensar')
            botaoDispensar.setAttribute('id', `botao-dispensar-${notificacao.tipo}`)
            botaoDispensar.setAttribute('type', 'button')

        divWrapperBotoes.appendChild(botaoDispensar)    

    notificacaoCriada.appendChild(wrapperInfo)
    notificacaoCriada.appendChild(listaNotificacoesExtras)

    if (notificacao.tipo !== 'extra') {

        notificacaoCriada.appendChild(divWrapperBotoes)
        
    }

    botaoDispensar.addEventListener('click', () => {

        notificacaoCriada.style.opacity = '0'
        notificacaoCriada.addEventListener('transitionend', () => notificacaoCriada.remove())
    })

    return notificacaoCriada
}

function apagaNotificacao(notificacao) {

    notificacao.style.opacity = '0'
    notificacao.addEventListener('transitionend', () => notificacao.remove())

}
