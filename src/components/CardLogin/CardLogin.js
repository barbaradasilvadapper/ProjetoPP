
import { BotaoEntrar, Container, SignUp, StyleInput, Titulo} from "./styled"

import { InputGroup, InputLeftElement} from '@chakra-ui/react'

import { Input } from '@chakra-ui/react'
import { EmailIcon, LockIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Link } from "react-router-dom"

import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


function CardLogin(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const saveUserInfoLocalStorage = (token) => {
        localStorage.setItem('token', token)
        localStorage.setItem('email', email)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        const credentials = {email, password}
      
          axios.post('http://localhost:8000/login', credentials, {
              headers:{
                  'Content-Type': 'application/json'
              }
          })
          .then(response => {
              alert(response.data.message)
              saveUserInfoLocalStorage(response.data.token)
              navigate("/Home")
          })
          .catch(error => console.log(error))
      }

    return(
        <>

        <Container>

            <Titulo>
            <Text fontSize='17px' as='b' justifyContent='space-between' alignText='center'> BEM-VINDO DE VOLTA!</Text>
            </Titulo>

        <form onSubmit={handleSubmit}>
            <StyleInput>
            <InputGroup>
            <InputLeftElement pointerEvents='none'>
            <EmailIcon />
            </InputLeftElement>
            <Input size='md' variant='filled' fontSize='15px' placeholder='Email ou Nome de Usuário' 
            type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </InputGroup>
            </StyleInput>

            <StyleInput>
            <InputGroup>
            <InputLeftElement pointerEvents='none'>
            <LockIcon/>
            </InputLeftElement>
            <Input size='md' variant='filled' fontSize='15px' placeholder='Senha' 
            type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </InputGroup>
            </StyleInput>

            <Link to="/NewPassword">
            <Button marginTop='5%' fontSize='10px' colorScheme='gray' variant='link'>Esqueceu sua senha?</Button>
            </Link>

            <BotaoEntrar>
                <Button  marginLeft='25%' width='50%' size='md' fontSize='15px' colorScheme='green' type='submit'>Login</Button>
            </BotaoEntrar>
        </form>

            <SignUp>
            <Text marginLeft='9%' fontSize='13px' colorScheme='gray'>Não possui conta? 
            <Link to="/Cadastro">
            <Button marginLeft='2%' fontSize='13px' colorScheme='blue' variant='link'> 
            Cadastre-se
            </Button>
            </Link> 
            </Text> 
            </SignUp>

        </Container>
        </>
    )
}


export default CardLogin