import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./componentes/Menu";
import { Contato } from "./pages/Contato";
import { Inicio } from "./pages/Inicio";
import { Sobre } from "./pages/Sobre";

export function ApplicationRoutes() {
    return(
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/contato" element={<Contato/>}/>
            </Routes>
        </BrowserRouter>
    )
}