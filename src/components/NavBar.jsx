import { Avatar, AvatarBadge, Button, Flex, Heading, HStack, Spacer, Text, useToast } from '@chakra-ui/react';
import { UnlockIcon } from '@chakra-ui/icons';

export const NavBar = () => {
	const toast = useToast();
	
	const showToast = () => {
		toast({
			title: 'Logged out',
			description: 'Successfully logged out.',
			duration: 5000,
			isClosable: true,
			status: 'success',
			position: 'top',
			icon: <UnlockIcon />,
		});
	};
	
	return (
		<Flex as={ 'nav' } p={ '10px' } mb={ '40px' } alignItems={ 'center' } gap={ '10px' }>
			<Heading as={ 'h1' }>MOS Tasks</Heading>
			<Spacer />
			
			<HStack spacing={ '20px' }>
				<Avatar src={ '/img/mario.png' }>
					<AvatarBadge width={ '1.3em' } bg={ 'teal.500' }>
						<Text fontSize={ 'xs' } color={ 'white' }>3</Text>
					</AvatarBadge>
				</Avatar>
				<Text>jeewon.kwon.0817@gmail.com</Text>
				<Button colorScheme={ 'purple' } onClick={ showToast }>Logout</Button>
			</HStack>
		</Flex>
	);
};