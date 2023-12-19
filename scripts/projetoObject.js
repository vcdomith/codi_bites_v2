
// Lógica para criar e salvar projeto

function criaProjeto() {

    // NodeList com todos os elementos necessários para criar o projeto (marcados pela sua classe no HTML)
    const elementArray = document.querySelectorAll('.param-objeto');

    // Bloco que guarda o nome de cada elemento vazio
    const camposVazios = []

    elementArray.forEach((element) => {
        
        if (element.value === '' || element.value === null || (element.value === undefined && element.getAttribute('data-value') === null)) {

            // if (element.value === undefined && element.getAttribute('data-value')) {
                
            // }
            camposVazios.push(element)
        }
    })

    // Se a Array de campos vazio estiver vazia a função continua, caso contrário esse bloco intemrrompe o processo e avisa o usuário. 
    if (camposVazios.length > 0) {

        const tipoNotificacaoEmitido = 'erro'
        const listaNotificacoes = document.getElementById('notificacoes')

        const notificacaoErro = criaNotificacao(tipoNotificacaoEmitido, 'Não foi possível salvar o projeto. Você precisa preencher os seguintes campos:', retornaElemento = true)
        
        if (!notificacaoErro) {
            console.log(`Notificação já está sendo mostrada, espere para poder chama-lá denovo`)
            return false
        }
        
        listaNotificacoes.appendChild(notificacaoErro)
        
        const notificacaoErroLista = notificacaoErro.querySelector('ul')

        camposVazios.forEach((element) => {

            const nomeCampoVazio = palavraCorreta(element.classList[0])

            notificacaoErro.classList.add('tem-notificacoes-extra')

            criaNotificacao('extra', nomeCampoVazio, retornaElemento = false, parentElement = notificacaoErroLista)
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
        corTexto: tagText.style.color === '' ? '#FFF' : rgbStringToHex(tagText.style.color),
        data: `${data[2]} ${mesBrasil(data)} ${data[3]}`,
        id: Date.now().toString()
    }

    // O objeto projeto é alimentado ao iterar a NodeList com todos elementos, para cada elemento:
    elementArray.forEach((element) => {

        // A key do elemento sempre é a primeira classe da lista. Ex: titulo, descricao, codigo...
        const projetoKey = element.classList[0]
        // O valor de cada campo é salvo atrelado ao nome('key') do campo. Ex: O titulo do projeto no textarea...
        const projetoValue = element.value !== undefined ? element.value : element.getAttribute('data-value')

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
    
    // Captura a lista de notificacoes
    const listaNotificacoes = document.getElementById('notificacoes')

    // Valida o nome do projeto para assegurar que não tenha nenhuma duplicata ou overwrite no localStorage

    // Vai ser reescrito para que projetos sejam salvos em uma pasta local/github
    if (localStorage.getItem(`${projeto.titulo}`)) {
        criaNotificacao('erro', `Projeto "${projeto.titulo}" já existente no localStorage`)
        return
    }
    // localStorage.setItem(`${localStorage.length} - ${projeto.titulo}`, JSON.stringify(projeto))
    localStorage.setItem(`${projeto.id}`, JSON.stringify(projeto))
    atualizaLocalStorageKeys()
    // atualizaListaProjetos()
    enviarDadosAPI()

    limpaPagina()                             
    mostraPaginaProjetos()

    // console.log(`Projeto ${projeto.titulo} salvo no localStorage`)
    criaNotificacao('sucesso', 'Projeto salvo com sucesso!')
}

function atualizaProjeto(projetoSelecionado) {

    const projetoAtualizado = criaProjeto()
    const projetoSalvo = JSON.parse(localStorage[projetoSelecionado.id])

    projetoAtualizado['id'] = projetoSelecionado.id
    projetoAtualizado['data'] = projetoSelecionado.data

    if (projetoIgual(projetoAtualizado, projetoSalvo)) {

        criaNotificacao('erro', 'Não há nenhuma alteração para que a atualização seja possível!')
        return

    }
    
    const listaNotificacoes = document.getElementById('notificacoes')

    const notificacaoAlertaSobrescrever = criaNotificacao('alerta', 'Com essa operação você vai sobrescrever o projeto salvo com as informações presentes nessa página, confirme:', true)

    listaNotificacoes.appendChild(notificacaoAlertaSobrescrever)

    const listaNotificacaoAlerta = notificacaoAlertaSobrescrever.querySelector('.wrapper-botoes')

    const botaoConfirmar = createNewElement('button', 'botao-sair', 'Atualizar projeto')
    botaoConfirmar.addEventListener('click', () => {

        // Funcionalidade que atualiza o projeto no localStorage
        localStorage.setItem(projetoSelecionado.id, JSON.stringify(projetoAtualizado))
        atualizaLocalStorageKeys()
        // atualizaListaProjetos()
        enviarDadosAPI()

        // Bloco que transiciona a notificação e remove ela
        apagaNotificacao(notificacaoAlertaSobrescrever) 

        // Bloco que emite notificação de sucesso e retorna o usuário para a página de projeto, para ver o resultado de suas alterações
        criaNotificacao('sucesso', 'Projeto atualizado com sucesso!')
        limpaPagina()
        mostraPaginaProjetos()

    })

    listaNotificacaoAlerta.prepend(botaoConfirmar)

}

// Funcionalidade botão de salvar

// const botaoSalvarProjeto = document.querySelector('#botao-salvar')

// botaoSalvarProjeto.addEventListener('click', () => salvaProjeto())


function apagaNotificacao(notificacao) {

    notificacao.style.opacity = '0'
    notificacao.addEventListener('transitionend', () => notificacaoAlertaSobrescrever.remove())

}

function projetoIgual(projetoAtualizado, projetoSalvo) {

    const projetoAtualizadoKeys = Object.keys(projetoAtualizado)

    for (const key of projetoAtualizadoKeys) {

        if (projetoAtualizado[key] !== projetoSalvo[key]) {
            
            return false

        }

    }

    return true

}

function condicaoSairPagina(projetoSelecionado) {

    const projetoAtualizado = criaProjeto()
    const projetoSalvo = JSON.parse(localStorage[projetoSelecionado])

    projetoAtualizado['id'] = projetoSalvo.id
    projetoAtualizado['data'] = projetoSalvo.data

    if (projetoIgual(projetoAtualizado, projetoSalvo)) {

        return true

    } else {

        return false

    }

}
