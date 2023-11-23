
function criaEditorNovo() {

    const linguagens = [
        'python', 'javaScript', 'typeScript', 'HTML',
        'CSS', 'scss', 'C', 'C++',
        'PHP', 'java', 'ruby'
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
                const textareaTitulo = createNewElement('textarea', 'titulo nome-projeto param-objeto hover')
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
                const textareaDescricao = createNewElement('textarea', 'descricao descricao-projeto param-objeto hover')
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
            
            // Funcionalidade de salvar o projeto
            buttonSalvar.addEventListener('click', () => salvaProjeto())

        //2_divWrapperSalvar> 
        divWrapperSalvar.appendChild(buttonSalvar)

    //1_divWrapperInformacoes 
    divWrapperInformacoes.appendChild(divWrapperDetalhes)
    divWrapperInformacoes.appendChild(divWrapperSalvar)

    const containerParent = document.querySelector('.container')

    containerParent.appendChild(divWrapperHeader)
    containerParent.appendChild(divWrapperEditor)
    containerParent.appendChild(divWrapperInformacoes)
    
    // Após criados e posicionados acrescenta automáticamente a funcionalidade de cor aos elementos 
    corDinamica()
    textareasFilled()
    seletorLinguagem()

}

function mostraPostDetalhado(projeto) {

    const divWrapperHeader = criaHeaderPagina('editor', 'Post Detalhado')
    
    //<1_divWrapperEditor  <div class="editor">
    const divWrapperEditor = createNewElement('div', 'editor post-detalhado')

        //<2_divWrapperOpcoes  <div class="opcoes">
        const divWrapperOpcoes = createNewElement('div', 'opcoes')
        divWrapperOpcoes.style.backgroundColor = projeto.cor

            //<3_divWrapperIcones  <div class="icone-wrapper">
            const divWrapperIcones = createNewElement('div', 'icone-wrapper')

                //*4_divQuadradoIcone  3*<div class="quadrado-icone"></div>
                const divQuadradoIcone = createNewElement('div', 'quadrado-icone')
                divQuadradoIcone.setAttribute('style', `background-color: ${projeto.corTexto}`)

            //3_divWrapperIcones>  
            appendMultipleChildren(3, divWrapperIcones, divQuadradoIcone)

            //<3_divWrapperBotoes  <div class="botoes">
            const divWrapperBotoes = createNewElement('div', 'botoes')
                
                //<4_divWrapperTexto  <div class="wrapper-texto-post">
                const divWrapperTexto = createNewElement('div', 'wrapper-texto-post')
                divWrapperTexto.setAttribute('style', `border: 2px solid ${projeto.corTexto}`)

                    //*5_h5Linguagem  <h5 class="texto-linguagem">Linguagem</h5>
                    const h5Linguagem = createNewElement('h5', 'texto-linguagem', capitalize(projeto.linguagem))
                    h5Linguagem.setAttribute('style', `color: ${projeto.corTexto}; border-right: 2px solid ${projeto.corTexto}; margin: 0; user-select: none;`)

                    //*5_h5Tag  <h5 class="texto-tag">Tag</h5>
                    const h5Tag = createNewElement('h5', 'texto-tag', projeto.tag)
                    h5Tag.setAttribute('style', `color: ${projeto.corTexto}; margin: 0; user-select: none;`)

                divWrapperTexto.appendChild(h5Linguagem)
                divWrapperTexto.appendChild(h5Tag)

                //<4_buttonWrapperCopiar  <div class="botao-copiar">
                const buttonWrapperCopiar = createNewElement('div', 'botao-copiar')
                buttonWrapperCopiar.setAttribute('type', 'button')
                buttonWrapperCopiar.setAttribute('id', 'botao-copiar')
                buttonWrapperCopiar.setAttribute('style', `border: 2px solid ${projeto.corTexto}`)

                    //*5_svgCopiar
                    const svgCopiar = `
                    <svg fill="#000000" version="1.1" id="XMLID_72_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                        viewBox="0 0 24 24" enable-background="new 0 0 100 100" xml:space="preserve">
                    <g id="clipboard">
                        <g>
                            <path d="M22,24H2V2h5V0h10v2h5V24z M4,22h16V4h-3v3H7V4H4V22z M9,5h6V2H9V5z"/>
                        </g>
                    </g>
                    </svg>
                    `

                    const svgCopiado = '<svg fill="#000000" viewBox="5 5 24 24" xmlns="http://www.w3.org/2000/svg" class="informacao-svg"><path d="M5 16.577l2.194-2.195 5.486 5.484L24.804 7.743 27 9.937l-14.32 14.32z"/></svg>'
                    
                    //*5_pCopiar <p>copiar código</p>
                    const pCopiar = createNewElement('p', null, 'copiar código')
                    // pCopiar.setAttribute('style', `color: ${projeto.corTexto}`)
                    pCopiar.style.setProperty('--cor-texto-copiar', projeto.corTexto)
  
                    //4_buttonWrapperCopiar>
                    buttonWrapperCopiar.innerHTML = svgCopiar
                    buttonWrapperCopiar.querySelector('svg').style.setProperty('--cor-svg', projeto.corTexto)

                var intervalo;

                buttonWrapperCopiar.addEventListener('click', () => {

                    clearInterval(intervalo)
                    intervalo = setInterval(() => {

                        buttonWrapperCopiar.innerHTML = svgCopiar
                        buttonWrapperCopiar.appendChild(pCopiar)
                        pCopiar.textContent = 'copiar código'

                    }, 3000)

                    const editorCodigo = document.querySelector('code-input')
                    var range = document.createRange();
                    range.selectNode(editorCodigo);
                    window.getSelection().removeAllRanges();
                    window.getSelection().addRange(range);

                    const listaNotificacoes = document.getElementById('notificacoes')

                    // Try to copy the selected text to the clipboard
                    try {

                        document.execCommand("copy");
                        window.getSelection().removeAllRanges();

                        buttonWrapperCopiar.innerHTML = svgCopiado
                        buttonWrapperCopiar.appendChild(pCopiar)
                        pCopiar.textContent = 'copiado'

                        criaNotificacao('sucesso', `Código copiado com sucesso para a área de transferência`, false, listaNotificacoes)

                    } catch (error) {

                        console.error("Unable to copy code to clipboard: " + error);
                        window.getSelection().removeAllRanges();

                        criaNotificacao('erro', 'Não foi possível copiar o código para a área de transferência', false, listaNotificacoes)
                    }


                })

                buttonWrapperCopiar.appendChild(pCopiar)
                buttonWrapperCopiar.style.setProperty('--cor-botao', projeto.corTexto)
                buttonWrapperCopiar.style.setProperty('--cor-fundo', projeto.cor)

            //3_divWrapperBotoes>
            divWrapperBotoes.appendChild(divWrapperTexto)
            divWrapperBotoes.appendChild(buttonWrapperCopiar)

        //2_divWrapperOpcoes>
        divWrapperOpcoes.appendChild(divWrapperIcones)
        divWrapperOpcoes.appendChild(divWrapperBotoes)

        //*2_code-input <code-input lang="python" placeholder="Escreva seu código aqui" class="codigo param-objeto" required></code-input>
        const codeInputElement = createNewElement('code-input', 'codigo param-objeto' , projeto.codigo)
        codeInputElement.setAttribute('lang', projeto.linguagem)
        codeInputElement.style.setProperty('--cor-fundo-selecao', projeto.cor)
        codeInputElement.style.setProperty('--cor-texto-selecao', projeto.corTexto)

        //<2_divFooterEditor  <div class="footer-editor">
        const divFooterEditor = createNewElement('div', 'footer-editor')

            //<3_buttonExpandirCode <button type="button" id="expandir-code" class="botao-expandir">
            const buttonExpandirCode = createNewElement('button', 'botao-expandir')
            buttonExpandirCode.setAttribute('type', 'button')
            buttonExpandirCode.setAttribute('id', 'expandir-code')

                //*4_svgExpandirCode
                const svgExpandir = `
                <svg fill="#000000" viewBox="0 -3 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z"/></svg>
                ` 
                const svgRetrair = `
                <svg fill="#000000" viewBox="0 -3 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M15.997 13.374l-7.081 7.081L7 18.54l8.997-8.998 9.003 9-1.916 1.916z"/></svg>
                `
            

            //3_buttonExpandirCode> 
            buttonExpandirCode.innerHTML = svgExpandir
            buttonExpandirCode.addEventListener('click', () => {

                if (codeInputElement.style.height !== '100vh') {
                    
                    codeInputElement.style.height = '100vh'
                    codeInputElement.style.transition = 'height 700ms'

                    buttonExpandirCode.innerHTML = svgRetrair

                } else {

                    codeInputElement.style.height = '40vh'

                    buttonExpandirCode.innerHTML = svgExpandir

                }

            })
        
        //2_divFooterEditor>
        divFooterEditor.appendChild(buttonExpandirCode)

    //1_divWrapperEditor>
    divWrapperEditor.appendChild(divWrapperOpcoes)
    divWrapperEditor.appendChild(codeInputElement)
    divWrapperEditor.appendChild(divFooterEditor)

    //<1_divWrapperDetalhes  <div class="wrapper">
    const divWrapperInformacoes = createNewElement('div', 'wrapper post-detalhado')

        //<2_divWrapperDetalhes  <div class="detalhes">
        const divWrapperDetalhes = createNewElement('div', 'detalhes')

            //<3_divWrapperTitulo  <div>
            const divWrapperTitulo = createNewElement('div', null)

                //*4_h3LabelTitulo  <h3>Título</h3>
                const h3LabelTitulo = createNewElement('h3', null, 'Título')

                //*4_textareaTitulo  <textarea type="text" name="nome-projeto" id="textAreaNome" class="titulo nome-projeto param-objeto" placeholder="Nome Projeto" required></textarea>
                const textareaTitulo = createNewElement('textarea', 'titulo nome-projeto param-objeto filled', projeto.titulo)
                textareaTitulo.setAttribute('type', 'text')
                textareaTitulo.setAttribute('name', 'nome-projeto')
                textareaTitulo.setAttribute('id', 'textAreaNome')
                textareaTitulo.setAttribute('disabled', 'true')


            //3_divWrapperTitulo>
            divWrapperTitulo.appendChild(h3LabelTitulo)
            divWrapperTitulo.appendChild(textareaTitulo)

            //<3_divWrapperDescricao  <div>
            const divWrapperDescricao = createNewElement('div', null)

                //*4_h3LabelDescricao  <h3>Descrição</h3>
                const h3LabelDescricao = createNewElement('h3', null, 'Descrição')

                //*4_textareaDescricao  <textarea type="text" name="descricao-projeto" id="textAreaDescricao" class="descricao descricao-projeto param-objeto" placeholder="Descrição Projeto" required></textarea>
                const textareaDescricao = createNewElement('textarea', 'descricao descricao-projeto param-objeto filled', projeto.descricao)
                textareaDescricao.setAttribute('type', 'text')
                textareaDescricao.setAttribute('name', 'descricao-projeto')
                textareaDescricao.setAttribute('id', 'textAreaDescricao')
                textareaDescricao.setAttribute('disabled', 'true')


            //3_divWrapperDescricao>    
            divWrapperDescricao.appendChild(h3LabelDescricao)
            divWrapperDescricao.appendChild(textareaDescricao)

        //2_divWrapperDetalhes>  
        divWrapperDetalhes.appendChild(divWrapperTitulo)
        divWrapperDetalhes.appendChild(divWrapperDescricao)

        //<2_divWrapperInfo <div class="personalizacao-salvar">
        const divWrapperInfo = createNewElement('div', 'personalizacao-salvar')

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
                    const divWrapperAutor = createNewElement('div', 'wrapper-autor')

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

        //2_divWrapperSalvar> 
        divWrapperInfo.appendChild(divWrapperData)
        divWrapperInfo.appendChild(divWrapperSocialAutor)

    //1_divWrapperInformacoes 
    divWrapperInformacoes.appendChild(divWrapperDetalhes)
    divWrapperInformacoes.appendChild(divWrapperInfo)

    const containerParent = document.querySelector('.container')

    containerParent.appendChild(divWrapperHeader)
    containerParent.appendChild(divWrapperEditor)
    containerParent.appendChild(divWrapperInformacoes)

    textareasFilled()

    // Atributo de disabled do code-input tem que ficar no final para ser de fato efetuado, depois que o elemento é criado e inserido no corpo da página
    codeInputElement.setAttribute('disabled', 'true')


}

function criaEditorProjeto(projeto) {

    const linguagens = [
        'python', 'javaScript', 'typeScript', 'HTML',
        'CSS', 'scss', 'C', 'C++',
        'PHP', 'java', 'ruby'
    ]

    const divWrapperHeader = criaHeaderPagina('editor', 'Editando Projeto')
    
    //<1_divWrapperEditor  <div class="editor">
    const divWrapperEditor = createNewElement('div', `${projeto.id} editor`)

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
                            const pPlaceholder = createNewElement('p', null, projeto.linguagem)

                        //6_spanTextoContainer>
                        spanTextoContainer.appendChild(pPlaceholder)

                        //*6_svgPlaceholder
                        const svgPlaceholder = `<svg fill="${projeto.corTexto}" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z"/></svg>`

                    //5_spanPlacehodler>
                    spanPlaceholder.innerHTML = svgPlaceholder
                    spanPlaceholder.prepend(spanTextoContainer)

                    //<5_ulLinguagem  <ul class="linguagem param-objeto" style="list-style-type: none;">
                    const ulLinguagem = createNewElement('ul', 'linguagem param-objeto')
                    ulLinguagem.setAttribute('style', 'list-style-type: none;')
                    ulLinguagem.setAttribute('data-value', projeto.linguagem)

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
                    inputTagTexto.setAttribute('value', projeto.tag)
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
                        inputSeletorCor.setAttribute('value', projeto.cor)
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
        const codeInputElement = createNewElement('code-input', 'codigo param-objeto pagina-editar', projeto.codigo)
        codeInputElement.setAttribute('lang', projeto.linguagem)
        codeInputElement.setAttribute('placeholder', 'Escreva seu código aqui')
        codeInputElement.setAttribute('required', 'true')

        //<2_divFooterEditor  <div class="footer-editor">
        const divFooterEditor = createNewElement('div', 'footer-editor')

            //<3_buttonExpandirCode <button type="button" id="expandir-code" class="botao-expandir">
            const buttonExpandirCode = createNewElement('button', 'botao-expandir')
            buttonExpandirCode.setAttribute('type', 'button')
            buttonExpandirCode.setAttribute('id', 'expandir-code')

                //*4_svgExpandirCode
                const svgExpandir = `
                <svg fill="#000000" viewBox="0 -3 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z"/></svg>
                ` 
                const svgRetrair = `
                <svg fill="#000000" viewBox="0 -3 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M15.997 13.374l-7.081 7.081L7 18.54l8.997-8.998 9.003 9-1.916 1.916z"/></svg>
                `
            

            //3_buttonExpandirCode> 
            buttonExpandirCode.innerHTML = svgExpandir
            buttonExpandirCode.addEventListener('click', () => {

                if (codeInputElement.style.height !== '100vh') {
                    
                    codeInputElement.style.height = '100vh'
                    codeInputElement.style.transition = 'height 700ms'

                    buttonExpandirCode.innerHTML = svgRetrair

                } else {

                    codeInputElement.style.height = '40vh'

                    buttonExpandirCode.innerHTML = svgExpandir

                }

            })
        
        //2_divFooterEditor>
        divFooterEditor.appendChild(buttonExpandirCode)

    //1_divWrapperEditor>
    divWrapperEditor.appendChild(divWrapperOpcoes)
    divWrapperEditor.appendChild(codeInputElement)
    divWrapperEditor.appendChild(divFooterEditor)

    //<1_divWrapperDetalhes  <div class="wrapper">
    const divWrapperInformacoes = createNewElement('div', 'wrapper')

        //<2_divWrapperDetalhes  <div class="detalhes">
        const divWrapperDetalhes = createNewElement('div', 'detalhes')

            //<3_divWrapperTitulo  <div>
            const divWrapperTitulo = createNewElement('div', null)

                //*4_h3LabelTitulo  <h3>Título</h3>
                const h3LabelTitulo = createNewElement('h3', null, 'Título')

                //*4_textareaTitulo  <textarea type="text" name="nome-projeto" id="textAreaNome" class="titulo nome-projeto param-objeto" placeholder="Nome Projeto" required></textarea>
                const textareaTitulo = createNewElement('textarea', 'titulo nome-projeto param-objeto hover', projeto.titulo)
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
                const textareaDescricao = createNewElement('textarea', 'descricao descricao-projeto param-objeto hover', projeto.descricao)
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
                const pSalvar = createNewElement('p', null, 'Atualizar projeto')
            
            //3_buttonSalvar>
            buttonSalvar.innerHTML = svgSalvar
            buttonSalvar.appendChild(pSalvar)
            
            // Funcionalidade de salvar o projeto
            buttonSalvar.addEventListener('click', () => atualizaProjeto(projeto))

        //2_divWrapperSalvar> 
        divWrapperSalvar.appendChild(buttonSalvar)

    //1_divWrapperInformacoes 
    divWrapperInformacoes.appendChild(divWrapperDetalhes)
    divWrapperInformacoes.appendChild(divWrapperSalvar)

    const containerParent = document.querySelector('.container')

    containerParent.appendChild(divWrapperHeader)
    containerParent.appendChild(divWrapperEditor)
    containerParent.appendChild(divWrapperInformacoes)
    
    // Após criados e posicionados acrescenta automáticamente a funcionalidade de cor aos elementos 
    corDinamica()
    textareasFilled()
    seletorLinguagem()

    // Cria-se um custom event de 'input' para que o script de cores funcione ao criar o editor
    const inputEvent = new Event('input', {

        bubbles: true,
        cancelable: true

    })

    textareaTitulo.dispatchEvent(inputEvent)
    textareaDescricao.dispatchEvent(inputEvent)
    inputSeletorCor.dispatchEvent(inputEvent)

}

function textareasFilled() {

    const textAreasIds = document.querySelectorAll('textarea');

    textAreasIds.forEach(textArea => {
    
        textArea.addEventListener('input', function() {
            if (textArea.value.trim() === '') {
                textArea.classList.remove('filled');
            } else {
                textArea.classList.add('filled');
            }
        });
    });

}

function seletorLinguagem() {

    const botaoLinguagem = document.querySelector('.container-linguagem')
    const linguagemSelecionada = document.querySelector('.texto-container > p')
    const listaLinguagens = document.querySelector('.linguagem')
    const linguagemOpcoes = Array.from(document.querySelectorAll('.linguagem-opcao'))
    const codeInputElement = document.querySelector('code-input')


    botaoLinguagem.addEventListener('click', (event) => {

        event.stopPropagation()
            
        if (window.getComputedStyle(listaLinguagens).display === 'none') {
            listaLinguagens.style.display = 'flex';
            listaLinguagens.style.height = listaLinguagens.scrollHeight + 'px'; // Set the height to the actual content's height
            botaoLinguagem.style.borderBottomRightRadius = '0'
            botaoLinguagem.style.borderBottomLeftRadius = '0'
            setTimeout(() => {
                // listaLinguagens.style.height = contentHeight; // Set the height to the content height
            }, 0);
        } else {
            listaLinguagens.style.height = '0';
            setTimeout(() => {
                listaLinguagens.style.display = 'none';
                botaoLinguagem.style.borderBottomRightRadius = '0.5rem'
                botaoLinguagem.style.borderBottomLeftRadius = '0.5rem'
            }, 400); // Delay hiding the list until the transition is complete (300ms)
        }
        })

    document.addEventListener('click', (event) => {
        const isClickInside = botaoLinguagem.contains(event.target) || listaLinguagens.contains(event.target);
        if (!isClickInside) {

            listaLinguagens.style.height = '0';
            setTimeout(() => {
                listaLinguagens.style.display = 'none';
                botaoLinguagem.style.borderBottomRightRadius = '0.5rem'
                botaoLinguagem.style.borderBottomLeftRadius = '0.5rem'
            }, 400); // Delay hiding the list until the transition is complete (400ms)
        }
    });

    linguagemOpcoes.forEach((item) => {

        item.addEventListener('click', (e) => {

            const colorPicker = document.querySelector('.seletor-cor');

            linguagemSelecionada.textContent = item.textContent
            linguagemSelecionada.style.color = getContrastYIQ(colorPicker.value.slice(1))

            listaLinguagens.setAttribute('data-value', item.textContent)

            codeInputElement.setAttribute('lang', listaLinguagens.getAttribute('data-value'))

        })

    })
}

// function fullCodeShown(codeInput) {

//     const textarea = codeInput.querySelector('textarea')

//     for (let height = 100; height < 10000; height += 50) {
        
//         let overflowing = textarea.scrollHeight > textarea.clientHeight
//         if (!overflowing) {
//             break
//         }

//         codeInput.style.height = `${height}px`

//     }

// }
