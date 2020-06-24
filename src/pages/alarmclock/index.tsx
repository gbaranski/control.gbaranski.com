import React from 'react';
import LeftNavigationBar from '../../components/leftNavigationBar';

function Alarmclock(props: {setPage: any}) {
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <LeftNavigationBar
      open={open}
      handleDrawerClose={handleDrawerClose}
      handleDrawerOpen={handleDrawerOpen}
      currentlyOpen={1}
      setPage={props.setPage}
    />
  );
}

export default Alarmclock;
