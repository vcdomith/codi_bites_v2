
function corDinamica() {


    // Captura cada elemento que terá a funcionalidade da cor dinâmica
const containerSeletor = document.querySelector('.container-seletor');
const colorPickerColor = document.querySelector('.label-seletor-cor');
const iconeSeletor = document.getElementById('icone-seletor');
const colorPicker = document.querySelector('.seletor-cor');
const colorPickerText = document.getElementById('seletor-cor-texto');
const codeHeader = document.querySelector('.opcoes');
const quadradosIcone = document.querySelectorAll('.quadrado-icone');
const containerLinguagem = document.querySelector('.container-linguagem')
const linguagemPlaceholder = document.querySelector('.texto-container > p')
const iconePlaceholder = document.querySelector('.linguagem-placeholder > svg')
const listaLinguagem = document.querySelector('.linguagem')

// Atribui a funcionalidade do input type=color ao label que o representa
colorPickerColor.addEventListener('click', () => {
    colorPicker.click();
})

// Automáticamente ao escolher uma cor no input a cor de fundo do seletor e do fundo input de texto. A cor do texto é calculada dinâmicamente baseado na cor escolhida
colorPicker.addEventListener('input', () => {

    // Cor da border do container do inputColor e inputText
    containerSeletor.style.borderColor = getContrastYIQ(colorPicker.value.slice(1))

    colorPickerColor.style.backgroundColor = colorPicker.value;
    colorPickerColor.style.borderColor = getContrastYIQ(colorPicker.value.slice(1));
    iconeSeletor.setAttribute('style', `fill: ${getContrastYIQ(colorPicker.value.slice(1))}`)

    colorPickerText.style.backgroundColor = colorPicker.value;
    colorPickerText.style.setProperty('--cor-placeholder', `${getContrastYIQ(colorPicker.value.slice(1))}85`);

    
    if (linguagemPlaceholder.textContent === 'Selecione uma linguagem') {
        
        linguagemPlaceholder.style.color = `${getContrastYIQ(colorPicker.value.slice(1))}85`
        
    } else {
        
        linguagemPlaceholder.style.color = getContrastYIQ(colorPicker.value.slice(1));
        
    }
    iconePlaceholder.setAttribute('style', `fill: ${getContrastYIQ(colorPicker.value.slice(1))}`)
    
    codeHeader.style.backgroundColor = colorPicker.value;


    listaLinguagem.style.backgroundColor = colorPicker.value;
    listaLinguagem.style.borderColor = getContrastYIQ(colorPicker.value.slice(1));
    listaLinguagem.style.setProperty('--cor-fundo', colorPicker.value);
    listaLinguagem.style.setProperty('--cor-texto', getContrastYIQ(colorPicker.value.slice(1)));

    // É necessário fatiar o valor hex(sem o #) do colorPicker.value
    colorPickerText.style.color = getContrastYIQ(colorPicker.value.slice(1))
    containerLinguagem.style.color = getContrastYIQ(colorPicker.value.slice(1))
    containerLinguagem.style.borderColor = getContrastYIQ(colorPicker.value.slice(1))
    quadradosIcone.forEach((quadradoIcone) => {
        quadradoIcone.style.backgroundColor = getContrastYIQ(colorPicker.value.slice(1))
    })

})

}

