import favoritos from "../service/dados"

function Lista() {
    return (
        <div>
            <h1>Favoritos de 2022</h1>
            {favoritos.map(item => {
                return (
                    <div id="card" key={item.id}>
                        <h2>{item.nome}</h2>
                        <p>{item.tipo}</p>
                        <p>{item.nota}</p>
                        <img src={item.capa} />
                    </div>   
                )
            })}
        </div>
    )
}

export default Lista