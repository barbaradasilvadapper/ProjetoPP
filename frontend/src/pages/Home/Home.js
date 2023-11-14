import Menu from "../../components/Menu/Menu"
import fundoMapa from '../../assets/fundoMapa.png'
import { HomePageContainer, ContentContainer } from "./styled"
import HomeInfo from "../../components/HomeInfo/HomeInfo"
import Estatistica from "../../components/Estatisticas/Estatisticas"
import BotaoRedondo from "../../components/BotaoRedondo/BotaoRedondo"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../services/api";
import axios from "axios";


function Home() {

  const id = localStorage.getItem("user")
  const formData = {
    id: id
  }
  const [user, setUser] = useState()


  useEffect(() => {
    axios.post(`${baseUrl}/find/findUser`, formData)
      .then(function (response) {
        setUser(response.data.data)
      })
      .catch(function (error) {
        alert(error.response.data.msg)
      });
  })

  return (
    <>
      {user ? (
        <HomePageContainer>
          <HomeInfo
            TextoNormal='Bem-vindo'
            TextoNegrito={user.nome}
            NomeCarro='Nome do Carro'
            TextoFinal="connectado"
          />

          <Link to="/NewInfo">
            <BotaoRedondo justifyContent='space-between' align='center'
              TextoBotao='Nova Informação'
            />
          </Link>
          <Estatistica
            NEmitido='300kg'
            NCompensado='100kg'
          />
          <Menu barra="0" />
        </HomePageContainer>
      ) : (
        <></>
      )}

    </>
  )
}


export default Home