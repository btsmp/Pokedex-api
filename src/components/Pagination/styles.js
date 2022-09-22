import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  align-self: center;
  justify-content: center;

  margin: 10px auto;

  button{
    background: transparent;
    border: none;
    cursor: pointer;
    color: #EF5350;
    width: 50px;
    font-size: 20px;
    transition: transform 0.2s;

    &:hover{
      transform: scale(1.1);
    }
  }

  span {
    margin: 0 10px 0 -14px;
    font-weight: 700;
    color: white

  }
`