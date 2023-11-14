
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

// import { useState, useEffect, useToast } from "react"
// import { useNavigate } from "react-router-dom";
// import { baseUrl } from "../../services/api";
// import axios from "axios";


function CardCadastro(){

    return(
        <>

        <Container>

            <Titulo>
            <Text fontSize='17px' as='b' justifyContent='space-between' align='center'> REDEFINIR SENHA</Text>
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
            <LockIcon/>
            </InputLeftElement>
            <Input type='password' size='md' variant='filled' fontSize='15px' placeholder='Nova Senha' />
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
            <Link to="/">
                <Button  marginLeft='25%' width='50%' size='md' fontSize='15px' colorScheme='green'>Salvar</Button>
            </Link>
            </BotaoEntrar>

            <SignUp>
            <Text marginLeft='23%' fontSize='15px' colorScheme='gray'>Lembra sua senha? 
            <Link to="/">
            <Button marginLeft='2%' fontSize='15px' colorScheme='blue' variant='link'>  Login</Button>
            </Link>
            </Text> 
            </SignUp>

        </Container>
        </>
    )
}


export default CardCadastro