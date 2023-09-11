import { IconButton } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import Menu from '../../components/Menu/Menu'
import { useState } from 'react';
import { Container, Question, OptionList, Option, SubmitButton, DateContainer, Titulo } from './styled';
import { Button } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Link } from "react-router-dom"

function CalcularMes(){

    return(
        <>
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

        <Titulo justifyContent='space-between' align='center'>
            <Text fontSize='17px' as='b'> Selecione o mês</Text>
        </Titulo>

        <RadioGroup defaultValue='1' spacing={5} direction='column'>
        <Stack>
        <Container>
            <form>
                <DateContainer>
                <OptionList>
                
                <Option>
                <Radio colorScheme='green' value='1'>Janeiro</Radio>
                </Option>
                <Divider/>

                <Option>
                <Radio colorScheme='green' value='2'>Fevereiro</Radio>
                </Option>
                <Divider/>

                <Option>
                <Radio colorScheme='green' value='3'>Março</Radio>
                </Option>
                <Divider/>

                <Option>
                <Radio colorScheme='green' value='4'>Abril</Radio>
                </Option>
                <Divider/>

                <Option>
                <Radio colorScheme='green' value='5'>Maio</Radio>
                </Option>
                <Divider/>

                <Option>
                <Radio colorScheme='green' value='6'>Junho</Radio>
                </Option>
                <Divider/>

                <Option>
                <Radio colorScheme='green' value='7'>Julho</Radio>
                </Option>
                <Divider/>

                <Option>
                <Radio colorScheme='green' value='8'>Agosto</Radio>
                </Option>
                <Divider/>

                <Option>
                <Radio colorScheme='green' value='9'>Setembro</Radio>
                </Option>
                <Divider/>

                <Option>
                <Radio colorScheme='green' value='10'>Outubro</Radio>
                </Option>
                <Divider/>

                <Option>
                <Radio colorScheme='green' value='11'>Novembro</Radio>
                </Option>
                <Divider/>

                <Option>
                <Radio colorScheme='green' value='12'>Dezembro</Radio>
                </Option>
                <Divider/>

                </OptionList>
                </DateContainer>

                <SubmitButton>
                <Link to="/Resultado">
                <Button  type="submit" width='40%' size='sm' fontSize='16px' colorScheme='green'>Calcular</Button>
                </Link>
                </SubmitButton>
            </form>
            </Container>
            </Stack>
            </RadioGroup>

            <Menu></Menu>

        </>
    )
}


export default CalcularMes
