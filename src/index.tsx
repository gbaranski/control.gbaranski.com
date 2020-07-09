import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import routes from './routes';
import LoginPage from './pages/login';
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
    <Router>
      <div className={classes.root}>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={
                <>
                  <LeftNavigationBar
                    open={open}
                    handleDrawerClose={handleDrawerClose}
                    handleDrawerOpen={handleDrawerOpen}
                    currentlyOpen={index}
                    pageName={route.name}
                  />
                  <route.main />
                </>
              }
            />
          ))}
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
