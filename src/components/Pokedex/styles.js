import styled from "styled-components";

export const Container = styled.main`
  width: 98%;
  height: 75vh;
  background-color: #EBF5F0;

  margin: 0 auto;
  border-radius: 8px;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 8px;
  overflow-y: scroll;

  grid-area: content;

  @media (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 650px){
    grid-template-columns: 1fr;
    width: 88%;
  }
`

export const LoadingContainer = styled.div`
  width: 98%;
  max-height: 75vh;
  background-color: #EBF5F0;

  margin: 0 auto;
  border-radius: 8px;
  padding: 10px;
  grid-area: content;
`
