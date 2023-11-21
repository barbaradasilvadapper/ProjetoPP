import Menu from "../../components/Menu/Menu";
import fundoMapa from '../../assets/fundoMapa.png';
import { HomePageContainer } from "./styled";
import HomeInfo from "../../components/HomeInfo/HomeInfo";
import Estatistica from "../../components/Estatisticas/Estatisticas";
import BotaoRedondo from "../../components/BotaoRedondo/BotaoRedondo";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseUrl } from "../../services/api";
import axios from "axios";

function Resultado() {
  const id = localStorage.getItem("user");
  const selectedMonth = localStorage.getItem("selectedMonth"); // Obter o mês selecionado
  const totalEmitido = parseFloat(localStorage.getItem("totalEmitido")).toFixed(2);// Obter o resultado do cálculo

  const formData = {
    id: id,
  };

  function getMonthName(selectedMonth) {
    switch (selectedMonth) {
      case '1':
        return 'Janeiro';
      case '2':
        return 'Fevereiro';
      case '3':
        return 'Março';
      case '4':
        return 'Abril';
      case '5':
        return 'Maio';
      case '6':
        return 'Junho';
      case '7':
        return 'Julho';
      case '8':
        return 'Agosto';
      case '9':
        return 'Setembro';
      case '10':
        return 'Outubro';
      case '11':
        return 'Novembro';
      case '12':
        return 'Dezembro';
      default:
        return '';
    }
  }
  
  const monthName = getMonthName(selectedMonth); // Retorna 'Março'

  
  const [user, setUser] = useState();
  const [emissoes, setEmissoes] = useState();
  const [compensacoes, setCompensacoes] = useState();

  useEffect(() => {
    axios.post(`${baseUrl}/find/findUser`, formData)
      .then(function (response) {
        setUser(response.data.data);
      })
      .catch(function (error) {
        alert(error.response.data.msg);
      });
  }, []);

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
      {user && emissoes && compensacoes ? (
        <HomePageContainer>
          <HomeInfo
            TextoNormal={user.nome}
            TextoNegrito={`Mês Selecionado: ${monthName}`} // Exibir o mês selecionado
            TextoAcima='Esse mês você emitiu'
            NomeCarro={totalEmitido} // Exibir o resultado do cálculo
            TextoFinal="de gás carbônico"
          />
          <Link to="/Compensacao">
            <BotaoRedondo justifyContent='space-between' align='center'
              TextoBotao='A Compensação'
            />
          </Link>
          <Estatistica
            NEmitido={emissoes}
            NCompensado={compensacoes}
          />
          <Menu barra="3" />
        </HomePageContainer>
      ) : (
        <></>
      )}
    </>
  );
}

export default Resultado;
