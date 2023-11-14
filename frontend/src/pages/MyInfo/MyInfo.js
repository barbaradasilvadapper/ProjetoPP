import { Fundo, Titulo, Seta, Meses, DateContainer, Barra, Tabela, ScrollAbastecimento } from "./styled"
import { IconButton } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { Text } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import TabelaInfo from "../../components/TabelaInfos/TabelaInfos"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import Menu from "../../components/Menu/Menu"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { baseUrl } from "../../services/api";
import axios from "axios";

function MyInfo() {
    const id = localStorage.getItem("user")
    const [mesSelecionado, setMesSelecionado] = useState(new Date().getMonth());
    const [abastecimentos, setAbastecimentos] = useState([]);
    const [compensacoes, setCompensacoes] = useState([]);

    const GradientTitle = ({ text }) => {
        return <Titulo>{text}</Titulo>;
    };

    const aparecerTelaAbastecimentos = async () => {
        try {
            const formData = {
                idUser: id
            }

            const response = await axios.post(`${baseUrl}/abastecimentos/abastecimentos`, formData);
            setAbastecimentos(response.data.data);
        } catch (err) {
            console.log(err);
        }
    };

    const aparecerTelaCompensacoes = async () => {
        try {
            const formData = {
                idUser: id
            }
            
            const response = await axios.post(`${baseUrl}/compensacao/compensacoes`, formData);
            setCompensacoes(response.data.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        aparecerTelaAbastecimentos();
        aparecerTelaCompensacoes();
    }, []);

    const filtroMesAbastecimentos = () => {
        return abastecimentos.filter((item) => {
            const dataItem = new Date(item.data);
            return dataItem.getMonth() === mesSelecionado;
        });
    };

    const filtroMesCompensacoes = () => {
        return compensacoes.filter((item) => {
            const dataItem = new Date(item.data);
            return dataItem.getMonth() === mesSelecionado;
        });
    };

    function formatarData(dataMySQL) {
        const dataObj = new Date(dataMySQL);
        const dia = String(dataObj.getDate()).padStart(2, '0');
        const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
        const ano = dataObj.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }
    return (
        <>

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
            <GradientTitle text="Minhas Informações" />


            <DateContainer>
                <Meses>
                    <Select
                        value={mesSelecionado}
                        onChange={(e) => setMesSelecionado(parseInt(e.target.value))}
                    >
                        <option value={0}>Janeiro</option>
                        <option value={1}>Fevereiro</option>
                        <option value={2}>Março</option>
                        <option value={3}>Abril</option>
                        <option value={4}>Maio</option>
                        <option value={5}>Junho</option>
                        <option value={6}>Julho</option>
                        <option value={7}>Agosto</option>
                        <option value={8}>Setembro</option>
                        <option value={9}>Outubro</option>
                        <option value={10}>Novembro</option>
                        <option value={11}>Dezembro</option>
                    </Select>
                </Meses>
            </DateContainer>

            <Tabela>
                <TableContainer>
                    <Table size="lg" variant="simple">
                        <Thead>
                            <Tr>
                                <Th>Abastecimentos do mês:</Th>
                            </Tr>
                        </Thead>
                    </Table>
                </TableContainer>

                <ScrollAbastecimento>
                    <TableContainer>
                        <Table size="lg" variant="simple">
                            <Tbody>
                                {filtroMesAbastecimentos().map((item, index) => (
                                    <Tr key={index}>
                                        <Td>{formatarData(item.data)}</Td>
                                        <Td>{item.litros} litros abastecidos</Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </ScrollAbastecimento>
            </Tabela>

            <Tabela marginTop="10%">
                <TableContainer>
                    <Table size="lg" variant="simple">
                        <Thead>
                            <Tr>
                                <Th>Compensações do mês:</Th>
                            </Tr>
                        </Thead>
                    </Table>
                </TableContainer>

                <ScrollAbastecimento>
                    <TableContainer>
                        <Table size="lg" variant="simple">
                            <Tbody>
                                {filtroMesCompensacoes().map((item, index) => (
                                    <Tr key={index}>
                                        <Td>{formatarData(item.data)}</Td>
                                        <Td>{item.quantidade} kg compensados</Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </ScrollAbastecimento>
            </Tabela>

            <Menu barra="2" />
        </>
    )
}


export default MyInfo