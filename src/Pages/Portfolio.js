import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Components/Layout/Header';
import Work from '../Components/Layout/Work';
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

function Portfolio() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />
            <Work />
            <ContactMe />
            <Footer />
        </div>        
    )
}

export default Portfolio;
