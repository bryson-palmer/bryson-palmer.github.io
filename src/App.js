import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Portfolio from './Pages/Portfolio';
import About from './Pages/About';
import './App.css';


const useStyles = makeStyles(() => ({
  root: {
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Portfolio />
      <About />
    </div>
  );
}
