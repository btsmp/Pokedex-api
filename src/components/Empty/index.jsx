import { Container } from "./styles"
import empty from "../../assets/empty.png"

export function Empty() {
  return (
    <Container>
      <div>
        <img src={empty} className="h-80 object-contain" />
        <h1>Nenhum favorito ainda :(</h1>
      </div>
    </Container >
  )
}