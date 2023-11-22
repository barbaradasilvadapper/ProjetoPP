import { Fundo, Titulo, BotaoSalvar, Container, ContainerHeader, Seta} from "./styled";
import { Text } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { ArrowBackIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Select } from '@chakra-ui/react';

import { Card, CardHeader, CardBody, CardFooter, Heading, StackDivider, Stack, Box } from '@chakra-ui/react';
import Menu from "../../components/Menu/Menu";
import { Link } from "react-router-dom";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../services/api";
import axios from "axios";

function NovoCarro(){
    const navigate = useNavigate();
    const id = localStorage.getItem("user")

    const [formData, setFormData] = useState({
        idUser: id,
        placa: "",
        combustivel: "",
        consumo: ""
    });

    console.log(formData)

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await axios.post(`${baseUrl}/car/car/create`, formData);

            if(response.data.success) {
                alert('Carro cadastrado')
                localStorage.clear();
                navigate('/')
            } else {
                alert('Não foi possivel cadastrar');
            }
              

        setFormData({
            placa: "",
            combustivel: "",
            consumo: ""
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
            <Text color='white' fontSize='20px' as='b'> Novo Carro</Text>
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
                    Placa do Carro
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    <Input placeholder="Placa do Carro" width='100%' size="sm" variant='filled' fontSize='15px'
                    name="placa"
                    value={formData.placa}
                    onChange={handleChange}
                    required/>
                    </Text>
                </Box>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Tipo de Combustível
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    <Select placeholder='Selecione o Combustível' width='100%' size="sm" variant='filled' fontSize='15px' color='gray.500'
                    name="combustivel"
                    value={formData.combustivel}
                    onChange={handleChange}
                    required>
                    <option value='gasolina'>Gasolina</option>
                    <option value='diesel'>Diesel</option>
                    <option value='etanol'>Etanol</option>
                    </Select>
                    </Text>
                </Box>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Taxa de Consumo (km/L)
                    </Heading>
                    {/* <Text pt='2' fontSize='sm'> */}
                    <Input placeholder="Exemplo: 9.8" width='100%' size="sm" variant='filled' fontSize='15px'
                    name="consumo"
                    value={formData.consumo}
                    onChange={handleChange}
                    required
                    type="number"/>
                    {/* </Text> */}
                </Box>
                </Stack>
            </CardBody>
            </Card>
            <BotaoSalvar>
                <Button type="submit"  marginLeft='55%' width='40%' size='sm' fontSize='15px' colorScheme='green'>Salvar</Button>
            </BotaoSalvar>
            </Container>
            </form>

        </>
    )
}


export default NovoCarro