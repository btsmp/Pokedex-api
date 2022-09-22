import { Header } from "../../components/Header"
import { useFavorites } from "../../hooks/fav"
import { Pokedex } from "../../components/Pokedex"
import { Empty } from "../../components/Empty"



export function Fav() {
  const { favoritesData } = useFavorites()
  return (
    <>
      <Header />
      <h1 className="font-bold flex items-center text-center justify-center text-4xl text-white">Pokémons favoritados</h1>
      {
        favoritesData.length == 0 ? <Empty /> : <Pokedex pokemons={favoritesData} />
      }
    </>

  )
}