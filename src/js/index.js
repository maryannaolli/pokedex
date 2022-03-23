/* 
quando clicar no pokemon da listagem temos que esconder o cartão do pokemon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem 

pra isso vamos precisar trabalhar com dois elementos 
1 - listagem
2 - cartão pokemon

precisamos criar duas varáveis JS para trabalhar com os elementos na tela

vamos precisar trabalahar com um evento de clique feito pelo usuário na listagem de pokémons 

- remover a classe aberto só do cartão que está aberto 
- ao clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual cartão mostrar 
- remover a classe ativo que marca o pokémon selecionado 
- adicionar classe ativo no item da lista selecionado 
*/

// precisamos criar duas varáveis JS para trabalhar com os elementos na tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
   //vamos precisar trabalahar com um evento de clique feito pelo usuário na listagem
   


    pokemon.addEventListener('click', () => {
       // remover a classe aberto só do cartão que está aberto 
       const cartaoPokemonAberto = document.querySelector('.aberto')
       cartaoPokemonAberto.classList.remove('aberto')

       //ao clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual cartão mostrar 
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativo que marca o pokémon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar classe ativo no item da lista selecionado 
        pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})