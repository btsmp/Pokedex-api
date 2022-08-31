import { Container } from "./styles";
import { MdCatchingPokemon } from "react-icons/md";

export function Loading() {
  return (
    <Container><MdCatchingPokemon className="animated"></MdCatchingPokemon></Container>
  )
}