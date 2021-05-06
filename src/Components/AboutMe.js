import React, {  useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../Components/NavBar';
import { Fade } from '@material-ui/core';
import VizSensor from 'react-visibility-sensor';
import useWindowWidth from '../hook/useWindowWidth';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        minWidth: '100vw',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/milkyway.jpg'})`,
        backgroundBlendMode: 'multiply',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
}));

export default function AboutMe() {
    const classes = useStyles();
    const windowY = useWindowWidth().height;
    const windowX = useWindowWidth().width;
    
    // State for fading in and out the header
    const [activeHeader, setActiveHeader] = useState(true);

    return (
        <VizSensor
            partialVisibility={true}
            offset={{ top: windowX < windowY ? 500 : 250}}
            scrollDelay={10}
            onChange={(isVisible) => {
                setActiveHeader(isVisible);
            }}
        >
            <Fade in={activeHeader} timeout={1500}  >
                <div
                    className={classes.root} 
                    id='aboutMe'>
                    
                    <NavBar />
                </div>
            </Fade>
        </VizSensor>
    );
}
