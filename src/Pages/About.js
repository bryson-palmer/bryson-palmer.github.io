import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Fade } from '@material-ui/core';
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
    position: 'relative',
    minHeight: '100vh',
    minWidth: '100vw',
    overflow: 'hidden',
    marginBottom: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    background: '#1c1c1c',
    backgroundSize: 'cover',
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    minWidth: '100vw',
    color: '#fff',
    fontFamily: 'Righteous, cursive',
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
            <AboutMe />
          </div>
        </Fade>
      </VizSensor>
      <NavBar />
      <ContactMe />
      <Footer />
    </div>
  );
}