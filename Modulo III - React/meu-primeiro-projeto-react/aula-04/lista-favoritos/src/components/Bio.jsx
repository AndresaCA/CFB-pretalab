import { information } from "../data/profile-data"

export const Bio = () => {
    return (
        <div className="bio">
            <h2>{information.nome}</h2>
            <h3>{information.apelido}</h3>
            <img src={information.foto}/>
            <p>{information.descrição}</p>
        </div>
    )
}