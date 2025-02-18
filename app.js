'use strict' /*ajudar a manter a boa prática e não ter erros */

const cidades = [
    {nome: 'Tênis Nike Modelo Preto', cor: 'orange', icon: '1.png'},
    {nome: 'Tênis Nike Modelo Preto e Amarelo', cor: 'red', icon: '2.png'},
    {nome: 'Tênis Nike Modelo Branco e Laranja', cor: 'purple', icon: '3.png'},
    {nome: 'Tênis Nike Modelo Azul e Amarelo', cor: 'green', icon: '4.png'},
    {nome: 'Tênis Nike Modelo Azul e Branco', cor: 'blue', icon: '5.png'}

]

function criarMenu(menu1){
    const novoItem = document.createElement('li')
    const novoLink = document.createElement('a')
    const menu = document.getElementById('menu')
    const novaImagem = document.createElement('img')

    novoLink.href = '#'
    novoLink.textContent = menu1.nome

    novaImagem.src = `./icon/${menu1.icon}`

    novoItem.appendChild(novaImagem)
    novoItem.appendChild(novoLink)
    novoItem.style = `--cor-hover: ${menu1.cor}`

    /* appendChild -> Insere um novo item dentro de algo */
    menu.appendChild(novoItem)
}

const produtos = [
    {   nome: 'Tenis Preto Nike', 
        cor: 'orange', 
        icon: '1.png',
        descricao: 'O Tênis Nike [Modelo] combina estilo, conforto e desempenho para quem busca um calçado versátil. Seu design moderno e minimalista na cor preta permite fácil combinação com qualquer look, seja para o dia a dia ou para a prática esportiva.! ',
        preco: 'R$ 400.00',
        avaliacao: 3
    },
    {   nome: 'Tenis Amarelo e Preto', 
        cor: 'red', 
        icon: '2.png', 
        descricao: 'O Tênis Nike [Modelo] traz um design arrojado e cheio de personalidade, combinando o clássico preto com detalhes vibrantes em amarelo. Ideal para quem busca estilo e desempenho em um único calçado, seja para treinos, corridas ou uso casual.! ',
        preco: 'R$ 350.00',
        avaliacao: 4
    },
    {   nome: 'Tenis Laranja e Branco', 
        cor: 'purple', 
        icon: '3.png',
        descricao: 'O Tênis Nike [Modelo] combina estilo, conforto e tecnologia para quem busca um calçado versátil e cheio de personalidade. Com um design moderno, a base branca traz elegância, enquanto os detalhes em laranja adicionam um toque vibrante e esportivo.!',
        preco: 'R$ 600.00',
        avaliacao: 5
    },
    {   nome: 'Tenis azul e Amarelo', 
        cor: 'green', 
        icon: '4.png',
        descricao: 'O Tênis Nike [Modelo] é a escolha perfeita para quem busca um calçado com design impactante e alto desempenho. Com uma combinação vibrante de azul e amarelo, ele une estilo esportivo e modernidade, ideal para o dia a dia e para atividades físicas.! ',
        preco: 'R$ 300.00',
        avaliacao: 3
    },
    {   nome: 'Tenis Azul e Branco', 
        cor: 'blue', 
        icon: '5.png',
        descricao: 'O Tênis Nike [Modelo] combina estilo e desempenho, trazendo uma estética sofisticada com a clássica combinação de azul e branco. Seja para o dia a dia ou para a prática esportiva, esse modelo oferece conforto, respirabilidade e tração para acompanhar seu ritmo com leveza e estabilidade.',
        preco: 'R$ 500.00',
        avaliacao: 5
    }
]

function criarCards(card){
    const container = document.getElementById('container')
    const novoBloco = document.createElement('div')
    const novaImagem = document.createElement('img')
    const novoTitulo = document.createElement('h1')
    const novaDescricao = document.createElement('p')
    const novoPreco = document.createElement("span")
    const novaAvaliacao = document.createElement('h2')
    const novoBotao = document.createElement('button')
    novoBloco.classList.add('novoBloco')

    // Acresecentando informações 
    novaImagem.src = `./icon/${card.icon}`
    novoTitulo.textContent = card.nome
    novaDescricao.textContent = card.descricao
    novoPreco.textContent = card.preco

    // Acrescentar as estrelas
    // repeat -> Faz repetir até dar o número que está nas avaliações 
    // 5 - Faz com que no total fique cinco estrelas mesmo não sendo a avaliação
    novaAvaliacao.textContent = `${'★'.repeat(card.avaliacao)}${'☆'.repeat(5 - card.avaliacao)}`
    novaAvaliacao.style = `--cor-hover: ${card.cor}`
    novoBotao.textContent = "Adquira Já"
    novoBotao.style = `--cor-hover: ${card.cor}`
    novoBloco.style = `--cor-hover: ${card.cor}`

    

    novoBloco.appendChild(novaImagem)
    novoBloco.appendChild(novoTitulo)
    novoBloco.appendChild(novaDescricao)
    novoBloco.appendChild(novoPreco)
    novoBloco.appendChild(novaAvaliacao)
    novoBloco.appendChild(novoBotao)

    container.appendChild(novoBloco)

}

cidades.forEach(criarMenu)
produtos.forEach(criarCards)