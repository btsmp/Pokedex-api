import { Container } from "./styles"
import empty from "../../assets/empty.png"

export function Empty() {
  return (
    <Container>
      <div>
        <img src={empty} height={200} />
        <h1>Nenhum favorito ainda :(</h1>
      </div>
    </Container>
  )
}