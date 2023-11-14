
import { BotaoEntrar, Container, SignUp, StyleInput, Titulo} from "./styled"

import { InputGroup, InputLeftElement} from '@chakra-ui/react'

import { Input } from '@chakra-ui/react'
import { EmailIcon, LockIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Link } from "react-router-dom"

import { useState } from "react"


import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../services/api";
import axios from "axios";


function CardLogin(){

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        senha: ""
    });

    const goToHome = () =>{
        navigate('/home')
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${baseUrl}/auth/login`, formData)
            .then(function (response) {
                console.log(response)
                localStorage.setItem('user', response.data.data[0].id)
                localStorage.setItem('token', response.data.data[0].token)
                alert(response.data.message)
                goToHome()
            })
            .catch(function (error) {
                alert(error.response.data.msg)
            });

        setFormData({
            email: "",
            senha: "",
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
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
            <Input size='md' variant='filled' fontSize='15px' id="email"
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Email' 
                        required/>
            </InputGroup>
            </StyleInput>

            <StyleInput>
            <InputGroup>
            <InputLeftElement pointerEvents='none'>
            <LockIcon/>
            </InputLeftElement>
            <Input size='md' variant='filled' fontSize='15px' id="senha"
                        type="password"
                        name="senha"
                        value={formData.senha}
                        onChange={handleChange}
                        placeholder='Senha' 
                        required/>
            </InputGroup>
            </StyleInput>

            <Link to="/NewPassword">
            <Button marginTop='5%' fontSize='12px' colorScheme='gray' variant='link'>Esqueceu sua senha?</Button>
            </Link>

            <BotaoEntrar>
                <Button  marginLeft='25%' width='50%' size='md' fontSize='15px' colorScheme='green' type='submit'>Login</Button>
            </BotaoEntrar>
        </form>

            <SignUp>
            <Text marginLeft='18%' fontSize='15px' colorScheme='gray'>Não possui conta? 
            <Link to="/Cadastro">
            <Button marginLeft='2%' fontSize='15px' colorScheme='blue' variant='link'> 
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