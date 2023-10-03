
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

const highlightButton = document.querySelector('.highlight');

highlightButton.addEventListener('click', function() {
    if (highlightButton.classList.contains('active')) {
        highlightButton.classList.remove('active')
    } else {
        highlightButton.classList.add('active')
    }
})

// colorPicker.on('change', 'input[type=color]', function() {
//     this.parentNode.style.backgroundColor = this.value;
//   });


// $(document).on('change', 'input[type=color]', function() {
//     this.parentNode.style.backgroundColor = this.value;
//   });

// Array de uma nodeList com todos elementos que devem ser salvos de um projeto
//const elementList = Array.from(document.querySelectorAll('.param-objeto'))

//  const getElementListValues = (list) => list.map((element) => element.value);


class ElementArray {

    constructor(){
        this.elements = Array.from(document.querySelectorAll('.param-objeto'))
    }

    getValues(){
        return this.elements.map((element) => element.value)
    }
}

class Projeto {
    nome
    descricao
    cor
    tag
    codigo
    // fotoAutor
    // nomeAutor

    constructor(pNome, pDescricao, pCor, pTag, pCodigo, pFotoAutor, pNomeAutor) {
        this.nome = pNome
        this.descricao = pDescricao
        this.cor = pCor
        this.tag = pTag
        this.codigo = pCodigo
        // this.fotoAutor = pFotoAutor 
        // this.nomeAutor = pNomeAutor
    }
}

// Ao dar submit

// // Cria um objeto da lista de parametros
// const listaParametros = new ElementArray()

// // Uso o spread operator para criar o objeto Projeto com base na lista de elementos
// const projeto = new Projeto(...listaParametros.getValues())