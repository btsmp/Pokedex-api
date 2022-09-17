import React from "react";
export const FavoriteContext = React.createContext({
    favoritePokemons: [],
    updateFavoritePokemons: (id) => null
})

export const FavoriteProvider = FavoriteContext.Provider
