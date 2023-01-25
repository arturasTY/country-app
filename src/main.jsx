import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.sass'
import { SkeletonTheme } from 'react-loading-skeleton'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SkeletonTheme baseColor="#242424" highlightColor="#444">
      <BrowserRouter basename="/country-app">
        <App />
      </BrowserRouter>
    </SkeletonTheme>
  </React.StrictMode>,
)
