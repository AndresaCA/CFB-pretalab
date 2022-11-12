import { useState } from 'react'
import './App.css'
import Header from './componentes/Header'
import Bio from './componentes/Bio'
import Cards from './componentes/Cards'
import Footer from './componentes/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header title="Meus conteúdos favoritos" />
      <Bio />
      <br />
      <Cards 
      title='HTML' 
      description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, accusantium non? Minima, animi in soluta facilis odit asperiores culpa reiciendis distinctio eos facere laudantium maxime! Dolorem beatae provident voluptas voluptatibus.' imgPath="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png"/>
      <br />
      <Cards 
      title='CSS' 
      description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, accusantium non? Minima, animi in soluta facilis odit asperiores culpa reiciendis distinctio eos facere laudantium maxime! Dolorem beatae provident voluptas voluptatibus.' imgPath="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/544px-CSS3_logo_and_wordmark.svg.png"/>
      <br />
      <Cards 
      title='Javascript' 
      description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, accusantium non? Minima, animi in soluta facilis odit asperiores culpa reiciendis distinctio eos facere laudantium maxime! Dolorem beatae provident voluptas voluptatibus.' imgPath="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/768px-Unofficial_JavaScript_logo_2.svg.png"/>
      <br />
      <Footer description='Feito por AndresaCA'/>
    </div>
  )
}

export default App

