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

function MyInfo(){
    const GradientTitle = ({ text }) => {
        return <Titulo>{text}</Titulo>;
      };

    return(
        <>
            <Seta>
            <IconButton
            variant='outlined'
            colorScheme='teal'
            aria-label='Call Segun'
            color="green"
            size='lg'
            icon={<ArrowBackIcon />}
            />
            </Seta>
            <GradientTitle text="Minhas Informações"/>

                <DateContainer>
                <Meses>
                <Tabs variant='soft-rounded' colorScheme='green' size='sm'>
                <TabList>
                    <Tab>Jan</Tab>
                    <Tab>Fev</Tab>
                    <Tab>Mar</Tab>
                    <Tab>Abr</Tab>
                    <Tab>Mai</Tab>
                    <Tab>Jun</Tab>
                    <Tab>Jul</Tab>
                    <Tab>Ago</Tab>
                    <Tab>Set</Tab>
                    <Tab>Out</Tab>
                    <Tab>Nov</Tab>
                    <Tab>Dez</Tab>
                </TabList>
                </Tabs>
                </Meses>
                </DateContainer>
            <Tabela>
                <TableContainer>
                <Table size='lg' variant='simple'>
                    <Thead >
                    <Tr>
                        <Th>Abastecimentos do mês:</Th>
                    </Tr>
                    </Thead>
                </Table>
                </TableContainer>

                <ScrollAbastecimento>

                <TableContainer>
                <Table size='lg' variant='simple'>
                    <Tbody>
                    <Tr>
                    <TabelaInfo InfoDate='05/01' InfoQuant='10 litros abastecidos'/>
                    <TabelaInfo InfoDate='10/02' InfoQuant='10 litros abastecidos'/>
                    <TabelaInfo InfoDate='20/01' InfoQuant='20 litros abastecidos'/>
                    <TabelaInfo InfoDate='30/01' InfoQuant='40 litros abastecidos'/>
                    </Tr>
                    </Tbody>
                </Table>
                </TableContainer>
                </ScrollAbastecimento>
            </Tabela>

            <Tabela>
                <TableContainer>
                <Table size='lg' variant='simple'>
                    <Thead >
                    <Tr>
                        <Th>Compensações do mês:</Th>
                    </Tr>
                    </Thead>
                </Table>
                </TableContainer>

                <ScrollAbastecimento>

                <TableContainer>
                <Table size='lg' variant='simple'>
                    <Tbody>
                    <Tr>
                    <TabelaInfo InfoDate='05/01' InfoQuant='10 litros abastecidos'/>
                    <TabelaInfo InfoDate='10/02' InfoQuant='10 litros abastecidos'/>
                    <TabelaInfo InfoDate='20/01' InfoQuant='20 litros abastecidos'/>
                    <TabelaInfo InfoDate='30/01' InfoQuant='40 litros abastecidos'/>
                    </Tr>
                    </Tbody>
                </Table>
                </TableContainer>
                </ScrollAbastecimento>
            </Tabela>

            <Menu/>
        </>
    )
}


export default MyInfo