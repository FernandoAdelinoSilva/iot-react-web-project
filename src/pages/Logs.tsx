import '../styles/sidebar.scss';
import '../styles/table.scss';
import { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Text } from '@chakra-ui/react'
import { getLogsByPlace } from '../services/firebase/log.service';
import moment from 'moment';

const Logs = (props : any) => {
  const { placeId } = props.match.params;
  const [logs, setLogs] = useState<any>([]);

  useEffect(() => {
    const getLogs = async (placeId : string) => {
			let logs = await getLogsByPlace(placeId);
      setLogs(logs);
		}

    getLogs(placeId);
  }, [placeId]);

  return (
    <div className='table'>
      <Text fontSize='3xl'>Logs</Text>
      <Table variant='simple'>
          <Thead>
            <Tr>
              <Th width={275}>Date Time</Th>
              <Th width={200}>Device Name</Th>
              <Th width={200}>Sent By</Th>
              <Th>Message</Th>
            </Tr>
          </Thead>
          <Tbody>
          {logs && logs.map((log : any) => {
            return (
            <>
              <Tr>
                <Td width={275}>{moment(log.DateTime.toDate()).format('DD/MM/YYYY HH:mm:ss')}</Td>
                <Td width={200}>{log.DeviceName}</Td>
                <Td width={200}>{log.Connection}</Td>
                <Td>{log.Message}</Td>
              </Tr>
            </>
            )
          })} 
        </Tbody>
      </Table>
    </div>
  )
}

export default Logs