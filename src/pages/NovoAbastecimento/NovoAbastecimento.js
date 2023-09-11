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

function NovoAbastecimento(){
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
                    <Input placeholder="Select Date" width='100%' size="sm" type="date" variant='filled' fontSize='15px'/>
                    </Text>
                </Box>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Horário
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    <Input placeholder="Select Time" width='100%' size="sm" type="time" variant='filled' fontSize='15px'/>
                    </Text>
                </Box>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Litros Abastecidos
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    <NumberInput placeholder="Select Liters" defaultValue={1} min={1} max={105} width='100%' size="sm" variant='filled' fontSize='15px'>
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
            <Link to="/MyInfo">
                <Button  marginLeft='55%' width='40%' size='sm' fontSize='15px' colorScheme='green'>Salvar</Button>
            </Link>
            </BotaoSalvar>
            </Container>

            <Menu/>
        </>
    )
}


export default NovoAbastecimento