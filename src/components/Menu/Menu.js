import React, { useEffect } from 'react';
import { Container, Fundo, HomeContainer, HomeGrid, IconesSize, IconSize } from './styled';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Button, Input } from '@chakra-ui/react'
import HomeIcon from '../../assets/HomeIcon.png'
import AddIcon from '../../assets/AddIcon.png'
import InfoIcon from '../../assets/InfoIcon.png'
import ProfileIcon from '../../assets/ProfileIcon.png'
import { Divider } from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import Perfil from '../Perfil/Perfil';
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"


function Menu() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const navigate = useNavigate()

    useEffect(() => {
      const token = localStorage.getItem('token')
      if(!token){
        navigate("/")
      }
    }, [navigate])

    const handleLogout = () =>{
      localStorage.removeItem("token")
      localStorage.removeItem("email")
      navigate("/")
    }

  return (
    <>
        <Fundo>
        <Tabs variant='soft-rounded' size='sm' colorScheme='blackAlpha' marginTop='0.6vh' align='center'>
          <TabList w='90vw' justifyContent='space-between' align='center'>
          <Link to="/Home"><Tab><IconSize src={HomeIcon}/></Tab></Link>
          <Link to="/NewInfo"><Tab><IconSize src={AddIcon}/></Tab></Link>
          <Link to="/MyInfo"><Tab><IconSize src={InfoIcon}/></Tab></Link>
            <Tab ref={btnRef} onClick={onOpen}><IconSize src={ProfileIcon}/></Tab>
          </TabList>
          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              
              <DrawerHeader marginTop='5%' direction='row'> Seu Perfil</DrawerHeader>
              
              <DrawerBody spacing={5} direction='column'>

                <Container>
                <Link to="/NovoCarro">
                <Button colorScheme='green' size='sm' variant='ghost'>Novo Carro</Button>
                </Link>
                <Divider/>
                </Container>

                <Container>
                <Link to="/NewPassword">
                <Button colorScheme='green' size='sm' variant='ghost'>Redefinir Senha</Button>
                </Link>
                <Divider/>
                </Container>

                <Container>
                <Link to="/CalcularMes">
                <Button colorScheme='green' size='sm' variant='ghost'>Calcular Emissões</Button>
                </Link>
                <Divider/>
                </Container>

                <Container>
                <Link to="/Compensacao">
                <Button colorScheme='green' size='sm' variant='ghost'>Compensação de Carbono</Button>
                </Link>
                <Divider/>
                </Container>
              </DrawerBody>

              <DrawerFooter>
                <Button size='md' variant='outline' mb={5} mr={4} as='b' onClick={handleLogout}>
                  Logout
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Tabs>
        </Fundo>
    </>
  );
}

export default Menu;
