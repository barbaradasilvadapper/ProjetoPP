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
            <Stat align='left' ml='7%'>
                <StatNumber fontSize='18px' fontWeight='700'>
                <StatArrow type='decrease'/>
                {props.NEmitido}
                </StatNumber>
                <StatLabel>Emitidos</StatLabel>
            </Stat>
            
            <Stat align='right' mr='7%'>
                <StatNumber fontSize='18px' fontWeight='700'>
                <StatArrow type='increase'/>
                {props.NCompensado}
                </StatNumber>
                <StatLabel>Compensados</StatLabel>
            </Stat>
        </StatGroup>
        </ContainerEstatistica>
      </>
    );
  }
  
  export default Estatistica;