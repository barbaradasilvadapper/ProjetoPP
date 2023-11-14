
import { BotaoEntrar, Container, SignUp, StyleInput, Titulo} from "./styled"
import React, { useState } from "react";
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
            const response = await axios.post(`${baseUrl}/user/create`, formData);

            if(response.data.success) {
                alert('Usuario cadastrado')
                navigate('/')
            } else {
                alert('Não foi possivel cadastrar');
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

        <form onSubmit={handleSubmit}>
            <Container>
                

                <Titulo>
                <Text fontSize='17px' as='b' justifyContent='space-between' align='center'> CADASTRE-SE!</Text>
                </Titulo>

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
                <Input id="email"
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Email' 
                        required
                        size='md' variant='filled' fontSize='15px'/>
                </InputGroup>
                </StyleInput>

                <StyleInput>
                <InputGroup>
                <InputLeftElement pointerEvents='none'>
                <LockIcon/>
                </InputLeftElement>
                <Input id="senha"
                        type="password"
                        name="senha"
                        value={formData.senha}
                        onChange={handleChange}
                        placeholder='Senha' 
                        required
                        size='md' variant='filled' fontSize='15px'/>
                </InputGroup>
                </StyleInput>

                <StyleInput>
                <InputGroup>
                <InputLeftElement pointerEvents='none'>
                <LockIcon/>
                </InputLeftElement>
                <Input id="confirmSenha"
                        type="password"
                        name="confirmSenha"
                        value={formData.confirmSenha}
                        onChange={handleChange}
                        placeholder="Confirme sua senha"
                        required
                        size='md' variant='filled' fontSize='15px'/>
                </InputGroup>
                </StyleInput>

                <BotaoEntrar>
                    <Button  type="submit" marginLeft='25%' width='50%' size='md' fontSize='15px' colorScheme='green'>Salvar</Button>
                </BotaoEntrar>

                <SignUp>
                <Text marginLeft='26%' fontSize='15px' colorScheme='gray'>Já possui conta? 
                <Link to="/">
                <Button marginLeft='2%' fontSize='15px' colorScheme='blue' variant='link'>  Login</Button>
                </Link>
                </Text> 
                </SignUp>

            </Container>
        </form>
        </>
    )
}


export default CardCadastro