import { FavoriteProvider } from "../../contexts/favoritesContext";
import { Header } from "../../components/Header"
import { getPokemons } from '../../utils/api';
import { Pokedex } from "../../components/Pokedex"
import { useEffect, useState } from "react";

export function Fav() {

  const [ loading, setLoading ] = useState(false)
  const [ pokemons, setPokemons ] = useState([])


  const favoritesKey = '@favorites-user'
  const fav = JSON.parse(window.localStorage.getItem(favoritesKey)) || []
  const [ favorites, setFavorites ] = useState(fav)

  const updateFavoritesPokemon = (name) => {
    const updatedFavorites = [ ...favorites ]
    const favoriteIndex = favorites.indexOf(name)

    if (favoriteIndex >= 0) {
      updatedFavorites.splice(favoriteIndex, 1);
    } else {
      updatedFavorites.push(name);
    }

    window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites))
    setFavorites(updatedFavorites)
  }

  const fetchFavPokemons = async () => {

    try {
      setLoading(true)
      const dataPokemons = favorites.map(async favorite => {
        return await getPokemons(`https://pokeapi.co/api/v2/pokemon/${ favorite }`)
      })

      const results = await Promise.all(dataPokemons)
      console.log(results)
      setPokemons(results)
      setLoading(false)

    } catch (err) {
      console.log(err)
    }

  }

  useEffect(() => {
    fetchFavPokemons()
  }, [])


  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritesPokemon,
      }}
    >
      <Header />
      <Pokedex pokemons={pokemons} loading={loading} />
    </FavoriteProvider>

  )
}