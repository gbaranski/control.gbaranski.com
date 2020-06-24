import React from 'react';
import Divider from '@material-ui/core/Divider';
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Title from '../title';

interface deviceInfoElement {
  title: string;
  value: number;
  icon?: any;
}

function DeviceInfo(props: any) {
  return props.data.map((_data: deviceInfoElement) => (
    <ListItem>
      <ListItemText primary={_data.title} secondary={_data.value} />
      {_data.icon && (
        <ListItemAvatar>
          <_data.icon />
        </ListItemAvatar>
      )}
    </ListItem>
  ));
}

export default DeviceInfo;
