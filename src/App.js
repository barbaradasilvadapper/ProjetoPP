
import './App.css';
import Login from '../src/pages/Login/Login.js';
import { ChakraProvider } from '@chakra-ui/react'
import Cadastro from './pages/Cadastro/Cadastro';
import NewPassword from './pages/NewPassword/NewPassword';
import Home from './pages/Home/Home';
import NovoAbastecimento from './pages/NovoAbastecimento/NovoAbastecimento';
import NovaCompensacao from './pages/NovaCompensacao/NovaCompensacao';
import NovoCarro from './pages/NovoCarro/NovoCarro';
import NewInfo from './pages/NewInfo/NewInfo';
import MyInfo from './pages/MyInfo/MyInfo';
import CalcularMes from './pages/CalcularMes/CalcularMes';
import Compensacao from './pages/Compensacao/Compensacao';
import Resultado from './pages/Resultado/Resultado';
import Rotas from './routes/Routes';



function App() {
  return (
    <>
    <ChakraProvider>
      <Rotas/>
    </ChakraProvider>
    </>
  );
}




export default App;
