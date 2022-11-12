import { useState } from 'react'
import Title from './Title'
import Name from './Name'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Title texto="Oi, eu sou um título!"/>
      <Name>AndresaCA</Name>
    </div>
  )
}

export default App
