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
  const [car, setCar] = useState()
  const [emissoes, setEmissoes] = useState()
  const [compensacoes, setCompensacoes] = useState()


  useEffect(() => {
    axios.post(`${baseUrl}/find/findUser`, formData)
      .then(function (response) {
        setUser(response.data.data)
      })
      .catch(function (error) {
        alert(error.response.data.msg)
      });
  })


  useEffect(() => {
    console.log(formData)
    axios.post(`${baseUrl}/findCar/findCar`, formData)
      .then(function (response) {
        setCar(response.data.data)
      })
      .catch(function (error) {
        console.log(error)
      });
  }, [])

  useEffect(() => {
    axios.post(`${baseUrl}/somaA/somaAbastecimentos`, formData)
      .then(function (response) {
        setEmissoes(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios.post(`${baseUrl}/somaC/somaCompensacoes`, formData)
      .then(function (response) {
        setCompensacoes(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      {user && car ? (
        <HomePageContainer>
          <HomeInfo
            TextoNormal='Bem-vindo'
            TextoNegrito={user.nome}
            NomeCarro={car.placa}
            TextoFinal="connectado"
          />

          <Link to="/NewInfo">
            <BotaoRedondo justifyContent='space-between' align='center'
              TextoBotao='Nova Informação'
            />
          </Link>
          <Estatistica
            NEmitido= {emissoes ? emissoes.toFixed(0) : 0}
            NCompensado= {compensacoes ? compensacoes : 0}
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