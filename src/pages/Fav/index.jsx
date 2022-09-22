import { Pokedex } from "../../components/Pokedex"
import { Header } from "../../components/Header"
import { Empty } from "../../components/Empty"
import { useFavorites } from "../../hooks/fav"
import { getPokemons } from "../../utils/api"
import { useEffect, useState } from "react"
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
      <Header />
      <h1 className="title">Pokemons favoritados</h1>
      {
        pokemons.length == 0 ? <Empty /> : <Pokedex pokemons={pokemons} loading={loading} />
      }

    </>

  )
}