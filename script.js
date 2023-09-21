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
