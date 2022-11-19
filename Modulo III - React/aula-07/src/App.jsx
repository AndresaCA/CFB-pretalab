import { useState } from 'react'
import './App.css'

function App() {
  const [contador, setContador] = useState(0)
  const [titulo, setTitulo] = useState('Contador que conta!')

  const adicionarUm = () => {
    setContador((contador) => contador + 1)
  }

  const removerUm = () => {
    if (contador > 0) {
      setContador((contador) => contador - 1)
    } else {
      alert('ERRO! Não exibe número negativos.')
    }
    
  }

  const traduzir = () => {
    if (titulo === 'Contador que conta!') {
      setTitulo('Counter that counts!')
    }else {
      setTitulo('Contador que conta!')
    }
  }


  return (
    <div className="App">
      <span>
        <button onClick={traduzir} id="en">Traduzir</button>
        <h1>{titulo}</h1>
        
      </span>
      <br />
      <br />
      <button onClick={removerUm}>-</button>
      <h1> {contador} </h1>
      <button onClick={adicionarUm}>+</button>
    </div>
  )
}

export default App
