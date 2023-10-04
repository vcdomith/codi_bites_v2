function update(text) {
    
    let elementoResultado = document.querySelector('#elemento-resultado')

    elementoResultado.innerText = text

    Prism.highlightElement(elementoResultado);
}