import React, {useEffect} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../../components/title';
import {RequestHistory} from '@gbaranski/types';
import {getRequestHistory} from '../../requests';
import {parseDateToDateString} from '../../helpers';

export default function Requests() {
  const [requestHistory, setRequestHistory] = React.useState<any>([{}]);

  useEffect(() => {
    getRequestHistory().then((res: RequestHistory[]) => {
      setRequestHistory(res);
      console.log(res);
    });
  }, []);

  return (
    <React.Fragment>
      <Title>Recent Requests</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Request name</TableCell>
            <TableCell>IP</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {requestHistory.map((row: RequestHistory, index: number) => (
            <TableRow key={index}>
              <TableCell>{parseDateToDateString(row.date)}</TableCell>
              <TableCell>{row.user}</TableCell>
              <TableCell>{row.requestType}</TableCell>
              <TableCell>{row.ip}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
