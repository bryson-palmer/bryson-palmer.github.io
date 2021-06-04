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
        fontFamily: 'Righteous, cursive',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/milkyway.jpg'})`,
        backgroundBlendMode: 'multiply',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    container: {
        textAlign: 'center',
    },
    outer: {
        width: '9.5vw',
        height: '2vh',
        border: '3px solid #fff',
        margin: '0rem auto',
        transform: 'perspective(100px) rotateX(40deg)',
    },
    middle: {
        width: '11.5vw',
        height: '3vh',
        border: '3px solid #00ffea',
        margin: '0.2rem auto',
        transform: 'perspective(100px) rotateX(35deg)',
    },
    inner: {
        width: '15vw',
        height: '5vh',
        border: '5px solid #F6B2FF',
        margin: '0.5rem auto',
        transform: 'perspective(100px) rotateX(30deg)',
    },
    welcome: {
        width: '70vw',
        color: '#fff',
        fontSize: '4.5rem',
        lineHeight: '5rem',
        display: 'block',
        marginTop: '-0.5rem',
        marginBottom: '13rem',
        transform: 'perspective(100px) rotateX(20deg)',
        [theme.breakpoints.down('md')]: {
            fontSize: '4.5rem',
            lineHeight: '4.5rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '3.5rem',
            lineHeight: '3.5rem'
        },
        [theme.breakpoints.down('1023')]: {
            fontSize: '3.5rem',
            lineHeight: '3.5rem'
        },
        [theme.breakpoints.down('600')]: {

        },
        [theme.breakpoints.down('541')]: {
            fontSize: '2.5rem',
            lineHeight: '2.5rem'
        },
        [theme.breakpoints.down('412')]: {
            fontSize: '2rem',
            lineHeight: '2rem'
        },
        [theme.breakpoints.down('376')]: {
       
        },
        [theme.breakpoints.down('361')]: {
       
        },
        [theme.breakpoints.down('321')]: {
            fontSize: '1.5rem',
            lineHeight: '1.5rem'
        },
        [theme.breakpoints.down('281')]: {
     
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
                        collapsedHeight={5}
                    >
                        <div className={classes.container}>
                        <div className={classes.outer}></div>
                        <div className={classes.middle}></div>
                        <div className={classes.inner}></div>
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

    );
}
