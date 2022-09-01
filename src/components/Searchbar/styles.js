import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  margin: 13px;
  grid-area: midcontent;
  

  > input { 
    height: 100%;
    width: 70%;
    padding: 10px;
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

    font-weight: bold;

    cursor: pointer;

    transition: all 0.2s;

    &:hover{

      filter: brightness(0.9);
    }

    p {
      color: white;
      font-size:16px;
    }


  }
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column ;
    gap: 8px;
    margin-top: 20px;

    > button {
      width: 100%;
      border-radius: 4px;
      padding: 5px
    }

    > input { 
      padding-top: 12px;
      padding-bottom: 12px;
      border-radius: 4px;
    }
  }
`