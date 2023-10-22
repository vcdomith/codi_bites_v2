
function palavraCorreta(palavra) {

    // const palavraTratada = capitalize(palavra)

    const palavrasMap = {


        'titulo': 'Título',
        'descricao': 'Descrição',
        'codigo': 'Código',
        'tag': 'Tag'

    }
    
    if (palavra in palavrasMap) {
        
        return palavrasMap[palavra]

    } else {

        console.log(`Dev: Palavra ${palavra} não encontrada no palavrasMap, atualizar o objeto!`)
        return palavra

    }

}

function mesBrasil(data) {

    const mesesMap = {
        'Jan': 'Jan',
        'Feb': 'Fev',
        'Mar': 'Mar',
        'Apr': 'Abr',
        'May': 'Mai',
        'Jun': 'Jun',
        'Jul': 'Jul',
        'Aug': 'Ago',
        'Sep': 'Set',
        'Oct': 'Out',
        'Nov': 'Nov',
        'Dez': 'Dez',

    }   

    return mesesMap[data[1]]

}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Lógica para criar e mostrar notificações

function createNewElement(elementTag, elementClass, elementContent = '') {
    
    const element = document.createElement(elementTag)

    if (elementClass) {
        element.classList.add(elementClass)
    }
    
    if (elementContent !== undefined) {
        element.textContent = elementContent;
    }
    // element.innerText = elementContent
    
    return element
}

const listaNotificacoes = document.getElementById('notificacoes')

function criaNotificacao(tipo, conteudo, elementoPai = '') {

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
        
        extra: {
            
            tipo: 'extra',
            svg: '<svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="informacao-svg"><path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"/></svg>',
            texto: conteudo,
        }
    }

    const notificacaoSelecionada = notificacoes[tipo]

    if (document.getElementById(`notificacao-${tipo}`)) {

        if (notificacaoSelecionada.tipo !== 'extra') {

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

    if (elementoPai !== '') {
        
        elementoPai.appendChild(notificacaoElemento)
        
    }
    
    return notificacaoElemento
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

        const botaoDispensar = createNewElement('button', 'botao-dispensar', 'Dispensar')
        botaoDispensar.setAttribute('id', `botao-dispensar-${notificacao.tipo}`)
        botaoDispensar.setAttribute('type', 'button')

    notificacaoCriada.appendChild(wrapperInfo)
    notificacaoCriada.appendChild(listaNotificacoesExtras)

    if (notificacao.tipo !== 'extra') {

        notificacaoCriada.appendChild(botaoDispensar)
        
    }

    botaoDispensar.addEventListener('click', () => {

        notificacaoCriada.style.opacity = '0'
        notificacaoCriada.addEventListener('transitionend', () => notificacaoCriada.remove())
    })

    return notificacaoCriada
}

// Lógica para criar e salvar projeto

function criaProjeto() {

    // NodeList com todos os elementos necessários para criar o projeto (marcados pela sua classe no HTML)
    const elementArray = document.querySelectorAll('.param-objeto');

    // Bloco que guarda o nome de cada elemento vazio
    const camposVazios = []

    elementArray.forEach((element) => {
        if (element.value === '' || element.value === null) {
            camposVazios.push(element)
        }
    })

    // Se a Array de campos vazio estiver vazia a função continua, caso contrário esse bloco intemrrompe o processo e avisa o usuário. 
    if (camposVazios.length > 0) {

        const tipoNotificacaoEmitido = 'erro'

        const notificacaoErro = criaNotificacao(tipoNotificacaoEmitido, 'Não foi possível salvar o projeto. Você precisa preencher os seguintes campos:', listaNotificacoes)

        if (!notificacaoErro) {
            console.log('Notificação já está sendo mostrada, espere para poder chama-lá denovo')
            return false
        }
        
        const notificacaoErroLista = notificacaoErro.querySelector('ul')

        camposVazios.forEach((element) => {

            const nomeCampoVazio = palavraCorreta(element.classList[0])
            console.log(nomeCampoVazio)

            criaNotificacao('extra', nomeCampoVazio, notificacaoErroLista)
        })

        return false
    }

    // Captura elemento de tag com texto para atrelar sua cor a uma chave
    const tagText = document.querySelector('.tag')

    const data = new Date().toDateString().split(' ')

    // Cria um objeto com algumas chaves padrão
    const projeto = {
        fotoAutor: './assets/Photo.svg',
        nomeAutor: 'Nilvo',
        comentarios: 0,
        likes: 0,
        corTexto: tagText.style.color,
        data: `${data[2]} ${mesBrasil(data)} ${data[3]}`
    }

    // O objeto projeto é alimentado ao iterar a NodeList com todos elementos, para cada elemento:
    elementArray.forEach((element) => {

        // A key do elemento sempre é a primeira classe da lista. Ex: titulo, descricao, codigo...
        const projetoKey = element.classList[0]
        // O valor de cada campo é salvo atrelado ao nome('key') do campo. Ex: O titulo do projeto no textarea...
        const projetoValue = element.value

        // O objeto projeto é populado a cada elemento que é iterado
        projeto[projetoKey] = projetoValue
    })

    return projeto
}

function salvaProjeto() {
    
    const projeto = criaProjeto()

    // criaProjeto() retorna o valor false caso exista um campo não preenchido na aplicação. Condicional que cancela a função antes de um exceção for chamada.
    if (projeto === false) {
        console.log('Função salvaProjeto() cancelada porque há campos não preenchidos')
        return
    }

    // Valida o nome do projeto para assegurar que não tenha nenhuma duplicata ou overwrite no localStorage

    // Vai ser reescrito para que projetos sejam salvos em uma pasta local/github
    if (localStorage.getItem(`${projeto.titulo}`)) {
        criaNotificacao('erro', `Projeto "${projeto.titulo}" já existente no localStorage`, listaNotificacoes)
        return
    }
    // localStorage.setItem(`${localStorage.length} - ${projeto.titulo}`, JSON.stringify(projeto))
    localStorage.setItem(`${localStorage.length}`, JSON.stringify(projeto))

    // console.log(`Projeto ${projeto.titulo} salvo no localStorage`)
    criaNotificacao('sucesso', 'Projeto salvo com sucesso!', listaNotificacoes)
}

const botaoSalvarProjeto = document.querySelector('#botao-salvar')

botaoSalvarProjeto.addEventListener('click', () => salvaProjeto())