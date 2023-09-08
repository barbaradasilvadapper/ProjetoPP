import { Fundo, Titulo, Seta, EstiloCards } from "./styled"
import { IconButton } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { Text } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import Menu from "../../components/Menu/Menu"

function NewInfo(){
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

            <GradientTitle text="Nova Informação"/>


            <SimpleGrid spacing={5} templateColumns='repeat(auto-fill, minmax(40%, 85%))' justifyContent='center' marginTop='15%'>
            <Card align='center'>
                <CardHeader >
                <Heading size='sm' fontSize='17px'> Abasteceu seu carro? </Heading>
                </CardHeader>
                <CardFooter >
                <Button size='md' fontSize='14px' mt='-3' >Adicionar Informação</Button>
                </CardFooter>
            </Card>
            <Card align='center'>
            <CardHeader>
                <Heading size='sm' fontSize='17px'> Compensou emissões? </Heading>
                </CardHeader>
                <CardFooter>
                <Button size='md' fontSize='14px' mt='-3'>Adicionar Informação</Button>
                </CardFooter>
            </Card>
            </SimpleGrid>

            <Menu/>
        </>
    )
}


export default NewInfo