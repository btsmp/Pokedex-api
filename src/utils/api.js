export async function getPokemons(url = 'https://pokeapi.co/api/v2/pokemon?limit=13&offset=0') {
  const endpoint = url
  const response = await fetch(endpoint)

  const data = await response.json()

  return data
}

export async function individualPokeInfo(url) {
  const pokeInfo = await getPokemons(url)
  return pokeInfo
}


