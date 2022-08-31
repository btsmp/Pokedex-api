import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Container } from "./styles";

export function Pagination(props) {

  const { page, totalPages, nextPage, previousPage } = props

  return (
    <Container>
      <button onClick={previousPage}><AiOutlineArrowLeft /></button>
      <span>{page} de {totalPages}</span>
      <button onClick={nextPage}><AiOutlineArrowRight /></button>
    </Container>
  )
}