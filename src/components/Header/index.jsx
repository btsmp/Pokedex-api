import { Container } from './styles'
import { AiFillHeart, AiFillHome } from "react-icons/ai";

export function Header() {


  return (
    <>
      <Container>
        <nav>
          <a href="#"><AiFillHome />Home</a>
          <span>|</span>
          <a href="#">Fav<AiFillHeart /></a>
        </nav>

        <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Logo PokeApi" />
      </Container>


    </>
  )
}