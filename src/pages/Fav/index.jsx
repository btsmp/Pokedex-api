import { FavoriteWrapper } from "../../components/FavoriteWrapper"
import { Loading } from "../../components/Loading"
import { Header } from "../../components/Header"
import { useFavorites } from "../../hooks/fav"
import { getPokemons } from "../../utils/api"
import { useEffect, useState } from "react"

export function Fav() {

  const { favorites } = useFavorites()

  const [ pokemons, setPokemons ] = useState([])
  const [ loading, setLoading ] = useState(true)

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
      {loading ? <Loading /> : <FavoriteWrapper pokemons={pokemons} />}


    </>

  )
}