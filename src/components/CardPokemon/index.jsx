import { Container } from "./styles";
import { AiOutlineHeart } from "react-icons/ai";

export function CardPokemon(props) {
  const { name, id, img, types } = props

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

      <div className="right">
        <h1>#{id}</h1>
        <AiOutlineHeart />
      </div>

    </Container>
  )
}