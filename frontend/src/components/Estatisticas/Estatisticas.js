import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
} from '@chakra-ui/react'
import { ContainerEstatistica } from './styled';

function Estatistica(props) {
    return (
      <>
        <ContainerEstatistica>
        <StatGroup w='100vw' justifyContent='space-between'>
            <Stat align='left' ml='9%'>
                <StatNumber fontSize='22px' fontWeight='700'>
                <StatArrow type='decrease'/>
                {props.NEmitido}kg
                </StatNumber>
                <StatLabel fontSize='18px'>Emitidos</StatLabel>
            </Stat>
            
            <Stat align='right' mr='9%'>
                <StatNumber fontSize='22px' fontWeight='700'>
                <StatArrow type='increase'/>
                {props.NCompensado}kg
                </StatNumber>
                <StatLabel fontSize='18px'>Compensados</StatLabel>
            </Stat>
        </StatGroup>
        </ContainerEstatistica>
      </>
    );
  }
  
  export default Estatistica;