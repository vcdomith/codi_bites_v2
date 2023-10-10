{/*<li class="post">
    <div class="editor">
        <div class="opcoes">
            <div class="icone-wrapper">
                <div class="quadrado-icone"></div>
                <div class="quadrado-icone"></div>
                <div class="quadrado-icone"></div>
            </div>
            <h5>Tag</h5>
        </div>
        <code-input class="comunidade-codigo" lang="py" placeholder="Escreva seu código aqui"></code-input>
    </div>
    <div class="detalhes-post">
        <textarea name="" id="" class="comunidade-titulo"
        rows="2">Pesquisa Binária em Python</textarea>
        <textarea name="" id="" class="comunidade-descricao" rows="3" spellcheck="false" readonly>Descricao projeto asdfasjdçflakjsçdlkfjaçlsdkjfaçlskdj façlskdjfça lksdjf çalskdjf açlskjfçalksdjfaçl skdjfaç laçslkdjfçalskdjf çalskj</textarea>
        <h4>Python</h4>
        <div class="social-autor">
            <div class="social">
                <div>
                    <img src="./assets/comentarios.svg" alt=""><p style="margin: 0;">0</p>
                </div>
                <div>
                    <img src="./assets/likes.svg" alt=""><p style="margin: 0;">0</p>
                </div>
            </div>
            <div class="autor">
                <div>
                    <img src="./assets/Photo.svg" alt="Foto usuário"><p style="margin: 0;">@Nilvo</p>
                </div>
            </div>
        </div>
    </div>
</li> */}

function range(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt);
}

function appendMultipleChildren(quantity, parentElement, childElements){

    range(quantity).forEach(() => {
        parentElement.appendChild(childElements.cloneNode(true))
    });

}

function createNewElement(elementTag, elementClass, elementContent = '') {

    const element = document.createElement(elementTag)
    if (elementClass) {
        element.classList.add(elementClass)
    }
    element.innerText = elementContent

    return element
}

const listaPosts = document.querySelector('.lista-posts')

function criaPost(projeto) {

    // 1|<li class="post">
    const liPost = createNewElement('li','post')

        //  2|<div class="editor">
        const divWrapperEditor = createNewElement('div', 'editor')

            //   3|<div class="opcoes">
            const divWrapperOpcoes = createNewElement('div', 'opcoes')
            //
                //    4|<div class="icone-wrapper">
                const divWrapperIcones = createNewElement('div', 'icone-wrapper')

                //      5|<div class="quadrado-icone"></div>
                const divQuadradoIcone = createNewElement('div', 'quadrado-icone')
                
                //    /4|</div class="icone-wrapper">
                appendMultipleChildren(3, divWrapperIcones, divQuadradoIcone)
            
                //      5|<h5>Tag</h5>
                const h5TagPost = createNewElement('h5', elementContent = projeto.tag)
              
            //    /3|<div class="opcoes">
            divWrapperOpcoes.appendChild(h5TagPost)
        
            //   3|<code-input class="comunidade-codigo" lang="py" placeholder="Escreva seu código aqui"></code-input>
            const codeInput = createNewElement('code-input','comunidade-codigo')
            codeInput.setAttribute('lang', projeto.linguagem)
            codeInput.setAttribute('placeholder', 'Escreva seu código aqui')

        //  /2|<div class="editor">
        divWrapperEditor.appendChild(divWrapperEditor)

        //   2|<div class="detalhes-post">
        const divWrapperDetalhes = createNewElement('div', 'detalhes-post')

            //   3|<textarea name="" id="" class="comunidade-titulo" rows="2">Pesquisa Binária em Python</textarea>
            const textareaTitulo = createNewElement('textarea', 'comunidade-titulo')
            textareaTitulo.setAttribute('rows', '2')

            //   3|<textarea name="" id="" class="comunidade-descricao" rows="3" spellcheck="false" readonly></textarea>
            const textareaDecricao = createNewElement('textarea', 'comunidade-descricao')
            textareaDecricao.setAttribute('rows', '3')
            textareaDecricao.setAttribute('spellcheck', 'false')
            textareaDecricao.setAttribute('readonly', 'true')

            //   3|<h4>Linguagem</h4>
            const h4Linguagem = createNewElement('h4')

            //   3|<div class="social-autor">
            const divWrapperSocialAutor = createNewElement('div', 'social-autor')

                //    4|<div class="social">
                const divWrapperSocial = createNewElement('div', 'social')

                    //     5|<div>
                    const divWrapperComentarios = createNewElement('div')

                        //      6|<img src="./assets/comentarios.svg" alt="imagem comentarios">
                        const imgComentarios = createNewElement('img')
                        imgComentarios.setAttribute('src', './assets/comentarios.svg')
                        imgComentarios.setAttribute('alt', 'imagem comentarios')

                        //      6|<p style="margin: 0;">0</p>
                        const pQuantidadeComentarios = createNewElement('p', elementContent = projeto.comentarios)
                        pQuantidadeComentarios.setAttribute('style', 'margin: 0;')

                    //     /5|</div>
                    divWrapperComentarios.appendChild(imgComentarios)
                    divWrapperComentarios.appendChild(pQuantidadeComentarios)

                    //    5|<div>
                    const divWrapperLikes = createNewElement('div')

                        //      6|<img src="./assets/likes.svg" alt="imagem coração likes">
                        const imgLikes = createNewElement('img')
                        imgLikes.setAttribute('src', './assets/likes.svg')
                        imgLikes.setAttribute('alt', 'imagem coração likes')

                        //      6|<p style="margin: 0;">0</p>
                        const pQuantidadeLikes = createNewElement('p')
                        pQuantidadeLikes.setAttribute('style', 'margin: 0;')

                    //     /5|</div>
                    divWrapperLikes.appendChild(imgLikes)
                    divWrapperLikes.appendChild(pQuantidadeLikes)

                //    /4|</div class="social">
                divWrapperSocial.appendChild(divWrapperComentarios)
                divWrapperSocial.appendChild(divWrapperLikes)

                //    4|<div class="autor">
                const divAutor = createNewElement('div', 'autor')

                    //     5|<div>
                    const divWrapperAutor = createNewElement('div')

                        //      6|<img src="./assets/Photo.svg" alt="Foto usuário">
                        const imgAutor = createNewElement('img')
                        imgAutor.setAttribute('src', projeto.fotoAutor)
                        imgAutor.setAttribute('alt', 'Foto usuário')

                        //      6|<p style="margin: 0;">@Nome Autor</p>
                        const pAutor = createNewElement('p', projeto.nomeAutor)
                        pAutor.setAttribute('style', 'margin: 0;')
                    
                    //     /5|</div>
                    divWrapperAutor.appendChild(imgAutor)
                    divWrapperAutor.appendChild(pAutor)

                //    /4|</div class="autor">
                divAutor.appendChild(divWrapperAutor)
            
            //   /3|</div class="social-autor">
            divWrapperSocialAutor.appendChild(divWrapperSocial)
            divWrapperSocialAutor.appendChild(divAutor)

        //  /2|<div class="detalhes-post">
        divWrapperEditor.appendChild(codeInput)

    //    
    // /1|<li class="post">
    liPost.appendChild(divWrapperEditor)
    liPost.appendChild(divWrapperDetalhes)
}

/* 
Guardado aqui caso o appendMultipleChildren() não funcione
*/

// for (const i in range(3)){

//     //     5|<div class="quadrado-icone"></div>
//     const divQuadradoIcone = document.createElement('div')
//     divQuadradoIcone.classList.add('quadrado-icone')

//     //    /4|<div class="icone-wrapper">
//     divWrapperIcones.appendChild(divQuadradoIcone)
// }