import Rodape from "components/Rodape"
import Inicio from "pages/Inicio"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/" element={<Rodape />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes