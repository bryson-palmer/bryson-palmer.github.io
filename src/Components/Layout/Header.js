import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Collapse, Fade } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VizSensor from 'react-visibility-sensor';
import { Link as Scroll } from 'react-scroll';
import NavBar from '../NavBar';
import useWindowWidth from '../../hook/useWindowWidth';

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
    container: {
        textAlign: 'center',
    },
    welcome: {
        color: '#fff',
        fontSize: '4.5rem',
        lineHeight: '5rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '2rem',
            lineHeight: '2rem'
        },
    },
    arrowDown: {
        color: '#00ffea',
        fontSize: '4rem',
    },
}));

export default function Header() {
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
                    style={{backgroundColor: checked ? '#F6B2FF' : '#1c1c1c'}}
                    id='header'>
                    
                    <NavBar />

                    <Collapse
                        in={checked}
                        {... (checked ? { timeout: 4000 } : {})}
                        collapsedHeight={25}
                    >
                        <div className={classes.container}>
                            <h1 className={classes.welcome}>
                                Welcome to <br />
                                My Portfolio
                            </h1>
                            <Scroll to='go-to-work' smooth={true}>
                                <IconButton>
                                    <ExpandMoreIcon className={classes.arrowDown} />
                                </IconButton>
                            </Scroll>
                        </div>
                    </Collapse>
                </div>
            </Fade>
        </VizSensor>

    )
}
