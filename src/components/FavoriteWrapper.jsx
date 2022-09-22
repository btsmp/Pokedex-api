import { Pokedex } from "./Pokedex"
import { Empty } from "./Empty"
export function FavoriteWrapper({ pokemons, loading }) {
  return (
    <>
      <h1 className="font-bold flex items-center text-center justify-center text-4xl text-white">Pokémons favoritados</h1>
      {
        pokemons.length == 0 ? <Empty /> : <Pokedex pokemons={pokemons} loading={loading} />
      }
    </>
  )
}