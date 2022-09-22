import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from "./routes";

import GlobalStyles from "./styles/global";

import { FavProvider } from "./hooks/fav"

ReactDOM.createRoot(document.getElementById('root')).render(
  <FavProvider>
    <GlobalStyles />
    <Routes />
  </FavProvider>
)

