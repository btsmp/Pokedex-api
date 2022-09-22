import { Pagination } from './../../components/Pagination/index';
import { Searchbar } from '../../components/Searchbar';
import { Pokedex } from '../../components/Pokedex'
import { Header } from '../../components/Header'
import { getPokemons } from '../../utils/api';
import { useEffect, useState } from 'react';


export function Home() {
  const [ loading, setLoading ] = useState(false)
  const [ pokemons, setPokemons ] = useState([])
  const [ page, setPage ] = useState(0)
  const [ nextData, setNextData ] = useState([])
  const [ previousData, setPreviousData ] = useState([])
  const [ totalPokes, setTotalPokes ] = useState(1154)
  const [ totalPages, setTotalPage ] = useState(0)
  const [ notFound, setNotFound ] = useState(false)
  const pokePerPage = 30

  const fetchPokemons = async (url) => {

    try {

      setLoading(true)

      const response = await getPokemons(url)

      setNextData(response.next)
      setPreviousData(response.previous)
      setTotalPokes(response.count)
      setTotalPage(Math.ceil(totalPokes / pokePerPage))

      const promises = response.results.map(async (pokemon) => {

        return await getPokemons(pokemon.url)

      })

      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false)

    } catch (err) {
      console.log('fetchPokemons problem', err)

    }
  }

  function nextPage() {

    if (page < totalPages - 1) {

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

  const searchPokemon = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons()
    }

    setLoading(true)
    setNotFound(false)

    const response = await getPokemons(`https://pokeapi.co/api/v2/pokemon/${ pokemon }`)

    if (!response) {
      setNotFound(true)
    } else {
      setPokemons([ response ])
      setPage(0)
      setTotalPage(1)
    }
    setLoading(false)

  }

  useEffect(() => {
    fetchPokemons()
  }, [])


  return (
    <>
      <Header />
      <Searchbar searchPokemon={searchPokemon} />
      <Pokedex pokemons={pokemons} loading={loading} notFound={notFound} />
      <Pagination nextPage={nextPage} previousPage={previousPage} page={page + 1} totalPages={totalPages} />
    </>
  )
}