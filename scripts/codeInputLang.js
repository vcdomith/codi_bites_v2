
const selectLanguage = document.getElementById('lang-select')
const codeInputElement = document.querySelector('code-input')

selectLanguage.addEventListener('change', () => {
    codeInputElement.setAttribute('lang', `${selectLanguage.value}`)
})