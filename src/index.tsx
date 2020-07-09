import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LoginPage from './pages/login';
import Dashboard from './pages/dashboard';
import Alarmclock from './pages/alarmclock';
import Watermixer from './pages/watermixer';
import LoginLoading from './pages/loginLoading';
import {login} from './requests';
import {initializeFirebase} from './firebase';

const getLoginPage = async (setLoggedIn: any, setAttemptedToLogin: any) => {
  const res = login();
  if (await res) {
    setLoggedIn(true);
  }
  res.then(() => setAttemptedToLogin(true));
};

const App = () => {
  useEffect(() => {
    initializeFirebase();
  }, []);

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isAttemptedToLogin, setAttemptedToLogin] = useState(false);
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

  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard open={open} setOpen={setOpen} />
        </Route>
        <Route exact path="/alarmclock">
          <Alarmclock open={open} setOpen={setOpen} />
        </Route>
        <Route exact path="/watermixer">
          <Watermixer open={open} setOpen={setOpen} />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
