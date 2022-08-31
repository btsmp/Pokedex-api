import { Container, LoadingContainer } from "./styles";
import { CardPokemon } from './../CardPokemon/';
import { Loading } from './../Loading';

export function Pokedex(props) {
  const { pokemons, loading } = props
  return (
    <>
      {loading ? <LoadingContainer><Loading /></LoadingContainer> : <Container>{pokemons.map((poke) => {
        return (
          <CardPokemon
            key={poke.id}
            name={poke.name}
            id={poke.id}
            img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${ poke.id }.gif`}
            types={poke.types}
          />)
      })}</Container>}
    </>
  )
}