
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

function criaNotificacao(tipoNotificacao, elemento = '', parent) {

    // Instancia um objeto com a base de elementos para cada tipo de notificação('sucesso', 'erro' e 'extra') para ser acessado na função se comporte diferente dependendo de qual input
    const tiposNotificacoes = {
        
        sucesso: {
    
            tipo: 'sucesso',
            svg: '<svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="informacao-svg"><path d="M5 16.577l2.194-2.195 5.486 5.484L24.804 7.743 27 9.937l-14.32 14.32z"/></svg>',
            texto: elemento,
    
        },
        
        erro: {
            
            tipo: 'erro',
            svg: '<svg fill="#000000" width="100%" height="100%" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="informacao-svg"><path d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z"/></svg>',    
            texto: elemento,
            
        },
        
        extra: {
            
            tipo: 'extra',
            svg: '<svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="informacao-svg"><path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"/></svg>',
            texto: elemento,
            
        }
    }

    // Acessa o objeto com os templates e seleciona um dos objetos internos para criar o elemento baseado na chave acessada
    const notificacao = tiposNotificacoes[tipoNotificacao]
    
    // Bloco que assegura que só tenha uma notificação de cada tipo ativa por vez. Menos as 'extra's que são lidadas no escopo da função criaProjeto() porque lá é onde está o Array de elementos vazios.
    const notificacaoExiste = document.getElementById(`notificacao-${notificacao.tipo}`)
    if (notificacaoExiste && notificacaoExiste.id !== 'notificacao-extra') {
        return
    }

    // Elemento em si é criado nesse bloco a seguir. Cada campo que modifica por tipo acessa o objeto notificacao e consegue o valor necessário
    const notificacaoCriada = createNewElement('li', 'notificacao')
    notificacaoCriada.classList.add(`notificacao-${notificacao.tipo}`)
    notificacaoCriada.setAttribute('id', `notificacao-${notificacao.tipo}`)

        const wrapperInfo = createNewElement('div', 'wrapper-informacao')
        
            const svgInfo = notificacao.svg

            const h3Info = createNewElement('h3', 'informacao-h3', notificacao.texto)
            h3Info.classList.add(`informacao-h3-${notificacao.tipo}`)
        
        wrapperInfo.innerHTML = svgInfo
        wrapperInfo.appendChild(h3Info)

        const botaoDispensar = createNewElement('button', 'botao-dispensar', 'Dispensar')
        botaoDispensar.setAttribute('id', `botao-dispensar-${notificacao.tipo}`)
        botaoDispensar.setAttribute('type', 'button')

    notificacaoCriada.appendChild(wrapperInfo)

    tipoNotificacao === 'sucesso' ? notificacaoCriada.appendChild(botaoDispensar) : null

    parent.appendChild(notificacaoCriada)

    botaoDispensar.addEventListener('click', () => {

        notificacaoCriada.style.opacity = '0'
        notificacaoCriada.remove()
    })

    const tempoNotificacaoVisivel = 100000

    setTimeout(() => {
        if (notificacaoCriada) {
            notificacaoCriada.style.opacity = '0'
            notificacaoCriada.addEventListener('transitionend', () => notificacaoCriada.remove())
        }
    }, tempoNotificacaoVisivel)
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
        criaNotificacao('erro', 'Não foi possível salvar o projeto. Você precisa preencher os seguintes campos:', listaNotificacoes)

        const notificacaoErro = document.querySelector('.notificacao-erro')

        // Condição para que notificações-extras não sejam chamadas mais de uma vez enquanto estiver na tela
        if (notificacaoErro.querySelector('#notificacao-extra')) {
            console.log('Notificação já está sendo msotrada, espere para poder chama-lá denovo')
            return false
        }

        camposVazios.forEach((element) => {
            criaNotificacao('extra', element.classList[0], notificacaoErro)
        })

        const botaoDispensar = createNewElement('button', 'botao-dispensar', 'Dispensar')
        botaoDispensar.setAttribute('id', `botao-dispensar-erro`)
        botaoDispensar.setAttribute('type', 'button')
        botaoDispensar.addEventListener('click', () => {

            notificacaoErro.style.opacity = '0'
            notificacaoErro.remove()
        })

        notificacaoErro.appendChild(botaoDispensar)

        return false
    }

    // Captura elemento de tag com texto para atrelar sua cor a uma chave
    const tagText = document.querySelector('.tag')

    // Cria um objeto com algumas chaves padrão
    const projeto = {
        fotoAutor: './assets/Photo.svg',
        nomeAutor: 'Nilvo',
        comentarios: 0,
        likes: 0,
        corTexto: tagText.style.color
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