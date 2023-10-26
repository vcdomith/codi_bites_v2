function getContrastYIQ(hexcolor){
	var r = parseInt(hexcolor.substr(0,2),16);
	var g = parseInt(hexcolor.substr(2,2),16);
	var b = parseInt(hexcolor.substr(4,2),16);
	var yiq = ((r*299)+(g*587)+(b*114))/1000;
	return (yiq >= 128) ? '#141414' : '#ffffff';
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function range(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt);
}

function appendMultipleChildren(quantity, parentElement, childElements){

    range(quantity).forEach(() => {
        parentElement.appendChild(childElements.cloneNode(true))
    });

}

function createNewElement(elementTag, elementClass, elementContent = '') {

    const element = document.createElement(elementTag)
    if (elementClass) {

        const stringArr = elementClass.split(' ')

        if (stringArr.length > 1) { 

          stringArr.forEach((classe) => { element.classList.add(classe) })

        } else {

        element.classList.add(elementClass)

        }

    }

    if (elementContent !== undefined) {
        element.textContent = elementContent;
    }
    // element.innerText = elementContent

    return element
}

function palavraCorreta(palavra) {

    // const palavraTratada = capitalize(palavra)

    const palavrasMap = {


        'titulo': 'Título',
        'descricao': 'Descrição',
        'codigo': 'Código',
        'tag': 'Tag',
        'linguagem': 'Linguagem'

    }
    
    if (palavra in palavrasMap) {
        
        return palavrasMap[palavra]

    } else {

        console.log(`Dev: Palavra ${palavra} não encontrada no palavrasMap, atualizar o objeto!`)
        return palavra

    }

}

function mesBrasil(data) {

    const mesesMap = {
        'Jan': 'Jan',
        'Feb': 'Fev',
        'Mar': 'Mar',
        'Apr': 'Abr',
        'May': 'Mai',
        'Jun': 'Jun',
        'Jul': 'Jul',
        'Aug': 'Ago',
        'Sep': 'Set',
        'Oct': 'Out',
        'Nov': 'Nov',
        'Dez': 'Dez',

    }   

    return mesesMap[data[1]]

}

function rgbStringToHex(rgbString) {
    // Use a regular expression to extract the RGB values from the string.
    const match = rgbString.match(/(\d+), (\d+), (\d+)/);
  
    if (match) {
      const r = parseInt(match[1], 10);
      const g = parseInt(match[2], 10);
      const b = parseInt(match[3], 10);
  
      // Convert the RGB values to hexadecimal and pad with 0 if needed.
      const hexR = r.toString(16).padStart(2, '0');
      const hexG = g.toString(16).padStart(2, '0');
      const hexB = b.toString(16).padStart(2, '0');
  
      // Combine the hexadecimal values with a '#' symbol and return the result.
      return `#${hexR}${hexG}${hexB}`;
    } else {
      // Return an error message or handle the invalid input as needed.
      return "Invalid RGB string";
    }
}
