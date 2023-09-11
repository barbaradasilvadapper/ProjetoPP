import { IconButton } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import Menu from '../../components/Menu/Menu'
import { Titulo, Subtitulo, InfoContainer } from './styled';
import { Text } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, Heading, Stack, StackDivider, Box, Image } from '@chakra-ui/react'
import neutralizacao from '../../assets/neutralizacao.png'
import plantio from '../../assets/plantio.png'
import carne from '../../assets/carne.png'
import credito from '../../assets/credito.png'
import { Link } from "react-router-dom"

function Compensacao(){

    const GradientTitle = ({ text }) => {
        return <Titulo>{text}</Titulo>;
      };

    return(
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

        <GradientTitle text="COMPENSAÇÃO DE CARBONO"/>

        <InfoContainer>
        <Card>
        <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
            <Box>
                <Heading size='xs' textTransform='uppercase'>
                O que é?
                </Heading>
                <Text pt='2' fontSize='sm' align='justify'>
                A compensação de carbono é um conjunto de medidas que tem o intuito de neutralizar e reduzir a emissão de gases de efeito estufa. O conceito surgiu na década de 90, a partir das determinações do Tratado de Kyoto, 
                e se refere, basicamente, a compensar o carbono emitido através de ações que eliminem essa mesma quantidade de carbono da atmosfera.
                </Text>
                <Image marginTop='7%'
                src={neutralizacao}
                alt='Emissões - Absorções = Neutralização'
                borderRadius='lg'
                />
            </Box>
            <Box>
                <Heading size='xs' textTransform='uppercase'>
                Como Funciona?
                </Heading>
                <Text pt='2' fontSize='sm' align='justify'>
                O primeiro passo é a realização de um Inventário de Emissões, que é uma ferramenta que quantifica a quantidade de gás carbônico que emitimos através da realização determinada atividade em um certo período de tempo. Então, após a realização do inventário, é feito o cálculo de emissões e o indivíduo é informado da quantidade de carbono que deve compensar. 
                </Text>
            </Box>
            <Box>
                <Heading size='xs' textTransform='uppercase'>
                Como realizar?
                </Heading>
                <Text pt='2' fontSize='sm' align='justify'>
                Existem diversas alternativas para a realização da compensação de carbono que variam em sua eficácia, custos e impactos ambientais.
                Algumas das alternativas mais populares são:
                <br></br>
                <br></br>
                <Text as='b'>
                1. Plantio de árvores: 
                </Text>
                <br></br>
                → as árvores têm a capacidade de absorver e armazenar grandes quantidades de carbono durante seu crescimento, realizando um sequestro biológico de carbono e contribuindo para a redução da concentração de CO2 na atmosfera.
                <Image marginTop='7%'
                src={plantio}
                alt='Emissões - Absorções = Neutralização'
                borderRadius='lg'
                />
                <br></br>
                <br></br>
                <Text as='b'>
                2. Redução do consumo de carne vermelha: 
                </Text>
                <br></br>
                → a proteína bovina é, dentre todos os alimentos, o que mais contribui para emissões de gases do efeito estufa, por meio do desmatamento em áreas de pastagem, erosão do solo e liberação de metano no "arroto do boi".
                <Image marginTop='7%'
                src={carne}
                alt='Emissões - Absorções = Neutralização'
                borderRadius='lg'
                />
                <br></br>
                <br></br>
                <Text as='b'>
                3. Compra de créditos de carbono: 
                </Text>
                <br></br>
                → entidades ou projetos que conseguem reduzir emissões de GEE abaixo de um nível de referência estabelecido geram créditos de carbono que podem ser comprados por organizações ou indivíduos que desejam compensar suas próprias emissões.
                <Image marginTop='7%'
                src={credito}
                alt='Emissões - Absorções = Neutralização'
                borderRadius='lg'
                />
                </Text>
            </Box>
            </Stack>
        </CardBody>
        </Card>
        </InfoContainer>

            <Menu></Menu>

        </>
    )
}


export default Compensacao