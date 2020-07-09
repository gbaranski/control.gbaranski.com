import React from 'react';
import Dashboard from './pages/dashboard';
import Alarmclock from './pages/alarmclock';
import Watermixer from './pages/watermixer';

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    main: () => <Dashboard />,
    exact: true,
    navbar: true,
  },
  {
    path: '/alarmclock',
    name: 'Alarmclock',
    main: () => <Alarmclock />,
    exact: true,
    navbar: true,
  },
  {
    path: '/watermixer',
    name: 'Watermixer',
    main: () => <Watermixer />,
    exact: true,
    navbar: true,
  },
];

export default routes;
