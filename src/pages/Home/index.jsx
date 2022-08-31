import { Header } from '../../components/Header'
import { Pokedex } from '../../components/Pokedex'
import { useEffect } from 'react';
import { getPokemons } from '../../utils/api';
import { useState } from 'react';
import { Pagination } from './../../components/Pagination/index';
import { Searchbar } from '../../components/Searchbar';

export function Home() {

  const [ loading, setLoading ] = useState(false)
  const [ pokemons, setPokemons ] = useState([])
  const [ page, setPage ] = useState(0)
  const [ nextData, setNextData ] = useState([])
  const [ previousData, setPreviousData ] = useState([])
  const [ totalPokes, setTotalPokes ] = useState(1154)

  const pokePerPage = 30
  const totalPages = Math.ceil(totalPokes / pokePerPage)

  const fetchPokemons = async (url) => {
    try {
      setLoading(true)
      const response = await getPokemons(url)
      setNextData(response.next)
      setPreviousData(response.previous)
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

  function nextPage() {
    if (page <= totalPages) {
      fetchPokemons(nextData)
      setPage(page + 1)
    }
  }

  function previousPage() {
    if (page > 0) {
      fetchPokemons(previousData)
      setPage(page - 1)
    }

  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  function searchPokemon() {


  }

  return (
    <>
      <Header />
      <Searchbar searchPokemon={searchPokemon} />
      <Pokedex pokemons={pokemons} loading={loading} />
      <Pagination nextPage={nextPage} previousPage={previousPage} page={page + 1} totalPages={totalPages} />
    </>
  )
}