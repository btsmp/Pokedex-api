import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from "./routes";

import GlobalStyles from "./styles/global";



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyles />
    <Routes />
  </>
)

