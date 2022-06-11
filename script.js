function buscarDados(){
   const request = axios.get('https://rickandmortyapi.com/api/character/118')
   request.then(buscarElementoData)
}

function buscarElementoData(resposta){
    personagem = resposta.data
    console.log(personagem)
    mostrarDadosNaTela()
}

function mostrarDadosNaTela(){
    const elementoImagem = document.querySelector('.imagemUsuario')
    const elementoNome = document.querySelector('.nomeUsuario')
    const elementoEspecie = document.querySelector('.especieDoUsuario')

    elementoImagem.setAttribute('src', personagem.image)
    elementoNome.innerHTML = personagem.name
    elementoEspecie.innerHTML = personagem.species
}