


// class ElementArray {

//     constructor(){
//         this.elements = Array.from(document.querySelectorAll('.param-objeto'))
//     }

//     getValues(){
//         return this.elements.map((element) => element.value)
//     }

//     getKeys(){
//         return this.elements.map((element) => element.classList[0])
//     }
// }

// function criaProjeto(ElementArray) {

//     const elementArray = Array.from(document.querySelectorAll('.param-objeto'))
    
//     const project = {
//         fotoAutor: './assets/Photo.svg',
//         nomeAutor: 'Nilvo',
//         comentarios: 0,
//         likes: 0,
//         corTexto: tagText.style.color
//     }

//     elementArray.forEach((element) => {
//         project[element.classList[0]] = element.value
//     })

//     const tagText = document.querySelector('.tag')

//     const keys = ElementArray.getKeys()
//     const values = ElementArray.getValues()

//     const projeto = {
//         fotoAutor: './assets/Photo.svg',
//         nomeAutor: 'Nilvo',
//         comentarios: 0,
//         likes: 0,
//         corTexto: tagText.style.color
//     }

//     keys.forEach((element, index) => {
//         projeto[element] = values[index]
//     })

//     return projeto
// }

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
        // alert(`Os campos ${camposVazios} devem ser preenchidos para criar o projeto.`)
        const eventoInvalid = new Event('invalid')

        camposVazios.forEach((element) => {
            element.addEventListener('invalid', () => {
                element.setAttribute('placeholder', 'Campo obrigatório, preencha para salvar o projeto')
            })
        })
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
    if (localStorage.getItem(`${projeto.titulo}`)) {
        alert(`Projeto "${projeto.titulo}" já existente no localStorage`)
    }
    // localStorage.setItem(`${localStorage.length} - ${projeto.titulo}`, JSON.stringify(projeto))
    localStorage.setItem(`${localStorage.length}`, JSON.stringify(projeto))
    console.log(`Projeto ${projeto.titulo} salvo no localStorage`)
}

const botaoSalvarProjeto = document.querySelector('#botao-salvar')

botaoSalvarProjeto.addEventListener('click', () => salvaProjeto())