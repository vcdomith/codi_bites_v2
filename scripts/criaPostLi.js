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

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

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

        const stringArr = elementClass.split(' ')

        if (stringArr.length > 1) { 

          stringArr.forEach((classe) => { element.classList.add(classe) })

        } else {

        element.classList.add(elementClass)

        }

    }

    if (elementContent !== undefined) {
        element.textContent = elementContent;
    }
    // element.innerText = elementContent

    return element
}

function criaPost(projeto, parent) {

    /* LEGENDA:
        <#_nomeElemento: Abre/Cria o elemento pai
        #_nomeElemento>: Fechao elemnto pai, dando append em todos os filhos 
        *#_nomeElemento: Abre/Fecha o elemento de uma vez | Elemento que é apenas filho |
    */

    //<1 <li class="post">
    const liPost = createNewElement('button','post')

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
                    h5TagPost.setAttribute('style', 'text-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3), 0px 6px 15px rgba(0, 0, 0, 0.21), 0px 1px 22px rgba(0,0,0,.18);')
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
}

function criaPostNovo(parent) {

    // <li class="post-novo">
//                     <button>
//                         <img src="./assets/plus-circle.png" alt="simbolo de mais">
//                         <p>
//                             Novo post
//                         </p>
//                     </button>
//                 </li>

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

    return buttonCriado
}

function criaHeaderPagina(tipoPagina, contextoPagina = null, parent = null) {

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
            botoes: 'retornar'
        },

        projetos: {

            svg: `
            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" class="icone-header"><path d="M553.89 875.24c0.15-0.02 0.29-0.05 0.44-0.07l-0.19-0.19-0.25 0.26z" fill="#fff"/><path d="M877.72 658.29V109.71H292.58v109.71h-146.3v438.86H73.14v256h877.71v-256h-73.13z m-73.14-475.43v475.43H637.99c-25.34 43.54-71.99 73.14-126 73.14s-100.66-29.6-126-73.14h-20.28V182.86h438.87zM219.43 292.57h73.14v365.71h-73.14V292.57z m658.28 548.57H146.28V731.43h202.97c41.2 45.9 100.38 73.14 162.75 73.14 62.36 0 121.55-27.24 162.75-73.14h202.97v109.71z" fill="#fff" /><path d="M402.28 292.57h365.71v73.14H402.28zM402.28 438.86h365.71V512H402.28z" fill="#fff" /></svg>
            `,
            nome: 'Projetos Salvos',
            contexto: 'Projetos localStorage',
            botoes: 'excluir editar'
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

    //1_divWrapperHeader> 
    divWrapperHeader.appendChild(divHeaderInfo)
    // divWrapperHeader.appendChild(buttonRetornar)
    buttons.forEach((button) => {

        button.addEventListener('click', () => {
            
            limpaPagina()
            mostraPaginaProjetos()

        })
        divWrapperHeader.appendChild(button)

    })

    if (parent !== null) {
        parent.appendChild(divWrapperHeader)
    }

    return divWrapperHeader
    
}

function criaEditorNovo() {

    const linguagens = [
        'python', 'javaScript', 'typeScript', 'HTML',
        'CSS', 'scss', 'C', 'C++',
        'PHP', 'java', 'ruby', 'rust',
        'SQL', 'django', 'clojure', 'haskell'
    ]


    const divWrapperHeader = criaHeaderPagina('editor', 'Criando Novo Projeto')
    
    //<1_divWrapperEditor  <div class="editor">
    const divWrapperEditor = createNewElement('div', 'editor')

        //<2_divWrapperOpcoes  <div class="opcoes">
        const divWrapperOpcoes = createNewElement('div', 'opcoes')

            //<3_divWrapperIcones  <div class="icone-wrapper">
            const divWrapperIcones = createNewElement('div', 'icone-wrapper')

                //*4_divQuadradoIcone  3*<div class="quadrado-icone"></div>
                const divQuadradoIcone = createNewElement('div', 'quadrado-icone')

            //3_divWrapperIcones>  
            appendMultipleChildren(3, divWrapperIcones, divQuadradoIcone)

            //<3_divWrapperBotoes  <div class="botoes">
            const divWrapperBotoes = createNewElement('div', 'botoes')

                //<4_divContainerLinguagem  <div class="container-linguagem">
                const divContainerLinguagem = createNewElement('div', 'container-linguagem')

                    //<5_spanPlaceholder  <span class="linguagem-placeholder">
                    const spanPlaceholder = createNewElement('span', 'linguagem-placeholder')

                        //<6_spanTextoContainer  <span class="texto-container">
                        const spanTextoContainer = createNewElement('span', 'texto-container')

                            //*7_pPlaceholder  <p>Selecione uma linguagem</p>
                            const pPlaceholder = createNewElement('p', null, 'Selecione uma linguagem')

                        //6_spanTextoContainer>
                        spanTextoContainer.appendChild(pPlaceholder)

                        //*6_svgPlaceholder
                        const svgPlaceholder = '<svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z"/></svg>'

                    //5_spanPlacehodler>
                    spanPlaceholder.innerHTML = svgPlaceholder
                    spanPlaceholder.prepend(spanTextoContainer)

                    //<5_ulLinguagem  <ul class="linguagem param-objeto" style="list-style-type: none;">
                    const ulLinguagem = createNewElement('ul', 'linguagem param-objeto')
                    ulLinguagem.setAttribute('style', 'list-style-type: none;')

                        //*6_liLinguagem  <li class="linguagem-opcao" value="$linguagem">capitalize($linguagem)</li>
                        linguagens.forEach((linguagem) => {

                            const linguagemElemento = createNewElement('li', 'linguagem-opcao', `${capitalize(linguagem)}`)
                            linguagemElemento.setAttribute('value', `${linguagem}`)

                    //5_ulLinguagem> Para cada linguagem na lista de linguagens
                    ulLinguagem.appendChild(linguagemElemento)

                    })
                
                //4_divContainerLinguagem>  
                divContainerLinguagem.appendChild(spanPlaceholder)
                divContainerLinguagem.appendChild(ulLinguagem)

                //<4_divContainerSeletor  <div class="container-seletor">
                const divContainerSeletor = createNewElement('div', 'container-seletor')

                    //*5_inputTagTexto  <input type="text" size="1" class="tag seletor-texto param-objeto" id="seletor-cor-texto" placeholder="Tag projeto" required>
                    const inputTagTexto = createNewElement('input', 'tag seletor-texto param-objeto')
                    inputTagTexto.setAttribute('id', 'seletor-cor-texto')
                    inputTagTexto.setAttribute('placeholder', 'Tag projeto')
                    inputTagTexto.setAttribute('required', 'true')

                    //<5_labelSeletorCor  <label for="input" class="label-seletor-cor">
                    const labelSeletorCor = createNewElement('label', 'label-seletor-cor')
                    labelSeletorCor.setAttribute('for', 'input')

                        //*6__svgSeletorCor  
                        const svgSeletorCor = `
                        <svg viewBox="-1.2 -1.2 26.40 26.40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" class="icone-seletor">

                                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                    
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                                    <g id="SVGRepo_iconCarrier"> <title>color_picker_line</title> <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Design" transform="translate(-336.000000, -96.000000)"> <g id="color_picker_line" transform="translate(336.000000, 96.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path> <path d="M20.4768,3.51125 C21.6484,4.68282 21.6484,6.58232 20.4768,7.75389 L18.944,9.28676 C19.4787,10.3993 19.2849,11.7743 18.3625,12.6966 L17.6484,13.4107 C16.8674,14.1918 15.601,14.1918 14.82,13.4107 L8.3347,19.896 C7.77209,20.4586 7.00903,20.7747 6.21338,20.7747 L4.41338,20.7747 C3.75063,20.7747 3.21338,20.2374 3.21338,19.5747 L3.21338,17.7747 C3.21338,16.9791 3.52945,16.216 4.09206,15.6534 L10.5773,9.1681 C9.79629,8.38705 9.79629,7.12072 10.5773,6.33968 L11.2915,5.62553 C12.2138,4.70321 13.5888,4.5094 14.7013,5.04412 L16.2342,3.51125 C17.4058,2.33968 19.3053,2.33968 20.4768,3.51125 Z M11.9916,10.5823 L5.50627,17.0676 L5.41945639,17.1666653 C5.28653972,17.3402 5.21338,17.5537 5.21338,17.7747 L5.21338,17.7747 L5.21338,18.7747 L6.21338,18.7747 L6.34482519,18.7660245 C6.5615275,18.7372861 6.76420667,18.63805 6.92049,18.4818 L6.92049,18.4818 L13.4058,11.9965 L11.9916,10.5823 Z M19.0626,4.92546 C18.6721,4.53494 18.0389,4.53494 17.6484,4.92546 L17.6484,4.92546 L15.5341,7.03975 C15.1397,7.43416 14.5002,7.43415 14.1058,7.03975 C13.7192,6.65311 13.0923,6.65311 12.7057,7.03975 L12.7057,7.03975 L11.9916,7.75389 L16.2342,11.9965 L16.9483,11.2824 C17.335,10.8957 17.335,10.2689 16.9483,9.88224 C16.5539,9.48785 16.5539,8.84838 16.9483,8.45396 L16.9483,8.45396 L19.0626,6.33968 C19.4531,5.94915 19.4531,5.31599 19.0626,4.92546 Z" id="icone-seletor" fill="#141414"> </path> </g> </g> </g> </g>
                                    
                                </svg>
                        `

                        //*6_inputSeletorCor  <input type="color" class="cor seletor-cor param-objeto" value="#141414" required>
                        const inputSeletorCor = createNewElement('input', 'cor seletor-cor param-objeto')
                        inputSeletorCor.setAttribute('type', 'color')
                        inputSeletorCor.setAttribute('value', '#141414')
                        inputSeletorCor.setAttribute('required', 'true')

                    //5_labelSeletorCor> 
                    labelSeletorCor.innerHTML = svgSeletorCor
                    labelSeletorCor.appendChild(inputSeletorCor)

                //4_divContainerSeletor>
                divContainerSeletor.appendChild(inputTagTexto)
                divContainerSeletor.appendChild(labelSeletorCor)

            //3_divWrapperBotoes>
            divWrapperBotoes.appendChild(divContainerLinguagem)
            divWrapperBotoes.appendChild(divContainerSeletor)

        //2_divWrapperOpcoes>
        divWrapperOpcoes.appendChild(divWrapperIcones)
        divWrapperOpcoes.appendChild(divWrapperBotoes)

        //*2_code-input <code-input lang="python" placeholder="Escreva seu código aqui" class="codigo param-objeto" required></code-input>
        const codeInputElement = createNewElement('code-input', 'codigo param-objeto')
        codeInputElement.setAttribute('lang', 'python')
        codeInputElement.setAttribute('placeholder', 'Escreva seu código aqui')
        codeInputElement.setAttribute('required', 'true')

    //1_divWrapperEditor>
    divWrapperEditor.appendChild(divWrapperOpcoes)
    divWrapperEditor.appendChild(codeInputElement)

    //<1_divWrapperDetalhes  <div class="wrapper">
    const divWrapperInformacoes = createNewElement('div', 'wrapper')

        //<2_divWrapperDetalhes  <div class="detalhes">
        const divWrapperDetalhes = createNewElement('div', 'detalhes')

            //<3_divWrapperTitulo  <div>
            const divWrapperTitulo = createNewElement('div', null)

                //*4_h3LabelTitulo  <h3>Título</h3>
                const h3LabelTitulo = createNewElement('h3', null, 'Título')

                //*4_textareaTitulo  <textarea type="text" name="nome-projeto" id="textAreaNome" class="titulo nome-projeto param-objeto" placeholder="Nome Projeto" required></textarea>
                const textareaTitulo = createNewElement('textarea', 'titulo nome-projeto param-objeto')
                textareaTitulo.setAttribute('type', 'text')
                textareaTitulo.setAttribute('name', 'nome-projeto')
                textareaTitulo.setAttribute('id', 'textAreaNome')
                textareaTitulo.setAttribute('placeholder', 'Nome Projeto')
                textareaTitulo.setAttribute('required', 'true')

            //3_divWrapperTitulo>
            divWrapperTitulo.appendChild(h3LabelTitulo)
            divWrapperTitulo.appendChild(textareaTitulo)

            //<3_divWrapperDescricao  <div>
            const divWrapperDescricao = createNewElement('div', null)

                //*4_h3LabelDescricao  <h3>Descrição</h3>
                const h3LabelDescricao = createNewElement('h3', null, 'Descrição')

                //*4_textareaDescricao  <textarea type="text" name="descricao-projeto" id="textAreaDescricao" class="descricao descricao-projeto param-objeto" placeholder="Descrição Projeto" required></textarea>
                const textareaDescricao = createNewElement('textarea', 'descricao descricao-projeto param-objeto')
                textareaDescricao.setAttribute('type', 'text')
                textareaDescricao.setAttribute('name', 'descricao-projeto')
                textareaDescricao.setAttribute('id', 'textAreaDescricao')
                textareaDescricao.setAttribute('placeholder', 'Descrição Projeto')
                textareaDescricao.setAttribute('required', 'true')

            //3_divWrapperDescricao>    
            divWrapperDescricao.appendChild(h3LabelDescricao)
            divWrapperDescricao.appendChild(textareaDescricao)

        //2_divWrapperDetalhes>  
        divWrapperDetalhes.appendChild(divWrapperTitulo)
        divWrapperDetalhes.appendChild(divWrapperDescricao)

        //<2_divWrapperSalvar <div class="personalizacao-salvar">
        const divWrapperSalvar = createNewElement('div', 'personalizacao-salvar')

            //<3_buttonSalvar <button type="submit" id="botao-salvar" class="botao-salvar">Salvar projeto</button>
            const buttonSalvar = createNewElement('button', 'botao-salvar', 'Salvar projeto')
            buttonSalvar.setAttribute('type', 'submit')
            buttonSalvar.setAttribute('id', 'botao-salvar')

                //*4_svgSalvar
                const svgSalvar = `
                <svg viewBox="0 -35 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <title>disk</title>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="work-case" fill="#000000" transform="translate(85.333333, 85.333333)">
                                    <path d="M243.498667,1.42108547e-14 L341.333333,97.8346667 L341.333333,341.333333 L1.42108547e-14,341.333333 L1.42108547e-14,1.42108547e-14 L243.498667,1.42108547e-14 Z M213.333333,234.666667 L128,234.666667 L128,298.688 L213.333333,298.688 L213.333333,234.666667 Z M85.3333333,42.6666667 L42.6666667,42.6666667 L42.6666667,298.666667 L85.3333333,298.666667 L85.3333333,192 L256,192 L256,298.666667 L298.666667,298.666667 L298.666667,115.498667 L256,72.8533333 L256,149.333333 L85.3333333,149.333333 L85.3333333,42.6666667 Z M213.333333,42.6666667 L128,42.6666667 L128,106.688 L213.333333,106.688 L213.333333,42.6666667 Z" id="Mask"></path>
                                </g>
                            </g>
                        </svg>
                `
                
                //*4_pSalvar
                const pSalvar = createNewElement('p', null, 'Salvar projeto')
            
            //3_buttonSalvar>
            buttonSalvar.innerHTML = svgSalvar
            buttonSalvar.appendChild(pSalvar)

        //2_divWrapperSalvar> 
        divWrapperSalvar.appendChild(buttonSalvar)

    //1_divWrapperInformacoes 
    divWrapperInformacoes.appendChild(divWrapperDetalhes)
    divWrapperInformacoes.appendChild(divWrapperSalvar)

    const containerParent = document.querySelector('.container')

    containerParent.appendChild(divWrapperHeader)
    containerParent.appendChild(divWrapperEditor)
    containerParent.appendChild(divWrapperInformacoes)

}

function mostraPostDetalhado() {
    
}

function limpaPagina() {

    const container = document.querySelector('.container')

    container.innerHTML = ''

}

function mostraPaginaProjetos() {

    // Seleciona todos os elementos code-input
    // const listaProjetos = Object.keys(localStorage)
    // listaProjetos.forEach((projeto) => criaPost(JSON.parse(localStorage[projeto])))

    //{ Cria a ul para ser alimentada de posts para elemento dentro do localStorage
    const container = document.querySelector('.container')

    criaHeaderPagina('projetos', null, container)

    const listaPosts = createNewElement('ul', 'lista-posts')
    listaPosts.style.listStyle = 'none'
    container.appendChild(listaPosts)
    //}

    criaPostNovo(listaPosts)

    const rangeLocalStorage = range(localStorage.length).reverse()

    if (localStorage.length > 0) {
        
        rangeLocalStorage.forEach((index) => criaPost(JSON.parse(localStorage[index]), listaPosts))
    }

}

window.onload = function() {
    // Seleciona todos os elementos code-input
    // const listaProjetos = Object.keys(localStorage)
    // listaProjetos.forEach((projeto) => criaPost(JSON.parse(localStorage[projeto])))

    //{ Cria a ul para ser alimentada de posts para elemento dentro do localStorage
    // const container = document.querySelector('.container')

    // criaHeaderPagina('projetos', null, container)

    // const listaPosts = createNewElement('ul', 'lista-posts')
    // listaPosts.style.listStyle = 'none'
    // container.appendChild(listaPosts)
    // //}

    // criaPostNovo(listaPosts)

    // const rangeLocalStorage = range(localStorage.length).reverse()

    // if (localStorage.length > 0) {
        
    //     rangeLocalStorage.forEach((index) => criaPost(JSON.parse(localStorage[index]), listaPosts))
    // }
    mostraPaginaProjetos()
}
