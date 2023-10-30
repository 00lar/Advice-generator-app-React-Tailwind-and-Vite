import { useState } from 'react'
import './App.css'
import { Card } from '../../Components/Card'
import { CardContextProvider } from '../../Context/index.jsx'

function App() {

  return (
    <CardContextProvider>
      <Card></Card>
    </CardContextProvider>
  )
}

export default App
