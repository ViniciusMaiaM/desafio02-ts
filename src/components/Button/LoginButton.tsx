import { Button } from "@chakra-ui/react"
import { login } from "../../services/login"

interface ILoginButton {
    alert: string,
    action: () => {} | void
}

export const LoginButton = ({alert, action}: ILoginButton) => {
    return(
        <Button  onClick={action} colorScheme='purple' fontWeight='bold' size='lg' width='200px' height='58px' marginTop='5px' variant='outline' _hover={{background:'#820AD1', color:'white' }}>
            Continuar
        </Button>
    );
}
