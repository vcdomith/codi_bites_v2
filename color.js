
// Captura cada elemento que terá a funcionalidade da cor dinâmica
const colorPickerColor = document.querySelector('.label-seletor-cor');
const colorPicker = document.querySelector('.seletor-cor');
const colorPickerText = document.getElementById('seletor-cor-texto');

// Função que calcula contraste da cor de fundo e escolhe branco ou preto dependendo do valor dessa cor
function getContrastYIQ(hexcolor){
	var r = parseInt(hexcolor.substr(0,2),16);
	var g = parseInt(hexcolor.substr(2,2),16);
	var b = parseInt(hexcolor.substr(4,2),16);
	var yiq = ((r*299)+(g*587)+(b*114))/1000;
	return (yiq >= 128) ? '#141414' : 'white';
}

// Atribui a funcionalidade do input type=color ao label que o representa
colorPickerColor.addEventListener('click', () => {
    colorPicker.click();
})

// Automáticamente ao escolher uma cor no input a cor de fundo do seletor e do fundo input de texto. A cor do texto é calculada dinâmicamente baseado na cor escolhida
colorPicker.addEventListener('input', () => {
    colorPickerColor.style.backgroundColor = colorPicker.value;
    colorPickerText.style.backgroundColor = colorPicker.value;

    // É necessário fatiar o valor hex(sem o #) do colorPicker.value
    colorPickerText.style.color = getContrastYIQ(colorPicker.value.slice(1))

})