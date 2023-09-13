
import { BotaoEntrar, Container, SignUp, StyleInput, Titulo} from "./styled"

import {
    InputGroup,
    InputLeftElement
  } from '@chakra-ui/react'

import { Input } from '@chakra-ui/react'
import { EmailIcon, LockIcon, PhoneIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom"


function CardCadastro(){
    return(
        <>

        <Container>

            <Titulo>
            <Text fontSize='17px' as='b' justifyContent='space-between' align='center'> CADASTRE-SE!</Text>
            </Titulo>

            <StyleInput>
            <InputGroup>
            <InputLeftElement pointerEvents='none'>
            <BsFillPersonFill/>
            </InputLeftElement>
            <Input type='username' size='md' variant='filled' fontSize='15px' placeholder='Nome de Usuário' />
            </InputGroup>
            </StyleInput>

            <StyleInput>
            <InputGroup>
            <InputLeftElement pointerEvents='none'>
            <EmailIcon />
            </InputLeftElement>
            <Input type='email' size='md' variant='filled' fontSize='15px' placeholder='Email' />
            </InputGroup>
            </StyleInput>

            <StyleInput>
            <InputGroup>
            <InputLeftElement pointerEvents='none'>
            <PhoneIcon/>
            </InputLeftElement>
            <Input type='phone' size='md' variant='filled' fontSize='15px' placeholder='Número de Telefone' />
            </InputGroup>
            </StyleInput>

            <StyleInput>
            <InputGroup>
            <InputLeftElement pointerEvents='none'>
            <LockIcon/>
            </InputLeftElement>
            <Input type='password' size='md' variant='filled' fontSize='15px' placeholder='Senha' />
            </InputGroup>
            </StyleInput>

            <StyleInput>
            <InputGroup>
            <InputLeftElement pointerEvents='none'>
            <LockIcon/>
            </InputLeftElement>
            <Input type='password' size='md' variant='filled' fontSize='15px' placeholder='Confirmar Senha' />
            </InputGroup>
            </StyleInput>

            <BotaoEntrar>
            <Link to="/Home">
                <Button  marginLeft='25%' width='50%' size='md' fontSize='15px' colorScheme='green'>Salvar</Button>
            </Link>
            </BotaoEntrar>

            <SignUp>
            <Text marginLeft='20%' fontSize='13px' colorScheme='gray'>Já possui conta? 
            <Link to="/">
            <Button marginLeft='2%' fontSize='13px' colorScheme='blue' variant='link'>  Login</Button>
            </Link>
            </Text> 
            </SignUp>

        </Container>
        </>
    )
}


export default CardCadastro