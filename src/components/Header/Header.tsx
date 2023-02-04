import { Heading,  Flex, Box } from '@chakra-ui/react'
import { Logo } from '../svg/Logo'
export const Header  = () => {
	return(
		<Flex maxWidth='100%' justify='center' bg='#820AD1' paddingTop='8' gap='5'>
			<Heading size='lg'  fontSize='40px' color='white' fontFamily='Georgia'>
			Dio Bank
			</Heading>
			<Box marginTop='1'>
				<Logo/>
			</Box>
		</Flex>
	)
}
