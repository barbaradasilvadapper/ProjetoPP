
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

import { useState, useEffect, useToast } from "react"
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../services/api";
import axios from "axios";


function CardCadastro(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        senha: "",
        confirmSenha: ""
    });

    console.log(formData)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(formData.senha !== formData.confirmSenha){
            alert("Senhas não coincidem")
        } else{
            const response = await axios.post(`${baseUrl}/user/update`, formData);

            if(response.data.success) {
                alert('Senha atualizada')
                navigate('/')
            } else {
                alert('Não foi possivel atualizar a senha');
            }
              
        }

        setFormData({
            nome: "",
            email: "",
            senha: "",
            confirmSenha: ""
        });
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
            <Text fontSize='17px' as='b' justifyContent='space-between' align='center'> REDEFINIR SENHA</Text>
            </Titulo>

            <form onSubmit={handleSubmit}>
            <StyleInput>
            <InputGroup>
            <InputLeftElement pointerEvents='none'>
            <BsFillPersonFill/>
            </InputLeftElement>
            <Input type='username' size='md' variant='filled' fontSize='15px' placeholder='Nome de Usuário' 
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required/>
            </InputGroup>
            </StyleInput>

            <StyleInput>
            <InputGroup>
            <InputLeftElement pointerEvents='none'>
            <EmailIcon />
            </InputLeftElement>
            <Input type='email' size='md' variant='filled' fontSize='15px' placeholder='Email' 
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required/>
            </InputGroup>
            </StyleInput>


            <StyleInput>
            <InputGroup>
            <InputLeftElement pointerEvents='none'>
            <LockIcon/>
            </InputLeftElement>
            <Input type='password' size='md' variant='filled' fontSize='15px' placeholder='Nova Senha' 
            id="senha"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required/>
            </InputGroup>
            </StyleInput>

            <StyleInput>
            <InputGroup>
            <InputLeftElement pointerEvents='none'>
            <LockIcon/>
            </InputLeftElement>
            <Input type='password' size='md' variant='filled' fontSize='15px' placeholder='Confirmar Senha' 
            id="confirmSenha"
            name="confirmSenha"
            value={formData.confirmSenha}
            onChange={handleChange}
            required/>
            </InputGroup>
            </StyleInput>

            <BotaoEntrar>
                <Button  type="submit" marginLeft='25%' width='50%' size='md' fontSize='15px' colorScheme='green'>Salvar</Button>
            </BotaoEntrar>
            </form>

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