import React from 'react';
import {makeStyles} from '@material-ui/core';
import ProjectsPage from './pages/Projects/';
import Navbar from './components/Navbar';

const useStyles = makeStyles({
  root:{
    backgroundColor: "#F4F7FC",
    minHeight: "100vh",
  },
});

const App = () => {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <Navbar/>
       <ProjectsPage/>
    </div>
  );
};

export default App;
