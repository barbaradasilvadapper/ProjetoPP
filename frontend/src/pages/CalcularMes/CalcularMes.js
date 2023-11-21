import { IconButton } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import Menu from '../../components/Menu/Menu'
import { useState } from 'react';
import { Container, Question, OptionList, Option, SubmitButton, DateContainer, Titulo, MenuStyle } from './styled';
import { Button } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../services/api";
import axios from "axios";


function CalcularMes() {

    const id = localStorage.getItem("user")
    const [formData, setFormData] = useState({
        id: id,
        mes: " "
    });

    const navigate = useNavigate();
    const [mes, setMes] = useState('1')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(`${baseUrl}/conta/contaEmissoes`, formData);

        if (response.data.success) {
            const totalEmitido = response.data.data; // Obtém o total emitido do response.data

            alert('Conta realizada com sucesso');
            localStorage.setItem('totalEmitido', totalEmitido); // Salva o totalEmitido no localStorage

            localStorage.setItem('selectedMonth', formData.mes); // Salvar o mês no localStorage

            navigate('/Resultado');
        } else {
            alert('Não foi possível realizar a conta');
        }
    }

    // Atualiza formData quando o valor de mes muda
    useEffect(() => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            mes: mes
        }));
    }, [mes]);



    return (
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

            <MenuStyle>
                <Titulo justifyContent='center' align='center'>
                    <Text fontSize='20px' as='b'> Selecione o mês</Text>
                </Titulo>

                <RadioGroup defaultValue='1' spacing={5} direction='column' onChange={setMes} value={mes}>
                    <Stack>
                        <Container>

                            <DateContainer>
                                <OptionList>

                                    <Option>
                                        <Radio colorScheme='green' value='1'>Janeiro</Radio>
                                    </Option>
                                    <Divider />

                                    <Option>
                                        <Radio colorScheme='green' value='2'>Fevereiro</Radio>
                                    </Option>
                                    <Divider />

                                    <Option>
                                        <Radio colorScheme='green' value='3'>Março</Radio>
                                    </Option>
                                    <Divider />

                                    <Option>
                                        <Radio colorScheme='green' value='4'>Abril</Radio>
                                    </Option>
                                    <Divider />

                                    <Option>
                                        <Radio colorScheme='green' value='5'>Maio</Radio>
                                    </Option>
                                    <Divider />

                                    <Option>
                                        <Radio colorScheme='green' value='6'>Junho</Radio>
                                    </Option>
                                    <Divider />

                                    <Option>
                                        <Radio colorScheme='green' value='7'>Julho</Radio>
                                    </Option>
                                    <Divider />

                                    <Option>
                                        <Radio colorScheme='green' value='8'>Agosto</Radio>
                                    </Option>
                                    <Divider />

                                    <Option>
                                        <Radio colorScheme='green' value='9'>Setembro</Radio>
                                    </Option>
                                    <Divider />

                                    <Option>
                                        <Radio colorScheme='green' value='10'>Outubro</Radio>
                                    </Option>
                                    <Divider />

                                    <Option>
                                        <Radio colorScheme='green' value='11'>Novembro</Radio>
                                    </Option>
                                    <Divider />

                                    <Option>
                                        <Radio colorScheme='green' value='12'>Dezembro</Radio>
                                    </Option>
                                    <Divider />

                                </OptionList>
                            </DateContainer>

                        </Container>
                    </Stack>
                </RadioGroup>

                <SubmitButton onClick={handleSubmit}>
                    <Button type="submit" width='40%' size='sm' fontSize='16px' colorScheme='green'>Calcular</Button>
                </SubmitButton>


                <Menu barra="3" />
            </MenuStyle>
        </>
    )
}


export default CalcularMes
