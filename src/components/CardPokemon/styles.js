import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;
  box-shadow: 2px 2px rgba(0,0,0, 0.25);

  > div {
    display: flex;
    height: 100%;

    img {
      height: 80%;
      width: 100px;
      margin: 10px
    }
  }

  .names{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    text-transform: capitalize;

  }

 .type {
    display: flex;
    justify-content: space-between;
    align-items: center;


    span {
      background-color: #2F2F2F;
      padding: 8px;
      margin-right: 5px;
      border-radius: 9999px;
      color: white;
    }
 }

  .right {    
    height: 80%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    margin-right: 8px;

  }
  
`