import { 
    Center,
    Input,
    Box,
    Heading,
    FormControl,
    Flex,
    Button,
    InputRightElement,
    InputGroup,
    Link,
    FormLabel,
    ChakraProvider
} from '@chakra-ui/react'

import { Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/card';
import React, { useState } from 'react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { login } from '../../services/login'
import { LoginButton } from '../Button/LoginButton'
import { theme } from './Theme';

export const Login = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <ChakraProvider theme={theme}>
            <Box minHeight='100vh' backgroundColor='#820AD1' padding='25px'>
                <Center>
                    <Card backgroundColor='#FFFFFF' borderRadius='7px' p='6' marginTop='10' width='59vh' gap='10' boxShadow='2xl'>
                        <CardHeader p='25px'>
                            <Center>
                                <Heading size='lg'>Faça Login</Heading>
                            </Center>
                        </CardHeader>
                        <CardBody p='25px'>
                        <Flex direction='column' align='center' gap='25px'>
                            <Center>
                                <FormControl variant='floating' id='first-name' >
                                    <InputGroup width='xs' >
                                        <Input placeholder=" " type='email' variant='flushed' focusBorderColor='#820AD1'/>
                                        <FormLabel color='#7A859E'>CPF</FormLabel>
                                    </InputGroup>
                                </FormControl>
                            </Center>
                            <InputGroup width='xs'>
                                <Input placeholder="Senha" type={show ? 'text' : 'password'}  variant='flushed' focusBorderColor='#820AD1' />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </Flex>
                        </CardBody>
                        <Flex alignItems='center' direction='column' pb='20px' gap='8px'>
                            <CardFooter pb='25px'>
                                <LoginButton action={login} alert="Login"/>
                            </CardFooter>
                            <Link href='https://github.com/viniciusMaiaM/' color='#820AD1' fontWeight='bold' isExternal>
                                Esqueci Minha Senha <ExternalLinkIcon mx='2px' />
                            </Link>
                            <Link href='#' color='#820AD1' fontWeight='bold' isExternal>
                                Ainda não sou cliente <ExternalLinkIcon mx='2px' />
                            </Link>
                        </Flex >
                    </Card>
                </Center>
            </Box>
        </ChakraProvider>
    );
}
