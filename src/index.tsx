import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './pages/login';
import Dashboard from './pages/dashboard';
import Alarmclock from './pages/alarmclock';

const App = () => {
  const [currentPage, setPage] = useState(0);

  const [open, setOpen] = React.useState(true);
  switch (currentPage) {
    default:
    case 0:
      return <Dashboard setPage={setPage} open={open} setOpen={setOpen} />;
    case 1:
      return <Alarmclock setPage={setPage} open={open} setOpen={setOpen} />;
  }
};

ReactDOM.render(
  <>
    <App />
  </>,
  // @ts-ignore
  document.getElementById('root'),
);
