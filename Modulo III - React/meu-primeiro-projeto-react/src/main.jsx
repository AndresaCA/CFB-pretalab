import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Info from './components/info'
import Texto from './components/Texto'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Info quantidade="534" tipo="Publicações"/>
    <Info quantidade="6.456" tipo="Seguidores"/>
    <Info quantidade="754" tipo="Seguindo"/>
    <Texto>Primeiro texto como children</Texto>
    <Texto>Segundo texto como children</Texto>
    <Texto>Terceiro texto como children</Texto>
  </React.StrictMode>
)
