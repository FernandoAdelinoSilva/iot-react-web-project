import '../styles/sidebar.scss';
import '../styles/table.scss';
import {io} from "socket.io-client";
import { useEffect, useState } from 'react';
import { getDevicesByPlace } from '../services/firebase/device.service';
import { Table, Thead, Tbody, Tr, Th, Td, Text, FormControl, Input, Button } from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik';

const Places = (props : any) => {
  const { placeId } = props.match.params;
  const [devices, setDevices] = useState<any>([]);

  useEffect(() => {
    const getDevices = async (placeId : string) => {
			let devices = await getDevicesByPlace(placeId);
      setDevices(devices);
		}

    getDevices(placeId);
  }, [placeId]);


  const onMessageSubmit = (values: any, customParams: any) => {
    console.log(JSON.stringify(values, null, 2));
    console.log(customParams);
    io("http://192.168.15.96:4000").connect().emit("message", {name: 'Esp32', message: 'Test'});
	}

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
          <Tr>
            <Td>Esp32</Td>
            <Td>Door Lock</Td>
            <Td>192.168.15.3</Td>
            <Td>4002</Td>
            <Td>
            <Formik
              initialValues={{ message: ''}}
              onSubmit={(values) => {
                onMessageSubmit(values, 'test');
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
        </Tbody>
      </Table>
    </div>
  )
}

export default Places