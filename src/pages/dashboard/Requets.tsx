import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

function createData(
  id: number,
  date: string,
  username: string,
  requestType: string,
  ipAddress: string,
) {
  return {id, date, username, requestType, ipAddress};
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'gbaranski',
    'Turn on water mixing',
    '94.245.24.196',
  ),
  createData(1, '16 Mar, 2019', 'mama', 'Open gate', '156.158.59.177'),
  createData(
    2,
    '16 Mar, 2019',
    'tata',
    'Set alarm time to 12:30',
    '53.110.39.216',
  ),
  createData(3, '16 Mar, 2019', 'stachu', 'Turn off alarm', '134.63.236.85'),
  createData(
    4,
    '15 Mar, 2019',
    'gbaranski',
    'Turned on alarm test',
    '245.26.16.191',
  ),
];

export default function Requests() {
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
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.username}</TableCell>
              <TableCell>{row.requestType}</TableCell>
              <TableCell>{row.ipAddress}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
