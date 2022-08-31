import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  margin: 13px;
  

    > input { 
      height: 100%;
      width: 70%;
      padding: 10px;
      margin-left: 10px;

      border: 1px solid gray;
      border-radius: 4px 0 0 4px;
      background: transparent;

      color: white;
      
    }

    > button {
      height: 100%;
      width: 10%;

      border: none;
      border-radius: 0 4px 4px 0 ;
      background-color: #1276DF;
      color: white;

      font-size: 16px;
      font-weight: bold;

      cursor: pointer;

      transition: all 0.2s;

      &:hover{

        filter: brightness(0.9);
      }
    }
`