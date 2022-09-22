import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext([])

export function FavProvider({ children }) {
  const [ favorites, setFavorites ] = useState([])

  const favoritesKey = '@favorites-user'

  function loadFavorites() {
    const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey) || '[]') || []
    setFavorites(pokemons)
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

  useEffect(() => {
    loadFavorites()
  }, [])

  return (
    <FavoritesContext.Provider value={{ favorites, updateFavorites }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)

  return context
}