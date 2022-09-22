import { Pokedex } from "../../components/Pokedex"
import { Header } from "../../components/Header"
import { getPokemons } from '../../utils/api';
import { useFavorites } from "../../hooks/fav"
import { useEffect, useState } from "react";
import './styles.css'

export function Fav() {

  const { favorites } = useFavorites()

  const [ pokemons, setPokemons ] = useState([])
  const [ loading, setLoading ] = useState(false)

  const fetchFavPokemons = async () => {
    try {
      setLoading(true)

      const dataPokemons = favorites.map(async favorite => {
        return await getPokemons(`https://pokeapi.co/api/v2/pokemon/${ favorite }`)
      })

      const results = await Promise.all(dataPokemons)
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
    <>
      <h1 className="title">Pokemons favoritados</h1>
      <Header />
      <Pokedex pokemons={pokemons} loading={loading} />
    </>

  )
}