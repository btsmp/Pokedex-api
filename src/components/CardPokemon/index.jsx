import { Container } from "./styles";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useFavorites } from "../../hooks/fav"

export function CardPokemon(props) {

  const { favorites, updateFavorites } = useFavorites()
  const { name, id, img, types } = props

  const favoriteHandlleClick = () => {
    updateFavorites(name)
  }

  const heart = favorites.includes(name) ? <AiFillHeart /> : <AiOutlineHeart />
  console.log(favorites)

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