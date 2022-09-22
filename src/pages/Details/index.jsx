import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Header } from "../../components/Header"
import { getPokemons } from "../../utils/api"
import { PokeDetail } from "../../components/PokeDetail"
import { Loading } from "../../components/Loading"
import { AiOutlineArrowLeft } from "react-icons/ai";

export function Details() {
  const { id } = useParams()
  const [ pokemon, setPokemon ] = useState([])
  const [ loading, setLoading ] = useState(true)

  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png`

  async function fetchPokemon(id) {
    try {
      setLoading(true)
      const responsePokemons = await getPokemons(`https://pokeapi.co/api/v2/pokemon/${ id }`)
      setPokemon(responsePokemons)
      setLoading(false)
    } catch (err) {
      console.log('fetch problems', err)
    }
  }

  useEffect(() => {
    fetchPokemon(id)
  }, [])

  return (
    <>
      <Header />
      <h1 className="text-5xl capitalize font-bold text-white text-center sm:my-3  my-11 relative">
        {pokemon.name} {`#${ (id).padStart(3, '0') }`}
        <Link to='/' className="absolute left-5 top-[-35px] sm:top-0">
          <AiOutlineArrowLeft className="text-[#EF5350] text-4xl hover:scale-105" />
        </Link>
      </h1>
      <div className="flex flex-col md:flex-row mx-10 my-3 gap-8">

        <div className="h-96 md:h-[75vh] flex items-center justify-center">

          <img src={img} className="h-full" />

        </div>
        <div className="mx-auto">
          {loading ? <Loading /> : <PokeDetail pokemon={pokemon} loading={loading} />}
        </div>
      </div>
    </>
  )

}