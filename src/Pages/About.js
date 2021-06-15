import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Fade } from '@material-ui/core';
import VizSensor from 'react-visibility-sensor';
import NavBar from '../Components/NavBar';
import AboutMe from '../Components/AboutMe';
import ContactMe from '../Components/Layout/ContactMe';
import Footer from '../Components/Layout/Footer';
import useWindowWidth from '../hook/useWindowWidth';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    minWidth: '100vw',
    display: 'flex',
    flexDirection: 'column',
    background: '#1c1c1c',
    fontFamily: 'Righteous, cursive',
},
  content: {
    minHeight: '100vh',
    minWidth: '100vw',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/milkyway.jpg'})`,
    backgroundBlendMode: 'multiply',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },

}));

export default function About() {
  const classes = useStyles();
  const windowY = useWindowWidth().height;
  const windowX = useWindowWidth().width;

  // State for fading in and out the header
  const [activeHeader, setActiveHeader] = useState(true);

  // State for helping delay welcome message by delaying check
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
}, []);

  return (
    <div className={classes.root}>
      <VizSensor
        partialVisibility={true}
        offset={{ top: windowX < windowY ? 500 : 250 }}
        scrollDelay={10}
        onChange={(isVisible) => {
          setActiveHeader(isVisible);
        }}
      >
        <Fade in={activeHeader} timeout={1500} >
          <div 
            className={classes.content} 
            style={{backgroundColor: checked ? '#F6B2FF' : '#1c1c1c'}}
            id='header'>

            <NavBar />
            <AboutMe />
          </div>
        </Fade>
      </VizSensor>
      <ContactMe />
      <Footer />
    </div>
  );
}