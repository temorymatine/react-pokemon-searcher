import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {


  state = {
    pokemonData: [],
    search: ""
  }


componentDidMount(){
  fetch("http://localhost:3000/pokemon")
  .then(r=>r.json())
  .then(pokemonData=>this.setState({pokemonData}))
}

searchPokemon = (text) => {
    this.setState({search: text})
}

updatePokemon = () => {
  let newPokemonArray = this.state.pokemonData.filter((pokemon) => {
    return pokemon.name.includes(this.state.search) })
    
    // this.setState({pokemonData: newPokemonArray})
    return newPokemonArray
}




  render() {

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search searchPokemon={this.searchPokemon} />
        <br />
        <PokemonCollection pokemon={this.updatePokemon()} />
      </Container>
    )
  }
}

export default PokemonPage
