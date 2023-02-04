import { 
    Center,
    Input,
    Box,
} from '@chakra-ui/react'

import { login } from '../../services/login'
import { LoginButton } from '../Button/LoginButton'

export const Login = () => {
    return (

    <Box minHeight='100vh' backgroundColor='#820AD1' padding='25px'>
    <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
        <Center>
        <h1>Faça o login</h1>
        </Center>
        <Input placeholder="email" />
        <Input placeholder="password" />
        <Center>
        <LoginButton action={login} alert="Login"/>
        </Center>
    </Box>
    </Box>
    );
}
