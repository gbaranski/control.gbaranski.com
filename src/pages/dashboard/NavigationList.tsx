import React from 'react';
import {Devices} from '@gbaranski/types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AlarmIcon from '@material-ui/icons/Alarm';
import OpacityIcon from '@material-ui/icons/Opacity';
import SettingsRemoteIcon from '@material-ui/icons/SettingsRemote';
import InfoIcon from '@material-ui/icons/Info';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';

export const mainListItems = (
  <div>
    <ListItem button selected>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AlarmIcon />
      </ListItemIcon>
      <ListItemText primary={Devices.Alarmclock} />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <OpacityIcon />
      </ListItemIcon>
      <ListItemText primary={Devices.Watermixer} />
    </ListItem>
    <ListItem button disabled>
      <ListItemIcon>
        <SettingsRemoteIcon />
      </ListItemIcon>
      <ListItemText primary={Devices.Gate + ' & ' + Devices.Garage} />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>More</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="About website" />
    </ListItem>
    <ListItem button disabled>
      <ListItemIcon>
        <LiveHelpIcon />
      </ListItemIcon>
      <ListItemText primary="Support" />
    </ListItem>
  </div>
);
