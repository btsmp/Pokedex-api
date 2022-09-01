import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  min-width: 340px;
  height: 150px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 15px;
  transition: all 0.2s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    transform: scale(1.02);
    filter: brightness(1.3);
  }

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

    > svg {
      cursor: pointer;
      font-size: 30px;
      color: #EF5350
    }

  }
  
`