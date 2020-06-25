import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './pages/login';
import Dashboard from './pages/dashboard';
import Alarmclock from './pages/alarmclock';
import Watermixer from './pages/watermixer';
import {isMobile} from 'react-device-detect';
import LoginLoading from './pages/loginLoading';
import {login} from './requests';

const getLoginPage = async (setLoggedIn: any, setAttemptedToLogin: any) => {
  const res = login();
  if (await res) {
    setLoggedIn(true);
  }
  res.then(() => setAttemptedToLogin(true));
};

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isAttemptedToLogin, setAttemptedToLogin] = useState(false);
  const [currentPage, setPage] = useState(0);
  const [open, setOpen] = useState(true);

  if (!isAttemptedToLogin) {
    getLoginPage(setLoggedIn, setAttemptedToLogin);
    return <LoginLoading />;
  }
  if (!isLoggedIn && isAttemptedToLogin) {
    return (
      <LoginPage
        setAttemptedToLogin={setAttemptedToLogin}
        setLoggedIn={setLoggedIn}
      />
    );
  }

  const handleSetPage = (page: number) => {
    if (isMobile) {
      setOpen(false);
    }
    setPage(page);
  };

  switch (currentPage) {
    default:
    case 0:
      return (
        <Dashboard setPage={handleSetPage} open={open} setOpen={setOpen} />
      );
    case 1:
      return (
        <Alarmclock setPage={handleSetPage} open={open} setOpen={setOpen} />
      );
    case 2:
      return (
        <Watermixer setPage={handleSetPage} open={open} setOpen={setOpen} />
      );
  }
};

ReactDOM.render(
  <>
    <App />
  </>,
  // @ts-ignore
  document.getElementById('root'),
);
