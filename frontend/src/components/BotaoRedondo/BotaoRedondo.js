
import { Text } from '@chakra-ui/react'
import { CenteredButton, RoundButton, RoundImage } from './styled'
import botaoprincipal from '../../assets/botaoprincipal.png'
import { Link } from "react-router-dom"

function BotaoRedondo(props){

    return(
        <>
        <CenteredButton>
        <RoundButton align='center' justifyContent='center'>
            <RoundImage
            src={botaoprincipal}
            alt='botão'
            />
            <Text fontSize='16px' as='b'>{props.TextoBotao}</Text>
        </RoundButton>
        </CenteredButton>
        </>
    )
}


export default BotaoRedondo