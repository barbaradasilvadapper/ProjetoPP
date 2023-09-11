

//NÃO SERÁ UTILIZADO NO MOMENTO, POIS ACREDITO QUE NÃO FAÇA SENTIDO COM O PROPÓSITO DO APP,
//HAVERÁ SOMENTE A OPÇÃO DE REDEFINIR SENHA (OUTRA PÁGINA), NÃO DE ALTERAR O NOME DE USUÁRIO E EMAIL



import React from 'react';
import { useDisclosure } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Button,
  Input,
} from '@chakra-ui/react'
import { Container } from './styled';

  function Perfil(){

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    return (
        <>
        <Button colorScheme='green' size='sm' variant='ghost' onClick={onOpen}>Editar Perfil</Button>

      <Container>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          width='90vw'
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Editar Perfil</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Editar nome de usuário</FormLabel>
                <Input ref={initialRef} placeholder='Username' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Editar email</FormLabel>
                <Input placeholder='Email' />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='green' mr={3}>
                Salvar
              </Button>
              <Button onClick={onClose}>Cancelar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        </Container>
        </>
      );
    }
    
    export default Perfil;
