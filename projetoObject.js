class Projeto {
    nome
    descricao
    cor
    tag
    codigo
    fotoAutor
    nomeAutor
    noComentarios
    noLikes

    constructor(pNome, pDescricao, pCor, pTag, pCodigo, pFotoAutor, pNomeAutor) {
        this.nome = pNome
        this.descricao = pDescricao
        this.cor = pCor
        this.tag = pTag
        this.codigo = pCodigo
        this.fotoAutor = pFotoAutor 
        this.nomeAutor = pNomeAutor
        this.noComentarios = 0
        this.noLikes = 0
    }
}

