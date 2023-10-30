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

function criaPost(projeto, parent) {

    /* LEGENDA:
        <#_nomeElemento: Abre/Cria o elemento pai
        #_nomeElemento>: Fechao elemnto pai, dando append em todos os filhos 
        *#_nomeElemento: Abre/Fecha o elemento de uma vez | Elemento que é apenas filho |
    */

    //<1 <li class="post">
    const liPost = createNewElement('button',`${projeto.id} post`)

        //<2  <div class="editor">
        const divWrapperEditor = createNewElement('div', 'editor')

            //<3_wrapperOpcoes   <div class="opcoes">
            const divWrapperOpcoes = createNewElement('div', 'opcoes')
            divWrapperOpcoes.style.backgroundColor = projeto.cor
            
                //<4_wrapperIcones    <div class="icone-wrapper">
                const divWrapperIcones = createNewElement('div', 'icone-wrapper')

                    //*5_quadradoIcones      <div class="quadrado-icone"></div>
                    const divQuadradoIcone = createNewElement('div', 'quadrado-icone')
                    // divQuadradoIcone.setAttribute('style', 'box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0,0,0,.12);')
                    divQuadradoIcone.setAttribute('style', `background-color: ${projeto.corTexto}`)
                
                //4_wrapperIcones>    </div class="icone-wrapper">
                appendMultipleChildren(3, divWrapperIcones, divQuadradoIcone)

                //<4_wrapperTexto
                const divWrapperTextoHeader = createNewElement('div', 'wrapper-texto')
                divWrapperTextoHeader.setAttribute('style', `border: 2px solid ${projeto.corTexto}`)
                // divWrapperTextoHeader.setAttribute('style', `background-color: ${projeto.corTexto}`)
            
                    //*4_linguagem   <h4>Linguagem</h4>
                    const h5Linguagem = createNewElement('h5', null, capitalize(projeto.linguagem))
                    h5Linguagem.setAttribute('style', `color: ${projeto.corTexto}; border-right: 2px solid ${projeto.corTexto}`)
                    // h5Linguagem.setAttribute('style', `color: ${projeto.cor}; border-right: 2px solid ${projeto.cor}`)

                    //*4      <h5>Tag</h5>
                    const h5TagPost = createNewElement('h5', null, projeto.tag)
                    h5TagPost.setAttribute('style', `color: ${projeto.corTexto}`)

                divWrapperTextoHeader.appendChild(h5Linguagem)
                divWrapperTextoHeader.appendChild(h5TagPost)
              
            //3_wrapperOpcoes>    <div class="opcoes">
            divWrapperOpcoes.appendChild(divWrapperIcones)
            divWrapperOpcoes.appendChild(divWrapperTextoHeader)
        
            //*3_codeInput   <code-input class="comunidade-codigo" lang="py" placeholder="Escreva seu código aqui"></code-input>
            const codeInput = createNewElement('code-input','comunidade-codigo', projeto.codigo)
            codeInput.setAttribute('lang', projeto.linguagem)
            codeInput.setAttribute('placeholder', 'Escreva seu código aqui')
            codeInput.style.pointerEvents="none"
            codeInput.style.textWrap="wrap"

        //2_wrapperEditor>  <div class="editor">
        divWrapperEditor.appendChild(divWrapperOpcoes)
        divWrapperEditor.appendChild(codeInput)

        //<2_wrapperDetalhes   <div class="detalhes-post">
        const divWrapperDetalhes = createNewElement('div', 'detalhes-post')

            //*3_textareaTitulo   <textarea name="" id="" class="comunidade-titulo" rows="2">Pesquisa Binária em Python</textarea>
            const textareaTitulo = createNewElement('textarea', 'comunidade-titulo', projeto.titulo)
            textareaTitulo.setAttribute('rows', '2')
            textareaTitulo.style.pointerEvents="none"

            //*3_textareaDescricao   <textarea name="" id="" class="comunidade-descricao" rows="3" spellcheck="false" readonly></textarea>
            const textareaDescricao = createNewElement('textarea', 'comunidade-descricao', projeto.descricao)
            textareaDescricao.setAttribute('rows', '3')
            textareaDescricao.setAttribute('spellcheck', 'false')
            textareaDescricao.setAttribute('readonly', 'true')
            textareaDescricao.style.pointerEvents="none"

            //<3_wrapperLinguagemData   <div class="linaguagem-data"> 
            const divWrapperData = createNewElement('div', 'linguagem-data')

                //*4_data        <h5>Data</h5>
                    // Condição que trata projetos antigos que não tinham data ainda
                const data = projeto.data === undefined ? 's/ data' : projeto.data
                const h5Data = createNewElement('h5', null, data)
            
            //>3_wrapperLinguagemData
            divWrapperData.appendChild(h5Data)

            //<3_wrapperSocialAutor   <div class="social-autor">
            const divWrapperSocialAutor = createNewElement('div', 'social-autor')

                //<4_wrapperSocial    <div class="social">
                const divWrapperSocial = createNewElement('div', 'social')

                    //<5_wrapperComentarios     <div>
                    const divWrapperComentarios = createNewElement('div')

                        //*6_imgComentarios      <img src="./assets/comentarios.svg" alt="imagem comentarios">
                        const imgComentarios = createNewElement('img')
                        imgComentarios.setAttribute('src', './assets/comentarios.svg')
                        imgComentarios.setAttribute('alt', 'imagem comentarios')

                        //*6_pQuantComentarios      <p style="margin: 0;">0</p>
                        const pQuantidadeComentarios = createNewElement('p', null, projeto.comentarios)
                        pQuantidadeComentarios.setAttribute('style', 'margin: 0;')

                    //5_wrapperComentarios>     </div>
                    divWrapperComentarios.appendChild(imgComentarios)
                    divWrapperComentarios.appendChild(pQuantidadeComentarios)

                    //<5_wrapperLikes    <div>
                    const divWrapperLikes = createNewElement('div')

                        //*6_imgLikes      <img src="./assets/likes.svg" alt="imagem coração likes">
                        const imgLikes = createNewElement('img')
                        imgLikes.setAttribute('src', './assets/likes.svg')
                        imgLikes.setAttribute('alt', 'imagem coração likes')

                        //*6_pQuantLikes      <p style="margin: 0;">0</p>
                        const pQuantidadeLikes = createNewElement('p', null, projeto.likes)
                        pQuantidadeLikes.setAttribute('style', 'margin: 0;')

                    //5_wrapperLikes>     </div>
                    divWrapperLikes.appendChild(imgLikes)
                    divWrapperLikes.appendChild(pQuantidadeLikes)

                //4_wrapperSocial>    </div class="social">
                divWrapperSocial.appendChild(divWrapperComentarios)
                divWrapperSocial.appendChild(divWrapperLikes)

                //<4_outerAutor    <div class="autor">
                const divAutor = createNewElement('div', 'autor')

                    //<5_innerAutor     <div>
                    const divWrapperAutor = createNewElement('div')

                        //*6_fotoAutor      <img src="./assets/Photo.svg" alt="Foto usuário">
                        const imgAutor = createNewElement('img')
                        imgAutor.setAttribute('src', projeto.fotoAutor)
                        imgAutor.setAttribute('alt', 'Foto usuário')

                        //*6_nomeAutor      <p style="margin: 0;">@Nome Autor</p>
                        const pAutor = createNewElement('p', null, projeto.nomeAutor)
                        pAutor.setAttribute('style', 'margin: 0;')
                    
                    //5_innerAutor>     </div>
                    divWrapperAutor.appendChild(imgAutor)
                    divWrapperAutor.appendChild(pAutor)

                //4_outerAutor>    </div class="autor">
                divAutor.appendChild(divWrapperAutor)
            
            //3_wrapperSocialAutor>   </div class="social-autor">
            divWrapperSocialAutor.appendChild(divWrapperSocial)
            divWrapperSocialAutor.appendChild(divAutor)

        //2_wrapperDetalhes>  <div class="detalhes-post">
        divWrapperDetalhes.appendChild(textareaTitulo)
        divWrapperDetalhes.appendChild(textareaDescricao)
        // divWrapperDetalhes.appendChild(h4Linguagem)
        // divWrapperDetalhes.appendChild(h5Data)
        divWrapperDetalhes.appendChild(divWrapperData)
        divWrapperDetalhes.appendChild(divWrapperSocialAutor)
  
    //1_liPost> <li class="post">
    liPost.appendChild(divWrapperEditor)
    liPost.appendChild(divWrapperDetalhes)

    parent.appendChild(liPost)

    liPost.addEventListener('click', () => {

        limpaPagina()

        const indiceProjetoVinculado = JSON.parse(localStorage[liPost.classList[0]])

        mostraPostDetalhado(indiceProjetoVinculado)

    })
}

function criaPostNovo(parent) {

    // <li class="post-novo">
    //     <button>
    //         <img src="./assets/plus-circle.png" alt="simbolo de mais">
    //         <p>
    //             Novo post
    //         </p>
    //     </button>
    // </li>

    //<1_liWrapperNovoPost  <li class="post-novo">
    const liWrapperNovoPost = createNewElement('li', 'post-novo')

        //<2_botaoWrapperPost  <button>
        const botaoWrapperPost = createNewElement('button')

            //3*imgNovoPost <img src="./assets/plus-circle.png" alt="simbolo de mais">
            const imgNovoPost = createNewElement('img')
            imgNovoPost.setAttribute('src', './assets/plus-circle.png')
            imgNovoPost.setAttribute('alt', 'símbolo de mais')

            //3*pNovoPost  <p>Novo post</p>
            const pNovoPost = createNewElement('p', null, 'Novo post')

        //2_botaoWrapperPost>  
        botaoWrapperPost.appendChild(imgNovoPost)
        botaoWrapperPost.appendChild(pNovoPost)

        botaoWrapperPost.addEventListener('click', () => {

            limpaPagina()
            criaEditorNovo()

        })

    //1_liWrapperNovoPost> 
    liWrapperNovoPost.appendChild(botaoWrapperPost)

    parent.appendChild(liWrapperNovoPost)
}

function limpaPagina() {
    
    const container = document.querySelector('.container')
    
    container.innerHTML = ''
    
}


