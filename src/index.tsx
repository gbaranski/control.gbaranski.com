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
import LeftNavigationBar from './components/leftNavigationBar';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

const getLoginPage = async (setLoggedIn: any, setAttemptedToLogin: any) => {
  const res = login();
  if (await res) {
    setLoggedIn(true);
  }
  res.then(() => setAttemptedToLogin(true));
};

const App = () => {
  const classes = useStyles();
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

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <Router>
        <Switch>
          <Route path="/dashboard">
            <LeftNavigationBar
              open={open}
              handleDrawerClose={handleDrawerClose}
              handleDrawerOpen={handleDrawerOpen}
              currentlyOpen={0}
              pageName="Dashboard"
            />
            <Dashboard open={open} setOpen={setOpen} />
          </Route>
          <Route exact path="/alarmclock">
            <LeftNavigationBar
              open={open}
              handleDrawerClose={handleDrawerClose}
              handleDrawerOpen={handleDrawerOpen}
              currentlyOpen={1}
              pageName="Alarmclock"
            />
            <Alarmclock open={open} setOpen={setOpen} />
          </Route>
          <Route exact path="/watermixer">
            <LeftNavigationBar
              open={open}
              handleDrawerClose={handleDrawerClose}
              handleDrawerOpen={handleDrawerOpen}
              currentlyOpen={2}
              pageName="Watermixer"
            />
            <Watermixer open={open} setOpen={setOpen} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
