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
    outer: {
        width: '30%',
        borderTop: '1px solid #fff',
        paddingTop: '18px',
        margin: '0 auto',
    },
    middle: {
        width: '34%',
        borderTop: '1px solid #00ffea',
        paddingTop: '20px',
        margin: '0 auto',
    },
    inner: {
        width: '39%',
        borderTop: '1px solid #F6B2FF',
        paddingTop: '10px',
        margin: '0 auto',
    },
    container: {
        textAlign: 'center',
    },
    welcome: {
        width: '70vw',
        color: '#fff',
        fontSize: '4.5rem',
        lineHeight: '5rem',
        display: 'block',
        marginTop: '0rem',
        marginBottom: '15rem',
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
                        <div className={classes.outer}></div>
                        <div className={classes.middle}></div>
                        <div className={classes.inner}></div>
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

    );
}
