import React from 'react';
import Divider from '@material-ui/core/Divider';
import Title from '../../components/title';
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Devices Status</Title>
      <List>
        <ListItem>
          <ListItemText primary="Alarmclock" secondary="192.168.1.110" />
          <ListItemAvatar>
            <WarningRoundedIcon style={{color: 'rgb(244, 188, 58)'}} />
          </ListItemAvatar>
        </ListItem>
        <ListItem>
          <ListItemText primary="Watermixer" secondary="192.168.1.120" />
          <ListItemAvatar>
            <CheckCircleIcon style={{color: 'rgb(32, 199, 155)'}} />
          </ListItemAvatar>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemText primary="Gate" secondary="192.168.1.130" />
          <ListItemAvatar>
            <CheckCircleIcon style={{color: 'rgb(32, 199, 155)'}} />
          </ListItemAvatar>
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    </React.Fragment>
  );
}
