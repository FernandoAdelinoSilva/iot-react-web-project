import '../styles/sidebar.scss';
import '../styles/table.scss';
import {io} from "socket.io-client";
import { useEffect, useState } from 'react';
import { getDevicesByPlace } from '../services/firebase/device.service';
import { Table, Thead, Tbody, Tr, Th, Td, Text, FormControl, Input, Button } from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik';
import { getPlaceById } from '../services/firebase/place.service';

const Places = (props : any) => {
  const { placeId } = props.match.params;
  const [devices, setDevices] = useState<any>([]);
  const [place, setPlace] = useState<any>({});

  useEffect(() => {
    const getDevices = async (placeId : string) => {
			let devices = await getDevicesByPlace(placeId);
      setDevices(devices);
		};

    const getPlace = async (placeId : string) => {
			let place = await getPlaceById(placeId);
      setPlace(place);
		};

    getDevices(placeId);
    getPlace(placeId);
  }, [placeId]);


  const onMessageSubmit = (values: any, name: string) => {
    const {message} = values;
    io(`http://${place.ServerAddress}:${place.ServerHttpPort}`).connect().emit("message", {name, message});
	};

  return (
    <div className='table'>
      <Text fontSize='3xl'>Devices</Text>
      <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Device Name</Th>
              <Th>Type</Th>
              <Th>Ip Address</Th>
              <Th>Tcp Port</Th>
              <Th>Message</Th>
            </Tr>
          </Thead>
        <Tbody>
          {devices && devices.map((device: any) => {
            return (
            <>
              <Tr>
                <Td>{device.Name}</Td>
                <Td>{device.Type}</Td>
                <Td>{device.IpAddress}</Td>
                <Td>{device.TcpPort}</Td>
                <Td>
                  <Formik
                    initialValues={{ message: ''}}
                    onSubmit={(values) => {
                      onMessageSubmit(values, device.Name);
                    }}
                  >
                    {(props) => (
                      <Form >
                        <Field name='message'>
                          {({ field } : any) => (
                            <FormControl display={'inline-block'}>
                              <Input {...field} id='message' placeholder='type your message' width={230} />
                              <Button mt={4} marginTop={0} marginLeft={5} colorScheme='teal' type='submit'> Send </Button>
                            </FormControl>
                          )}
                        </Field>
                      </Form>
                    )}
                  </Formik>
                </Td>
              </Tr>
            </>
            )
          })} 
        </Tbody>
      </Table>
    </div>
  )
}

export default Places