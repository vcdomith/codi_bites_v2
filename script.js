// Usar com o onchange="textAreaChanged(this)" no html

// function textAreaChanged(element) {
//     element.style.border = '2px solid #ffffff00';
// }

const textAreasIds = document.querySelectorAll('textarea');
// const textArea = document.getElementById('textAreaNome')

textAreasIds.forEach(textArea => {
    
    textArea.addEventListener('input', function() {
        if (textArea.value.trim() === '') {
            textArea.classList.remove('filled');
        } else {
            textArea.classList.add('filled');
        }
    });

});

const highlightButton = document.querySelector('.highlight');

highlightButton.addEventListener('click', function() {
    if (highlightButton.classList.contains('active')) {
        highlightButton.classList.remove('active')
    } else {
        highlightButton.classList.add('active')
    }
})

const colorPickerColor = document.querySelector('.label-seletor-cor');
const colorPicker = document.querySelector('.seletor-cor');
const colorPickerText = document.getElementById('seletor-cor-texto');

colorPickerColor.addEventListener('click', () => {
    colorPicker.click();
})

colorPicker.addEventListener('input', () => {
    colorPickerColor.style.backgroundColor = colorPicker.value;
    colorPickerText.style.backgroundColor = colorPicker.value;
})

// colorPicker.on('change', 'input[type=color]', function() {
//     this.parentNode.style.backgroundColor = this.value;
//   });


// $(document).on('change', 'input[type=color]', function() {
//     this.parentNode.style.backgroundColor = this.value;
//   });