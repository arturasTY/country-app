import {CountriesList} from './components/CountriesList'
import { Routes, Route } from 'react-router-dom'
import { Details } from './components/Details'
import { NotFound } from './components/NotFound'
import { Hero } from './components/Hero'
import { ThemeSwitch } from './components/ThemeSwitch'
import { useState } from 'react'

function App() {
  const [theme, setTheme] = useState(true)

  localStorage.getItem('theme')
  const handleThemeSwitch = () => {
    setTheme(!theme)
    if(theme === true) {
      localStorage.setItem('theme', 'light')
    } else {
      localStorage.setItem('theme', 'dark')
    }
  }
  return (
    <div className="App" data-theme={localStorage.getItem('theme') === 'light' ? "App-light" : "App-dark"}>
      <div className="container">
        <ThemeSwitch handleThemeSwitch={handleThemeSwitch} theme={theme} />
        <Hero />
        <Routes>
          <Route path="/" element={<CountriesList />} />
          <Route path="/country/:countryname" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
