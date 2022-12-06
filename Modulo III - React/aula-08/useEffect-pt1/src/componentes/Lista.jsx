// quando a minha tela carregar, eu quero consumir uma API e mostrar os dados na tela
import { useState, useEffect } from "react"
import Axios from 'axios'

export const Lista = () => {
  const [pokemons, setPokemons] = useState([])//Quando a tela  carregar

  useEffect(() => {
    async function pegaDados() {
      const resposta = await Axios.get('https://pokeapi.co/api/v2/pokemon')
      setPokemons(resposta.data.results)// Vou consumir APIc
    }
    pegaDados()
  }, [])

  return(
    <>
    <h1>Pokemons</h1>
      {pokemons.map(pokemon => {//E mostrar os dados na tela
        return <p key={pokemon.name}>{pokemon.name}</p>
      })}
    </>
  )
}