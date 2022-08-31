import { Container } from "./styles";

export function Searchbar(props) {

  function searchPokemon() {

  }

  return (
    <Container>
      <input type="text" placeholder="Digite o nome do pokémon" />
      <button onClick={searchPokemon}>Search</button>
    </Container>
  )
}