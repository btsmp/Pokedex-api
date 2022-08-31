import styled from "styled-components";

export const Container = styled.main`
  width: 98%;
  max-height: 75vh;
  background-color: #EBF5F0;
  margin: 22px auto;
  border-radius: 8px;
  padding: 10px;
  gap: 8px;

  grid-area: content;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr
`