import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Fade, Collapse } from '@material-ui/core';
import VizSensor from 'react-visibility-sensor';
import NavBar from '../Components/NavBar';
import AboutMe from '../Components/AboutMe';
import ContactMe from '../Components/Layout/ContactMe';
import Footer from '../Components/Layout/Footer';
// import Galaxy from './assets/galaxy.mp4';
// import { YoutubePlayer } from 'reactjs-media';
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

  // iframe: {
  //   minHeight: '90vh',
  //   minWidth: '100vw',
  //   marginTop: '10vh'
  // },
  // video: {
  //   width: '100%',
  //   height: '100%',
  //   position: 'absolute',
  //   top: 0
  // },
  content: {
    minHeight: '100vh',
    minWidth: '100vw',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/milkyway.jpg'})`,
    backgroundBlendMode: 'multiply',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },

}));

// <iframe
  // className={classes.iframe}
  // width="100%"
  // height="70%"
  // src="https://www.youtube.com/embed/iE7PBovWh-E"
  // title="YouTube video player"
  // frameBorder="0"
  // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  // allowFullScreen
// />

// <video autoPlay='autoplay' loop='loop' className={classes.video}>
// <source src={Galaxy} type='video/mp4' />
// Your browser does not support the video tag.
// </video>

// <YoutubePlayer
  // className={classes.video}
  // src='https://youtu.be/iE7PBovWh-E'
  // width={'100%'}
  // height={1500}
  // allowFullScreen
// />

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

            <Collapse
              in={checked}
              {... (checked ? { timeout: 4000 } : {})}
              collapsedHeight={0}
            >
              <AboutMe />
            </Collapse>
          </div>
        </Fade>
      </VizSensor>
      <ContactMe />
      <Footer />
    </div>
  );
}