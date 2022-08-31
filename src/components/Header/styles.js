import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  background-color: #ef5350;

  display: flex;
  align-items: center;
  justify-content: space-around;

  grid-area: header;

 > img {
  width: 100px;
  padding: 10px 0;
 }
 
 > nav {
  display: flex;
  gap: 20px;
  font-size: 25px;

  a {
    display: flex;
    align-items: center;
    justify-content: baseline;
    gap: 8px;
    height: 100%;

    color: black;
    text-decoration: none;
    cursor: pointer;

    > svg {
      height: 20px;
    }
  }

  a:hover{
    font-weight: 700;
  }

 }
`