import '../styles/sidebar.scss';
import { useAuth } from '../hooks/useAuth';
import { Heading, Stack, Text } from '@chakra-ui/react';
import { useUserInformation } from '../hooks/useUserInformation';

const Overview = () => {
  const { user } = useAuth();
  console.log(user);
  const { userInformation } = useUserInformation();

  return (
    <div className='home'>
      <Stack spacing={3}>
        <Heading>User Information</Heading>
        <Text fontSize='md'>First Name: {userInformation.firstName}</Text>
        <Text fontSize='md'>Last Name: {userInformation.lastName}</Text>
        <Text fontSize='md'>Address: {userInformation.address}</Text>
        <Text fontSize='md'>Email: {userInformation.email}</Text>
        <Text fontSize='md'>Phone: {userInformation.phone}</Text>
      </Stack>
    </div>
  )
}

export default Overview
