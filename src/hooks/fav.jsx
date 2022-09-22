import { createContext, useContext, useEffect, useState } from "react";
import { getPokemons } from "../utils/api";

const FavoritesContext = createContext([])

export function FavProvider({ children }) {
  const [ favorites, setFavorites ] = useState([])
  const [ favoritesData, setFavoritesData ] = useState([])

  const favoritesKey = '@favorites-user'

  function loadFavorites() {
    const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey) || '[]') || []
    setFavorites(pokemons)
    getFavoritesData(pokemons)
  }

  function updateFavorites(name) {

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

  async function getFavoritesData(pokemons) {
    try {
      const dataPokemons = pokemons.map(async pokemon => {
        return await getPokemons(`https://pokeapi.co/api/v2/pokemon/${ pokemon }`)
      })
      const results = await Promise.all(dataPokemons)
      setFavoritesData(results)

    } catch (err) {
      console.log(err)
    }

  }

  useEffect(() => {
    loadFavorites()
  }, [])

  return (
    <FavoritesContext.Provider value={{ favorites, updateFavorites, favoritesData }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)

  return context
}