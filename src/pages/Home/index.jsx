import { Header } from '../../components/Header'
import { Pokedex } from '../../components/Pokedex'
import { useEffect } from 'react';
import { getPokemons } from '../../utils/api';
import { useState } from 'react';

export function Home() {

  const [ loading, setLoading ] = useState(false)
  const [ pokemons, setPokemons ] = useState([])

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const response = await getPokemons()
      const promises = response.results.map(async (pokemon) => {
        return await getPokemons(pokemon.url)
      })

      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false)
    } catch {
      console.log('fetchPokemons problem')

    }
  }

  useEffect(() => {
    fetchPokemons()
  }, [])


  return (
    <>

      <Header />
      <Pokedex pokemons={pokemons} loading={loading} />

    </>
  )
}