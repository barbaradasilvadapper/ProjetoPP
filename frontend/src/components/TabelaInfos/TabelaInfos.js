
import { MenuStyle, ulStyle, liStyle } from './styled';
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


function TabelaInfo(props) {
  return (
    <>

        <TableContainer>
            <Table size='lg' variant='simple'>
                <Tbody>
                <Tr>
                    <Td isDate>{props.InfoDate}</Td>
                    <Td>{props.InfoQuant}</Td>
                </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    </>
  );
}

export default TabelaInfo;