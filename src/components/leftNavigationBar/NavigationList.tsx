import React, {useState, createRef} from 'react';
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
import {NavLink, matchPath, useRouteMatch, useLocation} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/core';

const Icons = (props: {index: number}) => {
  switch (props.index) {
    default:
    case 0:
      return <DashboardIcon />;
    case 1:
      return <AlarmIcon />;
    case 2:
      return <OpacityIcon />;
    case 3:
      return <SettingsRemoteIcon />;
  }
};

const getLink = (index: number) => {
  switch (index) {
    default:
    case 0:
      return '/dashboard';
    case 1:
      return '/alarmclock';
    case 2:
      return '/watermixer';
    case 3:
      return '/gate';
  }
};
const primaryText = (index: number) => {
  if (index === 0) {
    return 'Dashboard';
  } else {
    let returnText = [Object.keys(Devices)[index - 1]];
    if (returnText[0] === Devices.Gate) {
      returnText[0] = `${Devices.Gate} & ${Devices.Garage}`;
    }
    return returnText;
  }
};

const disabledItems = [Devices.Gate];

const checkIfDisabledItem = (index: number) => {
  return disabledItems.includes(Object.values(Devices)[index - 1]);
};

const FancyLink = React.forwardRef(
  (
    props: {
      index: number;
      className: string | undefined;
      navigate: any;
    },
    ref,
  ) => {
    console.log(ref);
    console.log(props);
    return (
      <ListItem
        button
        disabled={checkIfDisabledItem(props.index)}
        key={props.index}
        onClick={props.navigate}
        selected={props.className !== undefined}>
        <ListItemIcon>
          <Icons index={props.index} />
        </ListItemIcon>
        <ListItemText primary={primaryText(props.index)} />
      </ListItem>
    );
  },
);

export const MainListItems = () => {
  return [0, 1, 2, 3].map((_element, index) => {
    return (
      <NavLink
        to={() => getLink(index)}
        activeClassName="selected"
        activeStyle={{color: 'red'}}
        ref={createRef()}
        // @ts-ignore
        index={index}
        component={FancyLink}
      />
    );
  });
};

export const secondaryListItems = (
  <div>
    <ListSubheader inset>More</ListSubheader>
    <ListItem button key={1}>
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="About website" />
    </ListItem>
    <ListItem button disabled key={2}>
      <ListItemIcon>
        <LiveHelpIcon />
      </ListItemIcon>
      <ListItemText primary="Support" />
    </ListItem>
  </div>
);
