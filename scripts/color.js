
// Captura cada elemento que terá a funcionalidade da cor dinâmica
const containerSeletor = document.querySelector('.container-seletor')
const colorPickerColor = document.querySelector('.label-seletor-cor');
const colorPicker = document.querySelector('.seletor-cor');
const colorPickerText = document.getElementById('seletor-cor-texto');
const codeHeader = document.querySelector('.opcoes');
const quadradosIcone = document.querySelectorAll('.quadrado-icone');
const seletorLinguagem = document.querySelector('.linguagem')

// Função que calcula contraste da cor de fundo e escolhe branco ou preto dependendo do valor dessa cor
function getContrastYIQ(hexcolor){
	var r = parseInt(hexcolor.substr(0,2),16);
	var g = parseInt(hexcolor.substr(2,2),16);
	var b = parseInt(hexcolor.substr(4,2),16);
	var yiq = ((r*299)+(g*587)+(b*114))/1000;
	return (yiq >= 128) ? '#141414' : '#ffffff';
}

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

    colorPickerText.style.backgroundColor = colorPicker.value;
    colorPickerText.style.setProperty('--cor-placeholder', `${getContrastYIQ(colorPicker.value.slice(1))}85`);

    codeHeader.style.backgroundColor = colorPicker.value;

    // É necessário fatiar o valor hex(sem o #) do colorPicker.value
    colorPickerText.style.color = getContrastYIQ(colorPicker.value.slice(1))
    seletorLinguagem.style.color = getContrastYIQ(colorPicker.value.slice(1))
    seletorLinguagem.style.borderColor = getContrastYIQ(colorPicker.value.slice(1))
    quadradosIcone.forEach((quadradoIcone) => {
        quadradoIcone.style.backgroundColor = getContrastYIQ(colorPicker.value.slice(1))
    })

})