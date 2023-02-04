import { Button } from "@chakra-ui/react"
import { login } from "../../services/login"

export const LoginButton = () => {
    return(
        <Button  onClick={login} colorScheme='purple' size='lg' width='200px' height='58px' marginTop='5px' variant='outline' _hover={{background:'#820AD1', color:'white' }}>
            Continuar
        </Button>
    )
}
