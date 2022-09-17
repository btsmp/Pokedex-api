
import { Container } from './styles'
import { AiFillHeart, AiFillHome } from "react-icons/ai";
import { useContext } from 'react';
import { FavoriteContext } from '../../contexts/favoritesContext'
import { Link } from 'react-router-dom'

export function Header() {

  const { favoritePokemons } = useContext(FavoriteContext)


  return (
    <Container>
      <nav>
        <Link to='/'><AiFillHome />Home</Link>
        <span>|</span>
        <Link to='/favs'>Fav<AiFillHeart />{favoritePokemons.length}</Link>
      </nav>

      <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Logo PokeApi" />
    </Container>
  )
}