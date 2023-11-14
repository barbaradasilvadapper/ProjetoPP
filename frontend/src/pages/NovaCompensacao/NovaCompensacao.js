import { Fundo, Titulo, BotaoSalvar, Container, ContainerHeader, Seta} from "./styled"
import { Text } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'

import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'

import { Card, CardHeader, CardBody, CardFooter, Heading, StackDivider, Stack, Box } from '@chakra-ui/react'
import Menu from "../../components/Menu/Menu"
import { Link } from "react-router-dom"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../services/api";
import axios from "axios";

function NovaCompensacao(){

    const navigate = useNavigate();
    const id = localStorage.getItem("user")

    const [formData, setFormData] = useState({
        idUser: id,
        data: "",
        tipo: "",
        quantidade: ""
    });

    console.log(formData)

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await axios.post(`${baseUrl}/compensacao/compensacoes/create`, formData);

            if(response.data.success) {
                alert('Compensação informada')
                navigate('/MyInfo')
            } else {
                alert('Não foi possivel salvar');
            }
              

        setFormData({
            data: "",
            tipo: "",
            quantidade: ""
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
            <Fundo>
            <Seta> 
            <Link to="/MyInfo">
            <IconButton
            variant='outlined'
            colorScheme='teal'
            aria-label='Call Segun'
            color="green"
            size='lg'
            icon={<ArrowBackIcon />}
            />
            </Link>
            </Seta>
            <Titulo>
            <Text color='white' fontSize='20px' as='b'> Nova Compensação</Text>
            </Titulo>
            </Fundo>

            <form onSubmit={handleSubmit}>
            <Container>
                
            <Card>
            <ContainerHeader>
                <Heading fontSize='18px' as='b'>Informações Requisitadas:</Heading>
            </ContainerHeader>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Data
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    <Input placeholder="Select Date" width='100%' size="sm" type="date" variant='filled' fontSize='15px'
                    name="data"
                    value={formData.data}
                    onChange={handleChange}
                    required/>
                    </Text>
                </Box>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Tipo de Compensação
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    <Input placeholder="Tipo de Compensação" width='100%' size="sm" type="text" variant='filled' fontSize='15px'
                    name="tipo"
                    value={formData.tipo}
                    onChange={handleChange}
                    required/>
                    </Text>
                </Box>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Quantidade Compensada (kg)
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    <Input placeholder="Exemplo: 135" min={1} width='100%' size="sm" variant='filled' fontSize='15px'
                    name="quantidade"
                    value={formData.quantidade}
                    onChange={handleChange}
                    required
                    type="number"/>
                    </Text>
                </Box>
                </Stack>
            </CardBody>
            </Card>
            <BotaoSalvar>
                <Button  marginLeft='55%' width='40%' size='sm' fontSize='15px' colorScheme='green' type='submit'>Salvar</Button>
            </BotaoSalvar>
            </Container>
            </form>

            <Menu barra="1"/>
        </>
    )
}


export default NovaCompensacao