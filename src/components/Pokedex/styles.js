import styled from "styled-components";

export const Container = styled.main`
  width: 98%;
  max-height: 75vh;
  background-color: #EBF5F0;

  margin: 0 auto;
  border-radius: 8px;
  padding: 10px;
  
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  overflow-y: scroll;

  grid-area: content;
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
