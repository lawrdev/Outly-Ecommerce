// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { About } from './pages/About'
import Header from './components/Header'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import { BackdropProvider } from './context/BackdropContext'

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#11CB5F',
      },
      secondary: {
        main: '#cb5f11',
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    }
  })

  return (<>
    <ShoppingCartProvider>
      <BackdropProvider>
        <ThemeProvider theme={theme}>
          <Header />
          <div className="mt-2 mb-56 mx-auto"
            style={{ maxWidth: '90rem' }}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/store' element={<Store />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </div>
        </ThemeProvider>
      </BackdropProvider>
    </ShoppingCartProvider>
  </>)
}

export default App
