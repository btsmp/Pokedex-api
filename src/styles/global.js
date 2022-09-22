import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:'Roboto', sans-serif;
}

body, a , ul, li {
  text-decoration: none;
}
body > div {
  height: 100vh;
  background-color: #2F2F2F;
  display: grid;
  grid-template-areas: 
  "header"
  "midcontent"
  "content";

  grid-template-rows: 6% 10% auto
}

`