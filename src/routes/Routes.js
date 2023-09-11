import { BrowserRouter, Route, Routes } from "react-router-dom"

import Login from "../pages/Login/Login"
import Cadastro from "../pages/Cadastro/Cadastro"
import NewPassword from "../pages/NewPassword/NewPassword"
import Home from "../pages/Home/Home"
import NewInfo from "../pages/NewInfo/NewInfo"
import NovoAbastecimento from "../pages/NovoAbastecimento/NovoAbastecimento"
import NovaCompensacao from "../pages/NovaCompensacao/NovaCompensacao"
import MyInfo from "../pages/MyInfo/MyInfo"
import NovoCarro from "../pages/NovoCarro/NovoCarro"
import CalcularMes from "../pages/CalcularMes/CalcularMes"
import Resultado from "../pages/Resultado/Resultado"
import Compensacao from "../pages/Compensacao/Compensacao"

function Rotas() {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
                <Route element={<Cadastro/>} path="/Cadastro"/>
                <Route element={<NewPassword/>} path="/NewPassword"/>
                <Route element={<Home/>} path="/Home"/>
                <Route element={<NewInfo/>} path="/NewInfo"/>
                <Route element={<NovoAbastecimento/>} path="/NovoAbastecimento"/>
                <Route element={<NovaCompensacao/>} path="/NovaCompensacao"/>
                <Route element={<MyInfo/>} path="/MyInfo"/>
                <Route element={<NovoCarro/>} path="/NovoCarro"/>
                <Route element={<CalcularMes/>} path="/CalcularMes"/>
                <Route element={<Resultado/>} path="/Resultado"/>
                <Route element={<Compensacao/>} path="/Compensacao"/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;