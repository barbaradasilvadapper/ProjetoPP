import { Fundo, Titulo, BotaoSalvar, Container, ContainerHeader, Seta} from "./styled"
import { Text } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'

import { Card, CardHeader, CardBody, CardFooter, Heading, StackDivider, Stack, Box } from '@chakra-ui/react'
import Menu from "../../components/Menu/Menu"
import { Link } from "react-router-dom"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../services/api";
import axios from "axios";

function NovoAbastecimento(){

    const navigate = useNavigate();
    const id = localStorage.getItem("user")

    const [formData, setFormData] = useState({
        idUser: id,
        data: "",
        litros: ""
    });

    console.log(formData)

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await axios.post(`${baseUrl}/abastecimentos/abastecimentos/create`, formData);

            if(response.data.success) {
                alert('Abastecimento informada')
                navigate('/MyInfo')
            } else {
                alert('Não foi possivel salvar');
            }
              

        setFormData({
            data: "",
            litros: ""
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
            <Link to="/Home">
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
            <Text color='white' fontSize='20px' as='b'> Novo Abastecimento</Text>
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
                    Litros Abastecidos
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    <Input placeholder="Exemplo: 30" min={1} width='100%' size="sm" variant='filled' fontSize='15px'
                    name="litros"
                    value={formData.litros}
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


export default NovoAbastecimento