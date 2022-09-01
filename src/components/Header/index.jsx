import { Container } from './styles'
import { AiFillHeart, AiFillHome } from "react-icons/ai";
import { useContext } from 'react';
import FavoriteContext from '../../contexts/favoritesContext'

export function Header() {

  const { favoritePokemons } = useContext(FavoriteContext)


  return (
    <Container>
      <nav>
        <a href="#"><AiFillHome />Home</a>
        <span>|</span>
        <a href="#">Fav<AiFillHeart />{favoritePokemons.length}</a>
      </nav>

      <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Logo PokeApi" />
    </Container>
  )
}