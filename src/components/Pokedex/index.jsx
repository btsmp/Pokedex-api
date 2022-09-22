import { Container, LoadingContainer } from "./styles";
import { CardPokemon } from './../CardPokemon/';
import { Loading } from './../Loading';

export function Pokedex(props) {
  const { pokemons, loading, notFound } = props

  return (
    <>
      {loading ? <LoadingContainer><Loading /></LoadingContainer> : <Container>{pokemons.map((poke) => {
        let pokeImg

        if (poke.id > 650) {
          pokeImg = poke.sprites.front_default
        } else {
          pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${ poke.id }.gif`
        }
        return (
          <CardPokemon
            key={poke.id}
            name={poke.name}
            id={poke.id}
            img={pokeImg}
            types={poke.types}
          />)
      })}</Container>}
    </>
  )
}