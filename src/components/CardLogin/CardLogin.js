
import { BotaoEntrar, Container, SignUp, StyleInput, Titulo} from "./styled"

import {
    InputGroup,
    InputLeftElement
  } from '@chakra-ui/react'

import { Input } from '@chakra-ui/react'
import { EmailIcon, LockIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'


function CardLogin(){
    return(
        <>

        <Container>

            <Titulo>
            <Text fontSize='17px' as='b'> WELCOME BACK!</Text>
            </Titulo>

            <StyleInput>
            <InputGroup>
            <InputLeftElement pointerEvents='none'>
            <EmailIcon />
            </InputLeftElement>
            <Input type='email' size='md' variant='filled' fontSize='15px' placeholder='Email or Username' />
            </InputGroup>
            </StyleInput>

            <StyleInput>
            <InputGroup>
            <InputLeftElement pointerEvents='none'>
            <LockIcon/>
            </InputLeftElement>
            <Input type='email' size='md' variant='filled' fontSize='15px' placeholder='Password' />
            </InputGroup>
            </StyleInput>

            <Button marginTop='5%' fontSize='10px' colorScheme='gray' variant='link'>Forgot your password?</Button>

            <BotaoEntrar>
                <Button  marginLeft='25%' width='50%' size='md' fontSize='15px' colorScheme='green'>Login</Button>
            </BotaoEntrar>

            <SignUp>
            <Text marginLeft='9%' fontSize='13px' colorScheme='gray'>Don't have an account? 
            <Button marginLeft='2%' fontSize='13px' colorScheme='blue' variant='link'>  Sign Up</Button>
            </Text> 
            </SignUp>

        </Container>
        </>
    )
}


export default CardLogin