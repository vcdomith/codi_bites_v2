function palavraAdaptadaTransform(palavra) {

    palavrasTarget = [
        'Título',
        'Descrição',
        'Código',
    ]

    palavrasTarget.forEach((palavraTarget) => {
        if (palavraTarget[0] === palavra[0] ) {

            return palavraTarget

        }
    })
}