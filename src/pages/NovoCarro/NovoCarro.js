import { Fundo, Titulo, BotaoSalvar, Container, ContainerHeader, Seta} from "./styled"
import { Text } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { ArrowBackIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Select } from '@chakra-ui/react'

import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'

import { Card, CardHeader, CardBody, CardFooter, Heading, StackDivider, Stack, Box } from '@chakra-ui/react'
import Menu from "../../components/Menu/Menu"

function NovoCarro(){
    return(
        <>
            <Fundo>
            <Seta>
            <IconButton
            variant='outlined'
            colorScheme='teal'
            aria-label='Call Segun'
            color="white"
            size='lg'
            icon={<ArrowBackIcon />}
            />
            </Seta>
            <Titulo>
            <Text color='white' fontSize='20px' as='b'> Novo Carro</Text>
            </Titulo>
            </Fundo>

            <Container>
                
            <Card>
            <ContainerHeader>
                <Heading fontSize='18px' as='b'>Informações Requisitadas:</Heading>
            </ContainerHeader>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Modelo
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    <Input placeholder="Modelo do Carro" width='100%' size="sm" variant='filled' fontSize='15px'/>
                    </Text>
                </Box>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Tipo de Combustível
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    <Select placeholder='Selecione o Combustível' width='100%' size="sm" variant='filled' fontSize='15px' color='gray.500'>
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
                    <Text pt='2' fontSize='sm'>
                    <NumberInput placeholder="Select Liters" defaultValue={1} min={1} max={105} width='100%' size="sm" variant='filled' fontSize='15px' color='gray.500'>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                    </NumberInput>
                    </Text>
                </Box>
                </Stack>
            </CardBody>
            </Card>
            <BotaoSalvar>
                <Button  marginLeft='55%' width='40%' size='sm' fontSize='15px' colorScheme='green'>Salvar</Button>
            </BotaoSalvar>
            </Container>

            <Menu/>
        </>
    )
}


export default NovoCarro