import { Container } from "./styles";

export function Searchbar() {
  return (
    <Container>
      <input type="text" placeholder="Buscar Pokemon" /> <button>Search</button>
    </Container>
  )
}