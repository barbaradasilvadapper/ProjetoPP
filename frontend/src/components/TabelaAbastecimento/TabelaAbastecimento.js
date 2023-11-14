import { Table, TableContainer, Tbody } from '@chakra-ui/react';
import TabelaInfo from '..TabelaInfos/TabelaInfo.js'; // Certifique-se de que o caminho está correto

function TabelaAbastecimentos() {
    return (
        <TableContainer>
            <Table size='lg' variant='simple'>
                <Tbody>
                    <TabelaInfo InfoDate='05/01' InfoQuant='10 litros abastecidos' />
                    <TabelaInfo InfoDate='10/02' InfoQuant='10 litros abastecidos' />
                    <TabelaInfo InfoDate='20/01' InfoQuant='20 litros abastecidos' />
                    <TabelaInfo InfoDate='30/01' InfoQuant='40 litros abastecidos' />
                    {/* Adicione mais <TabelaInfo> conforme necessário */}
                </Tbody>
            </Table>
        </TableContainer>
    );
}

export default TabelaAbastecimentos