
import { BotaoEntrar, Container, SignUp, StyleInput, Titulo} from "./styled"

import {
    InputGroup,
    InputLeftElement
  } from '@chakra-ui/react'

import { Input } from '@chakra-ui/react'
import { EmailIcon, LockIcon, PhoneIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom"

function CardCadastro(){
    return(
        <>

        <Container>

            <Titulo>
            <Text fontSize='17px' as='b'> NEW PASSWORD</Text>
            </Titulo>

            <StyleInput>
            <InputGroup>
            <InputLeftElement pointerEvents='none'>
            <BsFillPersonFill/>
            </InputLeftElement>
            <Input type='username' size='md' variant='filled' fontSize='15px' placeholder='Username' />
            </InputGroup>
            </StyleInput>

            <StyleInput>
            <InputGroup>
            <InputLeftElement pointerEvents='none'>
            <EmailIcon />
            </InputLeftElement>
            <Input type='email' size='md' variant='filled' fontSize='15px' placeholder='Email' />
            </InputGroup>
            </StyleInput>

            <StyleInput>
            <InputGroup>
            <InputLeftElement pointerEvents='none'>
            <PhoneIcon/>
            </InputLeftElement>
            <Input type='phone' size='md' variant='filled' fontSize='15px' placeholder='Phone Number' />
            </InputGroup>
            </StyleInput>

            <StyleInput>
            <InputGroup>
            <InputLeftElement pointerEvents='none'>
            <LockIcon/>
            </InputLeftElement>
            <Input type='password' size='md' variant='filled' fontSize='15px' placeholder='Password' />
            </InputGroup>
            </StyleInput>

            <StyleInput>
            <InputGroup>
            <InputLeftElement pointerEvents='none'>
            <LockIcon/>
            </InputLeftElement>
            <Input type='password' size='md' variant='filled' fontSize='15px' placeholder='Confirm Password' />
            </InputGroup>
            </StyleInput>

            <BotaoEntrar>
            <Link to="/">
                <Button  marginLeft='25%' width='50%' size='md' fontSize='15px' colorScheme='green'>Update</Button>
            </Link>
            </BotaoEntrar>

            <SignUp>
            <Text marginLeft='5%' fontSize='13px' colorScheme='gray'>Remember your password? 
            <Link to="/">
            <Button marginLeft='2%' fontSize='13px' colorScheme='blue' variant='link'>  Sign In</Button>
            </Link>
            </Text> 
            </SignUp>

        </Container>
        </>
    )
}


export default CardCadastro