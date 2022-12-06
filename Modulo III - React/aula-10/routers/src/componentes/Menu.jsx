import { Link } from "react-router-dom";

export function Menu() {
    return(
        <nav id="menu">
            <ul>
                <li>
                    <Link to='/'>Inicio</Link>
                </li>
                <li>
                    <Link to='/sobre'>Sobre</Link>
                </li>

                <li>
                    <Link to='/contato'>Contato</Link>
                </li>
            </ul>
        </nav>
    )
}