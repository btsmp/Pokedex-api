import { Container } from "./styles";
import { useState } from 'react';


export function Searchbar(props) {
  const { searchPokemon } = props
  const [ search, setSearch ] = useState('bulbassaur')

  const onChangeHandler = (e) => {
    const valueInput = e.target.value
    let valueInputLowerCase = valueInput.toLowerCase()
    setSearch(valueInputLowerCase)
    if (valueInputLowerCase === '') {
      searchPokemon(undefined)
    }
  }

  const onButtonClickHandler = () => {
    searchPokemon(search)
  }

  const enterHandler = (e) => {
    if (e.key === 'Enter') {
      searchPokemon(search)
    }
  }


  return (
    <Container>
      <input type="text" placeholder="Digite o nome do pokémon" onChange={onChangeHandler} onKeyDown={enterHandler} />
      <button onClick={onButtonClickHandler}><p>Search</p></button>
    </Container>
  )
}