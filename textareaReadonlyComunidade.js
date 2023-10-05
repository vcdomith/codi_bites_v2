
// É possível que depois que eu fizer a lógica que alimenta a lista de projetos através de um script que isso nem precise ser usado, mas por enquanto, deve ser usado

// Assegura que o script funcione depois que tudo foi carregado, para que o atributo do code-input seja escrito após sua criação, que não acontece se não usar o window.onload
window.onload = function() {
    // Seleciona todos os elementos code-input
    let codeInputElements = document.querySelectorAll("code-input");

    codeInputElements.forEach((cInput) => cInput.setAttribute('disabled'))
}