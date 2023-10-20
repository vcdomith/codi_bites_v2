
// Usar com o onchange="textAreaChanged(this)" no html

// function textAreaChanged(element) {
//     element.style.border = '2px solid #ffffff00';
// }

const textAreasIds = document.querySelectorAll('textarea');
// const textArea = document.getElementById('textAreaNome')

textAreasIds.forEach(textArea => {
    
    textArea.addEventListener('input', function() {
        if (textArea.value.trim() === '') {
            textArea.classList.remove('filled');
        } else {
            textArea.classList.add('filled');
        }
    });

});

// const highlightButton = document.querySelector('.highlight');

// highlightButton.addEventListener('click', function() {
//     if (highlightButton.classList.contains('active')) {
//         highlightButton.classList.remove('active')
//     } else {
//         highlightButton.classList.add('active')
//     }
// })

// colorPicker.on('change', 'input[type=color]', function() {
//     this.parentNode.style.backgroundColor = this.value;
//   });


// $(document).on('change', 'input[type=color]', function() {
//     this.parentNode.style.backgroundColor = this.value;
//   });

// Array de uma nodeList com todos elementos que devem ser salvos de um projeto
//const elementList = Array.from(document.querySelectorAll('.param-objeto'))

//  const getElementListValues = (list) => list.map((element) => element.value);


/*___________________________________________________________________________

Primeiramente, transferir todas essa lógica para um arquivo diferente, para organizar melhor o projeto

Não é necessário instânciar uma classe para depois usá-la em uma função para salvar o projeto no localStorage.
Devo pensar melhor em como organizar essa lógica de armazenamento melhor.



*/

class ElementArray {

    constructor(){
        this.elements = Array.from(document.querySelectorAll('.param-objeto'))
    }

    getValues(){
        return this.elements.map((element) => element.value)
    }

    getKeys(){
        return this.elements.map((element) => element.classList[0])
    }
}

function criaProjeto(ElementArray) {

    const tagText = document.querySelector('.tag')

    const keys = ElementArray.getKeys()
    const values = ElementArray.getValues()

    const projeto = {
        fotoAutor: './assets/Photo.svg',
        nomeAutor: 'Nilvo',
        comentarios: 0,
        likes: 0,
        corTexto: tagText.style.color
    }

    keys.forEach((element, index) => {
        projeto[element] = values[index]
    })

    return projeto
}


//___________________________________________________________________________




// class Projeto {
//     nome
//     descricao
//     cor
//     tag
//     codigo
//     // fotoAutor
//     // nomeAutor

//     constructor(pNome, pDescricao, pCor, pTag, pCodigo, pFotoAutor, pNomeAutor) {
//         this.nome = pNome
//         this.descricao = pDescricao
//         this.cor = pCor
//         this.tag = pTag
//         this.codigo = pCodigo
//         // this.fotoAutor = pFotoAutor 
//         // this.nomeAutor = pNomeAutor
//     }
// }

// Ao dar submit

// // Cria um objeto da lista de parametros
// const listaParametros = new ElementArray()

// // Uso o spread operator para criar o objeto Projeto com base na lista de elementos
// const projeto = new Projeto(...listaParametros.getValues())

function salvaProjeto(array) {

    const projeto = array.elements.map()

}



/*

Lógica para guardar e depois criar lista com todos os posts

const a = new ElementArray()
const projeto = criaProjeto(a)

localStorage.setItem(`${projeto.titulo}`, JSON.stringify(projeto))

-> Lista com todas as keys(projetos) no localStorage 
const listaProjetos = Object.keys(localStorage)

-> criaPost() para cada projeto dentro do localStorage
listaProjetos.forEach((key) => criaPost(JSON.parse(localStorage[key])))

*/

// window.onload = function() {
//     // Seleciona todos os elementos code-input
//     // const listaProjetos = Object.keys(localStorage)
//     // listaProjetos.forEach((projeto) => criaPost(JSON.parse(localStorage[projeto])))

//     criaPostNovo(listaPosts)

//     const rangeLocalStorage = range(localStorage.length).reverse()

//     if (localStorage.length > 0) {
        
//         rangeLocalStorage.forEach((index) => criaPost(JSON.parse(localStorage[index]), listaPosts))
//     }
// }