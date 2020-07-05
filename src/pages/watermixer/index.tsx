import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LeftNavigationBar from '../../components/leftNavigationBar';
import Copyright from '../../components/copyright';
import {mdiWater} from '@mdi/js';
import {mdiClock} from '@mdi/js';
import Icon from '@mdi/react';
import DeviceManager from '../../components/deviceManager';
import DeviceInfo from '../../components/deviceInfo';
import green from '@material-ui/core/colors/green';
import CloseIcon from '@material-ui/icons/Close';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import Snackbar from '@material-ui/core/Snackbar';
import {WatermixerData} from '@gbaranski/types';
import {useInterval} from '../../helpers';
import {getWatermixerData, startMixing} from '../../requests';

const drawerWidth = 240;
const pageIndex = 2;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

function parseSeconds(seconds: number) {
  return `${Math.floor((seconds / 60) % 60)}m ${seconds % 60}s`;
}

function Watermixer(props: {setPage: any; open: boolean; setOpen: any}) {
  const classes = useStyles();

  const handleDrawerOpen = () => {
    props.setOpen(true);
  };
  const handleDrawerClose = () => {
    props.setOpen(false);
  };

  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const [data, setData] = React.useState<WatermixerData | undefined>(undefined);
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleStartMixing = async () => {
    const res = await startMixing();
    if (res) {
      setSnackbarMessage('Success mixing water!');
    } else {
      setSnackbarMessage('Success mixing water!');
    }
    setSnackbarOpen(true);
    setTimeout(() => {
      setSnackbarOpen(false);
    }, 1000);
  };

  useInterval(async () => {
    setData(await getWatermixerData());
  }, 1000);

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const deviceInfo = [
    {
      title: 'Current state',
      description: `Water should be ${data?.isTimerOn ? 'warm' : 'cold'}`,
      icon: <Icon path={mdiWater} size={2} color="rgb(117,117,117)" />,
    },
    {
      title: 'Remaining time',
      description: data ? parseSeconds(data.remainingSeconds) : '0',
      icon: (
        <Icon
          path={mdiClock}
          size={1.5}
          color="rgb(117,117,117)"
          style={{marginLeft: '8%'}}
        />
      ),
    },
  ];

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className={classes.root}>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          message={snackbarMessage}
          action={
            <React.Fragment>
              <Button
                color="secondary"
                size="small"
                onClick={handleSnackbarClose}>
                UNDO
              </Button>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleSnackbarClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />

        <CssBaseline />
        <LeftNavigationBar
          open={props.open}
          handleDrawerClose={handleDrawerClose}
          handleDrawerOpen={handleDrawerOpen}
          currentlyOpen={pageIndex}
          setPage={props.setPage}
          pageName="Watermixer"
        />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={12}>
                <Paper className={fixedHeightPaper}>
                  <DeviceInfo data={deviceInfo} />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <DeviceManager
                    data={[
                      {
                        onClick: handleStartMixing,
                        innerText: 'Start mixing',
                      },
                    ]}
                  />
                </Paper>
              </Grid>
            </Grid>
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default Watermixer;
