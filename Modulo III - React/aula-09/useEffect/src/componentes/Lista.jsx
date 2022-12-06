// quando a minha tela carregar, eu quero consumir uma API e mostrar os dados na tela
import { useEffect, useState } from "react";
import Axios from "axios";

export const Lista = () => {
  const [pokemons, setPokemons] = useState([]);
  const [listaOculta, setListaOculta] = useState(false);
  const [statusDaLista, setStatusDaLista] = useState(
    "A lista de Pokemons está visível!"
  );

  // Esse useEffect é executado apenas uma vez, ao entrar na apicação.
  useEffect(() => { // useEffect para exibir pokemons
    console.log("Componente montado");
    async function pegaDados() {
      const resposta = await Axios.get("https://pokeapi.co/api/v2/pokemon");
      setPokemons(resposta.data.results);
    }
    pegaDados();

    return () => {
      console.log("Componente desmontado");
    };
  }, []);

  useEffect(() => { //useEffect para ocultar lista
    if (listaOculta) {
      setStatusDaLista("A lista de Pokemons está oculta!");
    } else {
      setStatusDaLista("A lista de Pokemons está visível!");
    }
  }, [listaOculta]);

  function ocultarLista() {
    setListaOculta((valor) => !valor); // o valor inicial (false) é negado ao marcar o checkbox, e vira true
  }

  return (
    <>
      <h1>Pokemons</h1>
      <input type="checkbox" onChange={ocultarLista} />
      <label>Ocultar Lista</label>
      <br />
      <h2>{statusDaLista}</h2>
      <br />
      {listaOculta
        ? null
        : pokemons.map((pokemon) => {
            return <p key={pokemon.name}>{pokemon.name}</p>;
          })}
    </>
  );
};