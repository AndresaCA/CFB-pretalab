import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Titulo from './components/Titulo'
import Paragrafo from './components/Paragrafo'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />

    <Titulo />
    <Paragrafo />

    <Titulo />
    <Paragrafo />
    
    <Titulo />
    <Paragrafo />
  </React.StrictMode>
)
