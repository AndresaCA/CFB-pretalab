import styles from './Header.module.css'
import { Contador } from '../Contador/Contador'

export const Header = ({nomeGrupo, integrantes}) => {
    return(
        <>
            <h1 className={styles.titulo}>Contador Palpiteiro</h1>
            <h2>{nomeGrupo}</h2>
            <b>{integrantes}</b>
            <br />
            <br />
            <Contador />
        </>
    )
}