import '../styles/overview.scss';
import { useAuth } from '../hooks/useAuth';
import { Heading, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';
import { useUserInformation } from '../hooks/useUserInformation';

const Overview = () => {
  const { user } = useAuth();
  console.log(user);
  const { userInformation } = useUserInformation();

  return (
    <div className='overview'>
      <div>
        <Stack spacing={3}>
          <Heading>User Information</Heading>
          <Text fontSize='md'>First Name: {userInformation.firstName}</Text>
          <Text fontSize='md'>Last Name: {userInformation.lastName}</Text>
          <Text fontSize='md'>Address: {userInformation.address}</Text>
          <Text fontSize='md'>Email: {userInformation.email}</Text>
          <Text fontSize='md'>Phone: {userInformation.phone}</Text>
        </Stack>
      </div>
      <div className='places'>
      <Stack spacing={3}>
        <Heading>Places</Heading>
        <UnorderedList>
        {userInformation.places && userInformation.places.map(place => {
          return (
            <>
            <Stack spacing={3}>
              <ListItem fontSize='md'>{place.Name}</ListItem>
            </Stack>
            </>
          )
        })}
        </UnorderedList>
        {!userInformation.places && 
          <Text fontSize='md'>No Places Found</Text>
        }
      </Stack>
      </div>
    </div>
  )
}

export default Overview
