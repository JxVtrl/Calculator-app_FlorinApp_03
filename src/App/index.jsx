import { useState } from 'react'
import { Container } from './styles'
import { Header , Footer, Main } from '../sections' 
import { AppProvider } from '../context/AppContext'

export default function App() {
  

  return (
    <AppProvider>
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
    </AppProvider>
  )
}

