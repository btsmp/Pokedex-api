
import { Container } from './styles'
import { AiFillHeart, AiFillHome } from "react-icons/ai";
import { useFavorites } from "../../hooks/fav"
import { Link } from 'react-router-dom'

export function Header() {

  const { favorites } = useFavorites()

  return (
    <Container>
      <nav>
        <Link to='/'><AiFillHome />Home</Link>
        <span>|</span>
        <Link to='/favs'>Fav<AiFillHeart />{favorites.length}</Link>
      </nav>

      <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Logo PokeApi" />
    </Container>
  )
}