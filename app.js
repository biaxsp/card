'use strict'  

const cidades = [
    {nome:'Itapevi', cor: 'red', icon: 'img55.png'},
    {nome:'Jandira', cor: 'blue', icon: 'img55.png'},
    {nome:'Barueri', cor: 'yellow', icon: 'img55.png'},
    {nome:'Osasco', cor:'blue', icon: 'img55.png'} 

    
]
function criarMenu(cidade){
    const novoItem = document.createElement('li')
    const novoLink = document.createElement('a')
    const menu = document.getElementById('menu')
    const novaImagem = document.createElement('Img')

    novaImagem.src = `./icon/${cidade.icon}`

    novoLink.href = '#'
    novoLink.textContent = cidade.nome

    novoItem.appendChild(novaImagem) 
    novoItem.appendChild(novoLink)
    novoItem.style = `--cor-hover: ${cidade.cor}`

    menu.appendChild(novoItem)
}

cidades.forEach(criarMenu)

