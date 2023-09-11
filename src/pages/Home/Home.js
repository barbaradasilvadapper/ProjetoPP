import Menu from "../../components/Menu/Menu"
import fundoMapa from '../../assets/fundoMapa.png'
import { HomePageContainer, ContentContainer } from "./styled"
import HomeInfo from "../../components/HomeInfo/HomeInfo"
import Estatistica from "../../components/Estatisticas/Estatisticas"
import BotaoRedondo from "../../components/BotaoRedondo/BotaoRedondo"
import { Link } from "react-router-dom"


function Home(){

    return(
        <>
    <HomePageContainer>
        <HomeInfo
        TextoNormal= 'Bem-vindo'
        TextoNegrito= 'Nome de usuário'
        NomeCarro= 'Nome do Carro'
        TextoFinal="connectado"
        />
        
    <Link to="/NewInfo">
      <BotaoRedondo justifyContent='space-between' align='center'
        TextoBotao= 'Nova Informação'
      />
    </Link>
      <Estatistica
      NEmitido='300kg'
      NCompensado='100kg'
      />
      <Menu></Menu>
    </HomePageContainer>
        </>
    )
}


export default Home