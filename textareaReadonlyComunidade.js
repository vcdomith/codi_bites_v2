
// // Funcionalidade para o code-input não ser editável apenas na página da comunidade
// const editoresCodigo = document.querySelectorAll('textarea')

// editoresCodigo.forEach((editor) => editor.setAttribute('readonly', 'true'))

let codeInput = document.querySelector("code-input"); // Or get your element in another way
codeInput.setAttribute("disabled"); // Make read-only - this currently works.