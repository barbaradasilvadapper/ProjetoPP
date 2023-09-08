
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



function App() {
  return (
    <>
    <ChakraProvider>
      <CalcularMes/>
    </ChakraProvider>
    </>
  );
}




export default App;
