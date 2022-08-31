import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:'Roboto', sans-serif;
}

body > div {
  height: 100vh;
  background-color: #2F2F2F;
  display: grid;
  grid-template-areas: 
  "header"
  "midcontent"
  "content";

  grid-template-rows: 50px 50px auto
}

`