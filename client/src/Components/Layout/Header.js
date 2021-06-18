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
        marginTop: '5rem',
    },
    triangle: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
       
    },
    triangleLeft: {
        width: 0,
        height: 0,
        borderLeft: '50px solid transparent',
        borderRight: '50px solid transparent',
        borderBottom: '60px solid rgba(255, 255, 255, 0.5)',
        zIndex: 0,
        [theme.breakpoints.down('845')]: {
            borderLeft: '40px solid transparent',
            borderRight: '40px solid transparent',
            borderBottom: '50px solid rgba(255, 255, 255, 0.5)',
        },
        [theme.breakpoints.down('654')]: {
            borderLeft: '30px solid transparent',
            borderRight: '30px solid transparent',
            borderBottom: '40px solid rgba(255, 255, 255, 0.5)',
        },
        [theme.breakpoints.down('321')]: {
            borderLeft: '20px solid transparent',
            borderRight: '20px solid transparent',
            borderBottom: '30px solid rgba(255, 255, 255, 0.5)',
        },
    },
    triangleMid: {
        width: 0,
        height: 0,
        borderLeft: '60px solid transparent',
        borderRight: '60px solid transparent',
        borderBottom: '90px solid rgba(0, 255, 234, 0.5)',
        [theme.breakpoints.down('845')]: {
            borderLeft: '50px solid transparent',
            borderRight: '50px solid transparent',
            borderBottom: '80px solid rgba(0, 255, 234, 0.5)',
        },
        [theme.breakpoints.down('654')]: {
            borderLeft: '40px solid transparent',
            borderRight: '40px solid transparent',
            borderBottom: '60px solid rgba(0, 255, 234, 0.5)',
        },
        [theme.breakpoints.down('321')]: {
            borderLeft: '30px solid transparent',
            borderRight: '30px solid transparent',
            borderBottom: '50px solid rgba(0, 255, 234, 0.5)',
        },
    },
    triangleRight: {
        width: 0,
        height: 0,
        borderLeft: '50px solid transparent',
        borderRight: '50px solid transparent',
        borderBottom: '60px solid rgba(246, 178, 255, 0.5)',
        marginLeft: '1.3rem',
        [theme.breakpoints.down('845')]: {
            borderLeft: '40px solid transparent',
            borderRight: '40px solid transparent',
            borderBottom: '50px solid rgba(246, 178, 255, 0.5)',
        },
        [theme.breakpoints.down('654')]: {
            borderLeft: '30px solid transparent',
            borderRight: '30px solid transparent',
            borderBottom: '40px solid rgba(246, 178, 255, 0.5)',
        },
        [theme.breakpoints.down('321')]: {
            borderLeft: '20px solid transparent',
            borderRight: '20px solid transparent',
            borderBottom: '30px solid rgba(246, 178, 255, 0.5)',
        },
    },
    welcome: {
        width: '70vw',
        color: '#fff',
        fontSize: '4.5rem',
        lineHeight: '4.5rem',
        display: 'block',
        marginBottom: '13rem',
        transform: 'perspective(100px) rotateX(20deg)',
        [theme.breakpoints.down('md')]: {
            fontSize: '4.5rem',
            lineHeight: '4.5rem'
        },
        [theme.breakpoints.down('1025')]: {
            fontSize: '4rem',
            lineHeight: '4rem',
            marginBottom: '10rem',
        },
        [theme.breakpoints.down('845')]: {
            fontSize: '3.5rem',
            lineHeight: '3.5rem',
            marginBottom: '1rem',
        },
        [theme.breakpoints.down('668')]: {
            marginTop: '5rem',
            fontSize: '3rem',
            lineHeight: '3rem'
        },
        [theme.breakpoints.down('415')]: {
            fontSize: '2.5rem',
            lineHeight: '2.5rem'
        },
        [theme.breakpoints.down('321')]: {
            fontSize: '2rem',
            lineHeight: '2rem',
            marginTop: '3rem',
            transform: 'perspective(60px) rotateX(20deg)',
        },
    },
    arrowDown: {
        color: '#00ffea',
        fontSize: '4rem',
        transition: 'all .5s ease-in-out',
        '&:hover': {
            filter: 'drop-shadow(0px 0px 2px #fff)',
        },
        [theme.breakpoints.down('654')]: {
            fontSize: '3rem',
        },
        [theme.breakpoints.down('541')]: {
            fontSize: '3rem',
        },
        [theme.breakpoints.down('415')]: {
            fontSize: '2.5rem',
        },
        [theme.breakpoints.down('321')]: {
            fontSize: '2rem',
        },
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
            offset={{ top: windowX < windowY ? 500 : 250 }}
            scrollDelay={10}
            onChange={(isVisible) => {
                setActiveHeader(isVisible);
            }}
        >
            <Fade in={activeHeader} timeout={1500}  >
                <div
                    className={classes.root}
                    style={{ backgroundColor: checked ? '#F6B2FF' : '#1c1c1c' }}
                    id='header'>

                    <NavBar />

                    <Collapse
                        in={checked}
                        {... (checked ? { timeout: 4000 } : {})}
                        collapsedHeight={5}
                    >
                        <div className={classes.container}>

                            {/* Triangles */}
                            <div className={classes.triangle}>
                                <div className={classes.triangleLeft}>
                                    <div className={classes.triangleMid}></div>
                                </div>
                                <div className={classes.triangleRight}></div>
                            </div>

                            <h1 className={classes.welcome}
                                style={{
                                    marginTop: 
                                        (windowX > windowY && windowX < 668 && '2rem'),
                                    fontSize:
                                        (windowX > windowY && windowX < 668 && '2rem'),
                                    lineHeight:
                                        (windowX > windowY && windowX < 668 && '2rem'),
                                }}
                            >
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
