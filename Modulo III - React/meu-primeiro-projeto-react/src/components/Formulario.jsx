export const Formulario = () => {
    const ligaClique = () => {
        console.log('Clicou!')
    }

    const pegaInput = (event) => {
        console.log(event.target.value)
    }
    return (
        <div>
            <input type="text" onChange={pegaInput}/>
            <button onClick={ligaClique}>CLIQUE AQUI</button>
        </div>
    )
}