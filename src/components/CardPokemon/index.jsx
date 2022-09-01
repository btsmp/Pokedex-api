import { Container } from "./styles";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useContext } from "react";
import FavoriteContext from "../../contexts/favoritesContext";

export function CardPokemon(props) {
  const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext)
  const { name, id, img, types } = props

  const favoriteHandlleClick = () => {
    updateFavoritePokemons(name)
  }

  const heart = favoritePokemons.includes(name) ? <AiFillHeart /> : <AiOutlineHeart />

  return (
    <Container>
      <div>
        <img src={img} alt={name} className='pokemon' />

        <div className="names">
          <h1>{name}</h1>

          <div className="type">
            {types.map((tp, index) => {
              return <span key={index}>{tp.type.name}</span>
            })}
          </div>

        </div>
      </div>

      <div className="right" onClick={favoriteHandlleClick}>
        <h1>#{id}</h1>
        {heart}
      </div>

    </Container>
  )
}