import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './pages/login';
import Dashboard from './pages/dashboard';
import {Container} from '@material-ui/core';
import Alarmclock from './pages/alarmclock';
import LeftNavigationBar from './components/leftNavigationBar';

const App = () => {
  const [currentPage, setPage] = useState(0);

  switch (currentPage) {
    default:
    case 0:
      return <Dashboard setPage={setPage} />;
    case 1:
      return <Alarmclock setPage={setPage} />;
  }
};

ReactDOM.render(
  <App />,
  // @ts-ignore
  document.getElementById('root'),
);
