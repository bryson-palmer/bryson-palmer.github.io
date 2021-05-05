import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../Components/NavBar';
import ContactMe from '../Components/Layout/ContactMe';
import Footer from '../Components/Layout/Footer';

const useStyles = makeStyles(() => ({
    root: {
      minHeight: '100vh',
      minWidth: '100vw',
      background: '#1c1c1c',
      backgroundSize: 'cover',
    },
  }));

  export default function About() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <NavBar />
            <ContactMe />
            <Footer />
        </div>        
    );
}


