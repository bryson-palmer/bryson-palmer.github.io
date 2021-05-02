import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './Components/Layout/Header';
import Work from './Components/Layout/Work';
import ContactMe from './Components/Layout/ContactMe';
import Footer from './Components/Layout/Footer';
import './App.css';


const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    minWidth: '100vw',
    background: '#1c1c1c',
    backgroundSize: 'cover',
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Work />
      <ContactMe />
      <Footer />
    </div>
  );
}
