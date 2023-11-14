import Menu from "../../components/Menu/Menu"
import fundoMapa from '../../assets/fundoMapa.png'
import { HomePageContainer, ContentContainer } from "./styled"
import HomeInfo from "../../components/HomeInfo/HomeInfo"
import Estatistica from "../../components/Estatisticas/Estatisticas"
import BotaoRedondo from "../../components/BotaoRedondo/BotaoRedondo"
import { Link } from "react-router-dom"

function Resultado(){
    return(
        <>
    <HomePageContainer>
        <HomeInfo
        TextoNormal= 'Nome de usuário'
        TextoNegrito= 'Mês Selecionado'
        TextoAcima='Esse mês você emitiu'
        NomeCarro= '200kg'
        TextoFinal="de gás carbônico"
        />
    <Link to="/Compensacao">
      <BotaoRedondo justifyContent='space-between' align='center'
        TextoBotao= 'A Compensação'
      />
    </Link>
      <Estatistica
      NEmitido='500kg'
      NCompensado='100kg'
      />
      <Menu barra="3"/>
    </HomePageContainer>
        </>
    )
}


export default Resultado