
import { Text } from '@chakra-ui/react'
import { ContainerCarro, ContainerInfo, TituloCarro } from './styled'

function HomeInfo(props){

    const GradientTitle = ({ text }) => {
        return <TituloCarro>{text}</TituloCarro>;
      };

    return(
        <>
        <ContainerInfo>
            <Text fontSize='20px'>{props.TextoNormal}</Text>
            <Text fontSize='22px' as='b'>{props.TextoNegrito}</Text>
        </ContainerInfo>

        <ContainerCarro>
        <Text fontSize='18px' as='b'>{props.TextoAcima}</Text>
        <GradientTitle text={props.NomeCarro}/>
        <Text fontSize='18px' as='b'>{props.TextoFinal}</Text>
        </ContainerCarro>
        </>
    )
}


export default HomeInfo