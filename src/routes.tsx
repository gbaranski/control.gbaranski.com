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
  },
  {
    path: '/alarmclock',
    name: 'Alarmclock',
    main: () => <Alarmclock />,
    exact: true,
  },
  {
    path: '/watermixer',
    name: 'Watermixer',
    main: () => <Watermixer />,
    exact: true,
  },
];

export default routes;
