import { tecnologias } from "../data/contents";

export const Cards = () => {
    return (
        <div id="container">
            {tecnologias.map(item => {
                return (
                    <div id="card" key={item.id}>
                        <h2>{item.nome}</h2>
                        <img src={item.imagem} width="150"/>
                        <p>{item.descrição}</p>
                        <p>{item.nivel}</p>
                    </div>   
                )
            })}
        </div>
    )
}