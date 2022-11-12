import { useState } from 'react'
import './App.css'
import Lista from './components/Lista'
import { Relogio } from './components/Relogio'
import { Formulario } from './components/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Relogio />
      <Formulario />
      <br />
      <br />
      <Lista />
    </div>
    
  )
}

export default App
